package com.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "users")
public class Users implements Serializable {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    @NotNull
    @Column(name = "last_name")
    private String lastName;

    @NotNull
    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name", nullable = true)
    private String middleName;

    @NotNull
    @Column(name = "email", nullable = true)
    private String email;

    @NotNull
    @Column(name = "password", nullable = true)
    private String password;

    @Column(name = "phone", nullable = true)
    private String phone;

    @NotNull
    @Column(name = "position", columnDefinition = "varchar DEFAULT 'USER'")
    private String position;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<OrderRequests> orderRequests = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "employee")
    private Set<Works> works = new HashSet<>();
}
