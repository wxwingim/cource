package com.backend.repositories;

import com.backend.entities.DeviceType;

import java.util.List;
import java.util.Optional;

public interface DeviceTypeRepository {

    List<DeviceType> findAll();

}
