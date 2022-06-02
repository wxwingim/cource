package com.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "visits")
public class Visits implements Serializable {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    @NotNull
    @Column(name = "date_visit")
    @Temporal(TemporalType.DATE)
    private java.util.Date dateVisit;

    @NotNull
    @Column(name = "time_visit")
    @Temporal(TemporalType.TIME)
    private java.util.Date timeVisit;

    @ManyToOne
    @JoinColumn(name = "id_order", nullable = false, foreignKey = @ForeignKey(name = "fk_id_order"))
    OrderRequests orderRequest;
}
