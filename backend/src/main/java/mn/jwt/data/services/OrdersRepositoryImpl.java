package mn.jwt.data.services;

import io.micronaut.transaction.annotation.ReadOnly;
import mn.jwt.data.domain.OrderRequests;
import mn.jwt.data.domain.User;
import mn.jwt.data.repositories.OrdersRepository;

import javax.inject.Singleton;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Singleton
public class OrdersRepositoryImpl implements OrdersRepository {

    private final EntityManager entityManager;

    public OrdersRepositoryImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    @Override
    @ReadOnly
    public List<OrderRequests> findAll(Long id) {
        return entityManager.createQuery("SELECT c FROM OrderRequests c WHERE c.user.id =" + id)
                .getResultList();
    }
}
