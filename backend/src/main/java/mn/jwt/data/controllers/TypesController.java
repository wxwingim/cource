package mn.jwt.data.controllers;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.scheduling.TaskExecutors;
import io.micronaut.scheduling.annotation.ExecuteOn;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import mn.jwt.data.domain.DeviceTypes;
import mn.jwt.data.repositories.DeviceTypesRepository;

import java.util.List;

@ExecuteOn(TaskExecutors.IO)
@Controller("/types")
public class TypesController {

    DeviceTypesRepository deviceTypesRepository;

    public TypesController(DeviceTypesRepository deviceTypesRepository) {
        this.deviceTypesRepository = deviceTypesRepository;
    }

    @Get("/devices")
    @Secured(SecurityRule.IS_ANONYMOUS)
    public List<DeviceTypes> getDevices(String nameType){
        return deviceTypesRepository.findAll();
    }

    @Get("/all")
    @Secured(SecurityRule.IS_ANONYMOUS)
    public List<DeviceTypes> getAllDevices(){
        return deviceTypesRepository.findAll();
    }

}
