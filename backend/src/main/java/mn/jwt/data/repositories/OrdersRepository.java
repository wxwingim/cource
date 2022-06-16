package mn.jwt.data.repositories;

import io.micronaut.data.annotation.Repository;
import mn.jwt.data.domain.OrderRequests;

import java.util.List;

public interface OrdersRepository {
    List<OrderRequests> findAll(Long id);
}
