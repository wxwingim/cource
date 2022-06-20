package mn.jwt.data.services;

import io.micronaut.transaction.annotation.ReadOnly;
import mn.jwt.data.domain.OrderRequests;
import mn.jwt.data.domain.Works;
import mn.jwt.data.dtos.WorksDto;
import mn.jwt.data.mappers.WorksMapper;
import mn.jwt.data.repositories.WorksRepository;

import javax.inject.Singleton;
import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

@Singleton
public class WorksRepositoryImpl implements WorksRepository {
    EntityManager entityManager;
    WorksMapper worksMapper;

    public WorksRepositoryImpl(EntityManager entityManager, WorksMapper worksMapper) {
        this.entityManager = entityManager;
        this.worksMapper = worksMapper;
    }

    @Override
    @ReadOnly
    public List<WorksDto> findAll(Long id) {
        List<WorksDto> worksDtos = new ArrayList<>();
        entityManager.createQuery("SELECT c FROM Works c WHERE c.orderRequest.id=" + id)
                .getResultList().stream().forEach(work -> worksDtos.add(worksMapper.toDto((Works) work)));
        return worksDtos;
    }
}
