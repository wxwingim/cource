package com.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "purchases")
public class Purchases implements Serializable {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    @NotNull
    @Column(name = "name")
    private String name;

    @NotNull
    @Column(name = "purchase_price", precision=12, scale=2)
    @Type(type = "big_decimal")
    private Double purchasePrice;

    @NotNull
    @Column(name = "quarantee")
    private Integer quarantee;

    @NotNull
    @Column(name = "retail_price", precision=12, scale=2)
    @Type(type = "big_decimal")
    private Double retailPrice;

    @NotNull
    @Column(name = "amount")
    private Integer amount;

    @Column(name = "date_purchase")
    private Date datePurchase;

    @ManyToOne
    @JoinColumn(name = "id_part_type", nullable = false, foreignKey = @ForeignKey(name = "fk_id_part_type"))
    DeviceTypes partType;

    @JsonIgnore
    @OneToMany(mappedBy = "purchase")
    private Set<Consumptions> consumptions = new HashSet<>();
}
