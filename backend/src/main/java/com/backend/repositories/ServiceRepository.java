package com.backend.repositories;

import com.backend.SortingAndOrderArguments;
import com.backend.domain.DefectTypes;
import com.backend.domain.Defects;
import com.backend.domain.DeviceTypes;
import com.backend.domain.Services;

import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

public interface ServiceRepository {
    Optional<Services> findById(Integer id);
    List<Services> findAll(String nameType);

    List<DefectTypes> findAllDefectTypesByService(String nameType);

    List<Defects> findAllDefectsByType(Integer id);
}
