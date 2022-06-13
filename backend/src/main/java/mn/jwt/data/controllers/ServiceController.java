package mn.jwt.data.controllers;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.scheduling.TaskExecutors;
import io.micronaut.scheduling.annotation.ExecuteOn;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import mn.jwt.data.domain.DefectTypes;
import mn.jwt.data.domain.Defects;
import mn.jwt.data.domain.Services;
import mn.jwt.data.repositories.ServiceRepository;

import java.util.ArrayList;
import java.util.List;

@ExecuteOn(TaskExecutors.IO)
@Controller("/service")
public class ServiceController {
    private final ServiceRepository serviceRepository;

    public ServiceController(ServiceRepository serviceRepository){
        this.serviceRepository = serviceRepository;
    }

    @Get("/type/{nameType}")
    @Secured(SecurityRule.IS_ANONYMOUS)
    public List<Services> getServices(String nameType){
        return serviceRepository.findAll(nameType);
    }

    @Get("/defects/{nameType}")
    @Secured(SecurityRule.IS_ANONYMOUS)
    public List<List<Defects>> getDefects(String nameType){
        List<List<Defects>> result = new ArrayList<>();
        List<DefectTypes> defectTypes = serviceRepository.findAllDefectTypesByService(nameType);
        for(DefectTypes type: defectTypes){
            result.add(serviceRepository.findAllDefectsByType(type.getId()));
        }
        return result;
    }

    @Get("/defectTypes/{nameType}")
    @Secured(SecurityRule.IS_ANONYMOUS)
    public List<DefectTypes> getDefectTypes(String nameType){
        return serviceRepository.findAllDefectTypesByService(nameType);
    }
}
