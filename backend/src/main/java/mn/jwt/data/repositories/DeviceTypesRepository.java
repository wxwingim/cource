package mn.jwt.data.repositories;

import io.micronaut.data.annotation.Repository;
import io.micronaut.data.repository.CrudRepository;
import mn.jwt.data.domain.DeviceTypes;

import java.util.List;

@Repository
public interface DeviceTypesRepository {
    List<DeviceTypes> findAll();
}
