package com.backend.auth;

import com.backend.domain.Users;
import com.backend.impl.UserRepositoryImpl;
import com.backend.repositories.UserRepository;
import io.micronaut.security.authentication.Authentication;
import io.micronaut.security.errors.OauthErrorResponseException;
import io.micronaut.security.token.event.RefreshTokenGeneratedEvent;
import io.micronaut.security.token.refresh.RefreshTokenPersistence;
import jakarta.inject.Singleton;
import org.reactivestreams.Publisher;
import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;

import java.util.Optional;

import static io.micronaut.security.errors.IssuingAnAccessTokenErrorCode.INVALID_GRANT;

public class CustomRefreshTokenPersistence implements RefreshTokenPersistence {

    private final UserRepository userRepository;

    public CustomRefreshTokenPersistence(UserRepository userRepository) { // <2>
        this.userRepository = userRepository;
    }

    @Override
    public void persistToken(RefreshTokenGeneratedEvent event) { // <3>
        if (event != null &&
                event.getRefreshToken() != null &&
                event.getAuthentication() != null &&
                event.getAuthentication().getName() != null) {
            String payload = event.getRefreshToken();
            userRepository.saveRefreshToken(event.getAuthentication().getName(), payload, false);
        }
    }

    @Override
    public Publisher<Authentication> getAuthentication(String refreshToken) {
        return Flux.create(emitter -> {
            Optional<Users> userOpt = userRepository.findByRefreshToken(refreshToken);
            if (userOpt.isPresent()) {
                Users user = userOpt.get();
                if (user.getRevoked()) {
                    emitter.error(new OauthErrorResponseException(INVALID_GRANT, "refresh token revoked", null)); // <5>
                } else {
                    emitter.next(Authentication.build(user.getEmail())); // <6>
                    emitter.complete();
                }
            } else {
                emitter.error(new OauthErrorResponseException(INVALID_GRANT, "refresh token not found", null)); // <7>
            }
        }, FluxSink.OverflowStrategy.ERROR);
    }
}
