package mn.jwt.data.domain;

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
    @GeneratedValue(strategy = AUTO)
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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameType() {
        return nameType;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }

    public Set<DefectTypes> getDefectTypes() {
        return defectTypes;
    }

    public void setDefectTypes(Set<DefectTypes> defectTypes) {
        this.defectTypes = defectTypes;
    }

    public Set<Services> getServices() {
        return services;
    }

    public void setServices(Set<Services> services) {
        this.services = services;
    }

    public Set<OrderRequests> getOrderRequests() {
        return orderRequests;
    }

    public void setOrderRequests(Set<OrderRequests> orderRequests) {
        this.orderRequests = orderRequests;
    }
}
