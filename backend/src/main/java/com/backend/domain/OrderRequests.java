package com.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

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

    @NotNull
    @Column(name = "date_limit")
    private Date dateLimit;

    @Column(name = "date_request")
    private Date dateRequest;

    @ManyToOne
    @JoinColumn(name = "id_device_type", nullable = false, foreignKey = @ForeignKey(name = "fk_id_device_type"))
    DeviceTypes deviceType;

    @ManyToOne
    @JoinColumn(name = "id_user", nullable = false, foreignKey = @ForeignKey(name = "fk_id_user"))
    Users user;

    @OneToOne(mappedBy = "orderRequest", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private Orders order;

    public Users getUser() {
        return user;
    }

    public Long getId() {
        return id;
    }

    public Orders getOrder() {
        return order;
    }

    public DeviceTypes getDeviceType() {
        return deviceType;
    }

    public Date getDateLimit() {
        return dateLimit;
    }

    public Date getDateRequest() {
        return dateRequest;
    }

    public String getAddres() {
        return addres;
    }

    public String getDefect() {
        return defect;
    }

    public String getEquipment() {
        return equipment;
    }

    public String getMechanicalDamage() {
        return mechanicalDamage;
    }

    public String getModel() {
        return model;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setOrder(Orders order) {
        this.order = order;
    }

    public void setDeviceType(DeviceTypes deviceType) {
        this.deviceType = deviceType;
    }

    public void setAddres(String addres) {
        this.addres = addres;
    }

    public void setDateLimit(Date dateLimit) {
        this.dateLimit = dateLimit;
    }

    public void setDateRequest(Date dateRequest) {
        this.dateRequest = dateRequest;
    }

    public void setDefect(String defect) {
        this.defect = defect;
    }

    public void setEquipment(String equipment) {
        this.equipment = equipment;
    }

    public void setMechanicalDamage(String mechanicalDamage) {
        this.mechanicalDamage = mechanicalDamage;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setQuarantee(boolean quarantee) {
        this.quarantee = quarantee;
    }
}
