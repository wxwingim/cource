package mn.jwt.data.repositories;

import io.micronaut.data.annotation.Repository;
import mn.jwt.data.domain.OrderRequests;
import mn.jwt.data.dtos.OrderDto;

import java.util.List;
import java.util.Optional;

public interface OrdersRepository {
    List<OrderRequests> findAll(Long id);

    Optional<OrderRequests> findById(Long id);
}
