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
    public static final String DEFAULT_ROLE = "VIEW";

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
    @Column(name = "position", columnDefinition = "varchar DEFAULT 'VIEW'")
    private String position;

    @NotNull
    @Column(name = "revoked")
    private Boolean revoked;

    @NotNull
    @Column(name = "refresh_token")
    private String refreshToken;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<OrderRequests> orderRequests = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "employee")
    private Set<Works> works = new HashSet<>();


    public Long getId() {
        return id;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getPhone() {
        return phone;
    }

    public String getPosition() {
        return position;
    }

    public Set<OrderRequests> getOrderRequests() {
        return orderRequests;
    }

    public Set<Works> getWorks() {
        return works;
    }

    public Boolean getRevoked() {
        return revoked;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setOrderRequests(Set<OrderRequests> orderRequests) {
        this.orderRequests = orderRequests;
    }

    public void setWorks(Set<Works> works) {
        this.works = works;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public void setRevoked(Boolean revoked) {
        this.revoked = revoked;
    }
}
