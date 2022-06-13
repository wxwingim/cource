package mn.jwt.data.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "services")
public class Services implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @NotNull
    @Column(name = "name")
    private String name;

    @NotNull
    @Column(name = "price", precision=12, scale=2)
    private Double price;

    @NotNull
    @Column(name = "quarantee")
    private Integer quarantee;

    @ManyToOne
    @JoinColumn(name = "id_device_type", nullable = false, foreignKey = @ForeignKey(name = "fk_id_device_type"))
    DeviceTypes deviceType;

    @JsonIgnore
    @OneToMany(mappedBy = "service")
    private Set<Works> works = new HashSet<>();

    public Services(){}
    public Services(String name, Double price, Integer quarantee, DeviceTypes deviceType){
        this.name = name;
        this.price = price;
        this.quarantee = quarantee;
        this.deviceType = deviceType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuarantee() {
        return quarantee;
    }

    public void setQuarantee(Integer quarantee) {
        this.quarantee = quarantee;
    }

    public DeviceTypes getDeviceType() {
        return deviceType;
    }

    public void setDeviceType(DeviceTypes deviceType) {
        this.deviceType = deviceType;
    }

    public Set<Works> getWorks() {
        return works;
    }

    public void setWorks(Set<Works> works) {
        this.works = works;
    }
}
