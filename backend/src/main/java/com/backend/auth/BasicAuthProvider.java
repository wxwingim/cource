package com.backend.auth;

import java.util.Optional;

import com.backend.repositories.UserRepository;
import io.micronaut.core.annotation.Nullable;
import io.micronaut.http.HttpRequest;
import io.micronaut.security.authentication.AuthenticationProvider;
import io.micronaut.security.authentication.AuthenticationRequest;
import io.micronaut.security.authentication.AuthenticationResponse;
import io.micronaut.security.authentication.UsernamePasswordCredentials;
import jakarta.inject.Singleton;
import org.reactivestreams.Publisher;
import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;

@Singleton
public class BasicAuthProvider implements AuthenticationProvider {

    UserRepository userRepository;

    public BasicAuthProvider(UserRepository userRepository){
        this.userRepository = userRepository;
    }



    @Override
    public Publisher<AuthenticationResponse> authenticate(@Nullable HttpRequest<?> httpRequest,
                                                          AuthenticationRequest<?, ?> authenticationRequest) {

        final String username = authenticationRequest.getIdentity().toString();

        final String password = userRepository.findByEmail(username).get().getPassword();

        return Flux.create(emitter -> {
            if (authenticationRequest.getSecret().toString() == password) {
                emitter.next(AuthenticationResponse.success((String) authenticationRequest.getIdentity()));
                emitter.complete();
            } else {
                emitter.error(AuthenticationResponse.exception());
            }
        }, FluxSink.OverflowStrategy.ERROR);
    }
}
