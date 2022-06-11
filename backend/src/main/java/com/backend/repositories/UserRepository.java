package com.backend.repositories;

import com.backend.SortingAndOrderArguments;
import com.backend.domain.*;

import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

public interface UserRepository {
    Optional<Users> findByEmail(String email);
    Optional<Users> findByRefreshToken(String refreshToken);
    void saveRefreshToken(String email, String refreshToken, Boolean revoked);
}
