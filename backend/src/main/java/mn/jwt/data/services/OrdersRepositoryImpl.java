package mn.jwt.data.services;

import io.micronaut.transaction.annotation.ReadOnly;
import mn.jwt.data.domain.OrderRequests;
import mn.jwt.data.dtos.OrderDto;
import mn.jwt.data.mappers.OrderMapper;
import mn.jwt.data.repositories.OrdersRepository;

import javax.inject.Singleton;
import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Singleton
public class OrdersRepositoryImpl implements OrdersRepository {

    private final EntityManager entityManager;
    private final OrderMapper orderMapper;

    public OrdersRepositoryImpl(EntityManager entityManager, OrderMapper orderMapper){
        this.entityManager = entityManager;
        this.orderMapper = orderMapper;
    }

//    @Override
//    @ReadOnly
//    public List<OrderDto> findAll(Long id) {
//        List<OrderDto> orderDtos = new ArrayList<>();
//        entityManager.createQuery("SELECT c FROM OrderRequests c WHERE c.user.id =" + id)
//                .getResultList().stream().forEach(order -> orderDtos.add(orderMapper.toDto((OrderRequests)order)));
//        return orderDtos;
//    }

    @Override
    @ReadOnly
    public List<OrderRequests> findAll(Long id) {
        return entityManager.createQuery("SELECT c FROM OrderRequests c WHERE c.user.id =" + id)
                .getResultList();
    }

//    @Override
//    @ReadOnly
//    public Optional<OrderDto> findById(Long id) {
//        Object order =  entityManager.createQuery("SELECT c FROM OrderRequests c WHERE c.id = :id")
//                .setParameter("id", id)
//                .setMaxResults(1)
//                .getResultList()
//                .stream()
//                .findFirst();
//        return Optional.ofNullable(orderMapper.toDto((OrderRequests) order));
//    }

    @Override
    @ReadOnly
    public Optional<OrderRequests> findById(Long id) {
        return entityManager.createQuery("SELECT c FROM OrderRequests c WHERE c.id = :id")
                .setParameter("id", id)
                .setMaxResults(1)
                .getResultList()
                .stream()
                .findFirst();
    }
}
