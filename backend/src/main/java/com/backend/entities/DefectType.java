package com.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "defect_types")
public class DefectType implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @NotNull
    @Column(name = "name_type")
    private String nameType;

//    @JsonIgnore
    @OneToMany(mappedBy = "defectType")
    private Set<Defect> defects = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "id_device_type", foreignKey = @ForeignKey(name = "fk_id_device_type"))
    private DeviceType deviceType;

    public DefectType(){}

    public DefectType(String nameType){
        this.nameType = nameType;
    }

    public Integer getId() {
        return id;
    }

    public String getNameType() {
        return nameType;
    }

    public Set<Defect> getDefects() {
        return defects;
    }

    public void setDefects(Set<Defect> defects) {
        this.defects = defects;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }

}
