package com.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "device_types")
public class DeviceTypes implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @NotNull
    @Column(name = "name_type")
    private String nameType;

    @JsonIgnore
    @OneToMany(mappedBy = "deviceType")
    private Set<DefectTypes> defectTypes = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "deviceType")
    private Set<Services> services = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "deviceType")
    private Set<OrderRequests> orderRequests = new HashSet<>();

    public DeviceTypes(){}

    public DeviceTypes(String nameType){
        this.nameType = nameType;
    }

    public String getNameType() {
        return nameType;
    }

    public Integer getId() {
        return id;
    }

    public Set<DefectTypes> getDefectTypes() {
        return defectTypes;
    }

    public Set<OrderRequests> getOrderRequests() {
        return orderRequests;
    }

    public Set<Services> getServices() {
        return services;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDefectTypes(Set<DefectTypes> defectTypes) {
        this.defectTypes = defectTypes;
    }

    public void setServices(Set<Services> services) {
        this.services = services;
    }

    public void setOrderRequests(Set<OrderRequests> orderRequests) {
        this.orderRequests = orderRequests;
    }
}
