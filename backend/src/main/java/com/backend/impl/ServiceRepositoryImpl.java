package com.backend.impl;


import com.backend.ApplicationConfiguration;
import com.backend.SortingAndOrderArguments;
import com.backend.domain.Services;
import com.backend.repositories.ServiceRepository;
import io.micronaut.transaction.annotation.ReadOnly;
import jakarta.inject.Singleton;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Singleton
public class ServiceRepositoryImpl implements ServiceRepository {
    private static final List<String> VALID_PROPERTY_NAMES = Arrays.asList("id", "name");
    private final EntityManager entityManager;
//    private final ApplicationConfiguration applicationConfiguration;
//
//    public ServiceRepositoryImpl(EntityManager entityManager,
//                               ApplicationConfiguration applicationConfiguration) {
//        this.entityManager = entityManager;
//        this.applicationConfiguration = applicationConfiguration;
//    }

    public ServiceRepositoryImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    @Override
    @ReadOnly
    public Optional<Services> findById(Integer id) {
        return Optional.ofNullable(entityManager.find(Services.class, id));
    }

    @Override
    @ReadOnly
    public List<Services> findAll(String nameType) {
        return entityManager.
                createQuery("SELECT c FROM Services c WHERE c.deviceType.id=1").getResultList();
    }
}
