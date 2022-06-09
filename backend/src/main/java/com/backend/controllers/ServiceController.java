package com.backend.controllers;

import com.backend.SortingAndOrderArguments;
import com.backend.domain.DefectTypes;
import com.backend.domain.Defects;
import com.backend.domain.Services;
import com.backend.repositories.ServiceRepository;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Delete;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Post;
import io.micronaut.http.annotation.Put;
import io.micronaut.scheduling.TaskExecutors;
import io.micronaut.scheduling.annotation.ExecuteOn;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import io.micronaut.transaction.annotation.TransactionalAdvice;

import javax.persistence.PersistenceException;
import javax.validation.Valid;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static io.micronaut.http.HttpHeaders.LOCATION;

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
