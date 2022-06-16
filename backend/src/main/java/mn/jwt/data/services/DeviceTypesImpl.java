package mn.jwt.data.services;

import io.micronaut.transaction.annotation.ReadOnly;
import mn.jwt.data.domain.DeviceTypes;
import mn.jwt.data.repositories.DeviceTypesRepository;

import javax.inject.Singleton;
import javax.persistence.EntityManager;
import java.util.List;

@Singleton
public class DeviceTypesImpl implements DeviceTypesRepository {
    private final EntityManager entityManager;

    public DeviceTypesImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    @Override
    @ReadOnly
    public List<DeviceTypes> findAll(){
        return entityManager.createQuery("SELECT c FROM DeviceTypes c").getResultList();
    }
}
