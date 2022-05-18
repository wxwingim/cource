package com.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "orders")
public class Orders implements Serializable {
    @Id
    @Column(name = "order_request_id")
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "order_request_id")
    private OrderRequests orderRequest;

    @ManyToOne
    @JoinColumn(name = "id_status_type", nullable = false, foreignKey = @ForeignKey(name = "fk_id_status_type"))
    StatusesRepair statusRepair;

    @JsonIgnore
    @OneToMany(mappedBy = "order")
    private Set<Visits> visits = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "order")
    private Set<Consumptions> consumptions = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "order")
    private Set<Works> works = new HashSet<>();

    public Long getId() {
        return id;
    }

    public Set<Works> getWorks() {
        return works;
    }

    public OrderRequests getOrderRequest() {
        return orderRequest;
    }

    public Set<Consumptions> getConsumptions() {
        return consumptions;
    }

    public Set<Visits> getVisits() {
        return visits;
    }

    public StatusesRepair getStatusRepair() {
        return statusRepair;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setWorks(Set<Works> works) {
        this.works = works;
    }

    public void setConsumptions(Set<Consumptions> consumptions) {
        this.consumptions = consumptions;
    }

    public void setOrderRequest(OrderRequests orderRequest) {
        this.orderRequest = orderRequest;
    }

    public void setStatusRepair(StatusesRepair statusRepair) {
        this.statusRepair = statusRepair;
    }

    public void setVisits(Set<Visits> visits) {
        this.visits = visits;
    }
}
