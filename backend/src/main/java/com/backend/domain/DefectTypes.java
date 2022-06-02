package com.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "defect_types")
public class DefectTypes implements Serializable {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Integer id;

    @NotNull
    @Column(name = "name_type")
    private String nameType;

    @ManyToOne
    @JoinColumn(name = "id_device_type", nullable = false, foreignKey = @ForeignKey(name = "fk_id_device_type"))
    DeviceTypes deviceType;

    @JsonIgnore
    @OneToMany(mappedBy = "defectType")
    private Set<Defects> defects = new HashSet<>();

    public Integer getId() {
        return id;
    }

    public String getNameType() {
        return nameType;
    }

    public DeviceTypes getDeviceType() {
        return deviceType;
    }

    public Set<Defects> getDefects() {
        return defects;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDefects(Set<Defects> defects) {
        this.defects = defects;
    }

    public void setDeviceType(DeviceTypes deviceType) {
        this.deviceType = deviceType;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }
}
