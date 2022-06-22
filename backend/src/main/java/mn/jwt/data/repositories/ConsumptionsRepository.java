package mn.jwt.data.repositories;

import mn.jwt.data.dtos.ConsumptionDto;

import java.util.List;

public interface ConsumptionsRepository {
    List<ConsumptionDto> findByOrderId(Long id);
}
