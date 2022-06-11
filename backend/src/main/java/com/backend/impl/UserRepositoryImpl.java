package com.backend.impl;

import com.backend.domain.Users;
import com.backend.repositories.UserRepository;
import io.micronaut.transaction.annotation.ReadOnly;
import jakarta.inject.Singleton;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;
import java.util.Queue;

@Singleton
public class UserRepositoryImpl implements UserRepository{
//    private final EntityManager entityManager;
//    public ServiceRepositoryImpl(EntityManager entityManager){
//        this.entityManager = entityManager;
//    }
    private final EntityManager entityManager;

    public UserRepositoryImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @ReadOnly
    public Optional<Users> findByEmail(String email) {

//        List<Users> users = entityManager
//                .createQuery("SELECT c FROM Users c where c.email = '" + email + "'").getResultList();

//        String test = "test";

        Optional result = entityManager
                .createQuery("SELECT c FROM Users c WHERE c.email = '" + email + "'")
                .setMaxResults(1)
                .getResultList()
                .stream()
                .findFirst();

        return result;
    }

    @Override
    public Optional<Users> findByRefreshToken(String refreshToken) {
        return entityManager.createQuery("SELECT c FROM Users c WHERE c.refresh_token= :refreshToken")
                .setParameter("refreshToken", refreshToken)
                .getResultList()
                .stream()
                .findFirst();
    }

    public void saveRefreshToken(String email, String refreshToken, Boolean revoked){
        Users user = findByEmail(email).get();
        entityManager.createQuery("UPDATE Users c SET c.refresh_token = :refreshToken, c.revoked = :revoked " +
                "WHERE id ="+ user.getId())
                .setParameter("refresh_token", refreshToken)
                .setParameter("revoked", revoked);
    }
}
