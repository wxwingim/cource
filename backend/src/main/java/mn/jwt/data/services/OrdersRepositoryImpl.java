package mn.jwt.data.services;

import io.micronaut.transaction.annotation.ReadOnly;
import mn.jwt.data.domain.OrderRequests;
import mn.jwt.data.dtos.OrderDto;
import mn.jwt.data.mappers.OrderMapper;
import mn.jwt.data.repositories.OrdersRepository;

import javax.inject.Singleton;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
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

    @Override
    @ReadOnly
    public List<OrderDto> findAll(Long id) {
        List<OrderDto> orderDtos = new ArrayList<>();
        entityManager.createQuery("SELECT c FROM OrderRequests c WHERE c.user.id =" + id + "ORDER BY c.id DESC")
                .getResultList().stream().forEach(order -> orderDtos.add(orderMapper.toDto((OrderRequests)order)));
        return orderDtos;
    }

    @Override
    @ReadOnly
    public Optional<OrderDto> findById(Long id) {
        return entityManager.createQuery("SELECT c FROM OrderRequests c WHERE c.id = :id")
                .setParameter("id", id)
                .setMaxResults(1)
                .getResultList()
                .stream()
                .findFirst()
                .map(order -> orderMapper.toDto((OrderRequests)order));
//        return Optional.of(orderMapper.toDto((OrderRequests)order));
    }

    @Override
    @ReadOnly
    public Long getLastId() {
        Optional<OrderDto> lastOrder = entityManager.createQuery("SELECT c FROM OrderRequests c ORDER BY c.id DESC")
                .setMaxResults(1)
                .getResultList()
                .stream()
                .findFirst()
                .map(order -> orderMapper.toDto((OrderRequests)order));
        return lastOrder.get().getId();
    }

    @Override
    @Transactional
    public void createOrder(OrderDto orderDto, Long userId) {
        entityManager.createNativeQuery("INSERT INTO order_requests (id, addres, date_request, defect, equipment, mechanical_damage, model, quarantee, id_device_type, id_user, id_status_type)  " +
                "VALUES (?, ?, now(), ?, ?, ?, ?, false, ?, ?, 12)")
                .setParameter(1, getLastId() + 1)
                .setParameter(2, orderDto.getAddres())
                .setParameter(3, orderDto.getDefect())
                .setParameter(4, orderDto.getEquipment())
                .setParameter(5, orderDto.getMechanicalDamage())
                .setParameter(6, orderDto.getModel())
                .setParameter(7, orderDto.getDeviceType().getId())
                .setParameter(8, userId)
                .executeUpdate();
    }

    @Override
    @Transactional
    public void payOrder(Long id) {
        entityManager.createNativeQuery("UPDATE order_requests SET id_status_type = 8 WHERE id = ?")
                .setParameter(1, id)
                .executeUpdate();
    }
}
