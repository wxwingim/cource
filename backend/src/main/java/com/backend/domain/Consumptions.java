package com.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "consumptions")
public class Consumptions implements Serializable {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    @NotNull
    @Column(name = "amount")
    private Integer amount;

    @ManyToOne
    @JoinColumn(name = "id_order", nullable = false, foreignKey = @ForeignKey(name = "fk_id_order"))
    Orders order;

    @ManyToOne
    @JoinColumn(name = "id_purchase", nullable = false, foreignKey = @ForeignKey(name = "fk_id_purchase"))
    Purchases purchase;

    public Long getId() {
        return id;
    }

    public Integer getAmount() {
        return amount;
    }

    public Orders getOrder() {
        return order;
    }

    public Purchases getPurchase() {
        return purchase;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public void setOrder(Orders order) {
        this.order = order;
    }

    public void setPurchase(Purchases purchase) {
        this.purchase = purchase;
    }
}
