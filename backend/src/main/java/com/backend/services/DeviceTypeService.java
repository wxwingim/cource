package com.backend.services;

import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.backend.entities.DeviceType;
import com.backend.repositories.DeviceTypeRepository;
import io.micronaut.transaction.annotation.ReadOnly;
import io.micronaut.transaction.annotation.TransactionalAdvice;
import jakarta.inject.Singleton;

@Singleton
public class DeviceTypeService implements DeviceTypeRepository {

    private final EntityManager entityManager;

    public DeviceTypeService(EntityManager entityManager) {
        this.entityManager = entityManager;

    }

    @Override
    @ReadOnly
    public List<DeviceType> findAll() {
        return entityManager.
                createQuery("SELECT c FROM DeviceType c").
                getResultList();
    }
}
