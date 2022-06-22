package mn.jwt.data.services;

import io.micronaut.transaction.annotation.ReadOnly;
import mn.jwt.data.domain.Consumptions;
import mn.jwt.data.dtos.ConsumptionDto;
import mn.jwt.data.mappers.ConsumptionMapper;
import mn.jwt.data.repositories.ConsumptionsRepository;

import javax.inject.Singleton;
import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

@Singleton
public class ConsumptionsRepositoryImpl implements ConsumptionsRepository {
    EntityManager entityManager;
    ConsumptionMapper consumptionMapper;

    public ConsumptionsRepositoryImpl(EntityManager entityManager, ConsumptionMapper consumptionMapper) {
        this.entityManager = entityManager;
        this.consumptionMapper = consumptionMapper;
    }

    @Override
    @ReadOnly
    public List<ConsumptionDto> findByOrderId(Long id) {
        List<ConsumptionDto> consumptionDtos = new ArrayList<>();
        entityManager.createQuery("SELECT c FROM Consumptions c WHERE c.orderRequest.id=" + id)
                .getResultList().stream().forEach(consumption -> consumptionDtos.add(consumptionMapper.toDto((Consumptions) consumption)));
        return consumptionDtos;
    }
}
