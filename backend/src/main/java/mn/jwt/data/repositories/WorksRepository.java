package mn.jwt.data.repositories;

import mn.jwt.data.dtos.WorksDto;

import java.util.List;

public interface WorksRepository {
    List<WorksDto> findAll(Long id);
}
