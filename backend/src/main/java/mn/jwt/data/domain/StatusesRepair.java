package mn.jwt.data.domain;

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
@Table(name = "statuses_repair")
public class StatusesRepair implements Serializable {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Integer id;

    @NotNull
    @Column(name = "name_status")
    private String nametatus;

    @JsonIgnore
    @OneToMany(mappedBy = "statusRepair")
    private Set<OrderRequests> orders = new HashSet<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNametatus() {
        return nametatus;
    }

    public void setNametatus(String nametatus) {
        this.nametatus = nametatus;
    }

    public Set<OrderRequests> getOrders() {
        return orders;
    }

    public void setOrders(Set<OrderRequests> orders) {
        this.orders = orders;
    }
}
