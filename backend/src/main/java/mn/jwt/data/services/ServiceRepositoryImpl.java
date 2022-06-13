package mn.jwt.data.services;
import io.micronaut.transaction.annotation.ReadOnly;
import mn.jwt.data.domain.DefectTypes;
import mn.jwt.data.domain.Defects;
import mn.jwt.data.domain.Services;
import mn.jwt.data.repositories.ServiceRepository;
//import jakarta.inject.Singleton;

import javax.inject.Singleton;
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
                createQuery("SELECT c FROM Services c WHERE c.deviceType.id=" + getServiceId(nameType)).getResultList();
    }

    @Override
    @ReadOnly
    public List<DefectTypes> findAllDefectTypesByService(String nameType) {
        return entityManager.
                createQuery("SELECT c FROM DefectTypes c WHERE c.deviceType.id=" + getServiceId(nameType)).getResultList();
    }

    @Override
    @ReadOnly
    public List<Defects> findAllDefectsByType(Integer id) {
        return entityManager.
                createQuery("SELECT c FROM Defects c WHERE c.defectType.id=" + id).getResultList();
    }

    private Integer getServiceId(String nameType){
        Integer id;
        switch (nameType) {
            case ("monitors"):
                id = 5;
                break;
            case ("tablets"):
                id = 4;
                break;
            case ("phones"):
                id=2;
                break;
            case ("laptops"):
                id = 1;
                break;
            case ("monoblocks"):
                id = 3;
                break;
            case ("computers"):
                id = 6;
                break;
            case ("console"):
                id = 7;
                break;
            case ("cameras"):
                id = 8;
                break;
            case ("watch"):
                id = 9;
                break;
            default:
                id=1;
                break;
        }
        return id;
    }

}
