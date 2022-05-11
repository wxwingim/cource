package com.backend.controllers;

import java.util.List;
import java.util.Optional;

import com.backend.entities.DeviceType;
import com.backend.repositories.DeviceTypeRepository;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Delete;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Post;
import io.micronaut.http.annotation.Put;
import io.micronaut.scheduling.TaskExecutors;
import io.micronaut.scheduling.annotation.ExecuteOn;

@ExecuteOn(TaskExecutors.IO)
@Controller("/devicetypes")
public class DevicetypeController {

    protected final DeviceTypeRepository deviceTypeRepository;

    public DevicetypeController(DeviceTypeRepository deviceTypeRepository) {
        this.deviceTypeRepository = deviceTypeRepository;
    }

    @Get("/all")
    public List<DeviceType> getDeviceTypes(){
        return deviceTypeRepository.findAll();
    }
}
