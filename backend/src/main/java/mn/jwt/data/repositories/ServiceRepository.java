package mn.jwt.data.repositories;

import mn.jwt.data.domain.DefectTypes;
import mn.jwt.data.domain.Defects;
import mn.jwt.data.domain.Services;

import java.util.List;
import java.util.Optional;

public interface ServiceRepository {
    Optional<Services> findById(Integer id);
    List<Services> findAll(String nameType);

    List<DefectTypes> findAllDefectTypesByService(String nameType);

    List<Defects> findAllDefectsByType(Integer id);
}
