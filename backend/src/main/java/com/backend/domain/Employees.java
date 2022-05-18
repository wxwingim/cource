package com.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "employes")
public class Employees implements Serializable {
    @Id
    @Column(name = "user_id")
    private Long id;

    @NotNull
    @Column(name = "position")
    private String position;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private Users user;

    @JsonIgnore
    @OneToMany(mappedBy = "employee")
    private Set<Works> works = new HashSet<>();

    public Long getId() {
        return id;
    }

    public Set<Works> getWorks() {
        return works;
    }

    public String getPosition() {
        return position;
    }

    public Users getUser() {
        return user;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public void setWorks(Set<Works> works) {
        this.works = works;
    }
}
