package mn.jwt.data.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
//import java.util.Date;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@NoArgsConstructor
@AllArgsConstructor
//@Data
//@Builder
@Entity
@Table(name = "order_requests")
public class OrderRequests implements Serializable {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    @NotNull
    @Column(name = "model")
    private String model;

    @NotNull
    @Column(name = "defect")
    private String defect;

    @Column(name = "equipment", nullable = true)
    private String equipment;

    @Column(name = "mechanical_damage", nullable = true)
    private String mechanicalDamage;

    @Column(name = "addres", nullable = true)
    private String addres;

    @NotNull
    @Column(name = "quarantee")
    private boolean quarantee;

    @Column(name = "date_limit")
    private Date dateLimit;

    @Column(name = "date_request")
    private Date dateRequest;

    @ManyToOne
    @JoinColumn(name = "id_device_type", nullable = false, foreignKey = @ForeignKey(name = "fk_id_device_type"))
    DeviceTypes deviceType;

    @ManyToOne
    @JoinColumn(name = "id_user", nullable = false, foreignKey = @ForeignKey(name = "fk_id_user"))
    User user;

    @ManyToOne
    @JoinColumn(name = "id_status_type", nullable = false, foreignKey = @ForeignKey(name = "fk_id_status_type"))
    StatusesRepair statusRepair;

    @JsonIgnore
    @OneToMany(mappedBy = "orderRequest")
    private Set<Visits> visits = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "orderRequest")
    private Set<Consumptions> consumptions = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "orderRequest")
    private Set<Works> works = new HashSet<>();

    // getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getDefect() {
        return defect;
    }

    public void setDefect(String defect) {
        this.defect = defect;
    }

    public String getEquipment() {
        return equipment;
    }

    public void setEquipment(String equipment) {
        this.equipment = equipment;
    }

    public String getMechanicalDamage() {
        return mechanicalDamage;
    }

    public void setMechanicalDamage(String mechanicalDamage) {
        this.mechanicalDamage = mechanicalDamage;
    }

    public String getAddres() {
        return addres;
    }

    public void setAddres(String addres) {
        this.addres = addres;
    }

    public boolean isQuarantee() {
        return quarantee;
    }

    public void setQuarantee(boolean quarantee) {
        this.quarantee = quarantee;
    }

    public Date getDateLimit() {
        return dateLimit;
    }

    public void setDateLimit(Date dateLimit) {
        this.dateLimit = dateLimit;
    }

    public Date getDateRequest() {
        return dateRequest;
    }

    public void setDateRequest(Date dateRequest) {
        this.dateRequest = dateRequest;
    }

    public DeviceTypes getDeviceType() {
        return deviceType;
    }

    public void setDeviceType(DeviceTypes deviceType) {
        this.deviceType = deviceType;
    }

    public StatusesRepair getStatusRepair() {
        return statusRepair;
    }

    public void setStatusRepair(StatusesRepair statusRepair) {
        this.statusRepair = statusRepair;
    }

    public Set<Visits> getVisits() {
        return visits;
    }

    public void setVisits(Set<Visits> visits) {
        this.visits = visits;
    }

    public Set<Consumptions> getConsumptions() {
        return consumptions;
    }

    public void setConsumptions(Set<Consumptions> consumptions) {
        this.consumptions = consumptions;
    }

    public Set<Works> getWorks() {
        return works;
    }

    public void setWorks(Set<Works> works) {
        this.works = works;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
