package com.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "device_types")
public class DeviceType implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @NotNull
    @Column(name = "name_type")
    private String nameType;

//    @JsonIgnore
    @OneToMany(mappedBy = "deviceType")
    private Set<DefectType> defectTypes = new HashSet<>();

    public DeviceType() {}

    public DeviceType(@NotNull String nameType) {
        this.nameType = nameType;
    }

    public Integer getId() {
        return id;
    }

    public Set<DefectType> getDefectTypes() {
        return defectTypes;
    }

    public String getNameType() {
        return nameType;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDefectTypes(Set<DefectType> defectTypes) {
        this.defectTypes = defectTypes;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }
}
