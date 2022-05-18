package com.backend.controllers;

import com.backend.SortingAndOrderArguments;
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

import javax.persistence.PersistenceException;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

import static io.micronaut.http.HttpHeaders.LOCATION;

@ExecuteOn(TaskExecutors.IO)
@Controller("/services")
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

    @Get("/{id}")
    @Secured(SecurityRule.IS_ANONYMOUS)
    public Optional<Services> getService(Integer id){
        return serviceRepository.findById(id);
    }

//    ServiceController(ServiceRepository serviceRepository) { // <3>
//        this.serviceRepository = serviceRepository;
//    }

//    @Get("/{id}")
//    Services show(Integer id) {
//        return serviceRepository
//                .findById(id)
//                .orElse(null);
//    }
//
//    @Get(value = "/list{?args*}")
//    List<Services> list(@Valid SortingAndOrderArguments args) {
//        return serviceRepository.findAll(args);
//    }

}
