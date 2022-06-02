package com.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "part_types")
public class PartTypes implements Serializable {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Integer id;

    @NotNull
    @Column(name = "name_type")
    private String nameType;

    @JsonIgnore
    @OneToMany(mappedBy = "partType")
    private Set<Purchases> purchases = new HashSet<>();

    public Integer getId() {
        return id;
    }

    public String getNameType() {
        return nameType;
    }

    public Set<Purchases> getPurchases() {
        return purchases;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }

    public void setPurchases(Set<Purchases> purchases) {
        this.purchases = purchases;
    }
}
