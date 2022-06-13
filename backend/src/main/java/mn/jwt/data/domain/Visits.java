package mn.jwt.data.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateVisit() {
        return dateVisit;
    }

    public void setDateVisit(Date dateVisit) {
        this.dateVisit = dateVisit;
    }

    public Date getTimeVisit() {
        return timeVisit;
    }

    public void setTimeVisit(Date timeVisit) {
        this.timeVisit = timeVisit;
    }

    public OrderRequests getOrderRequest() {
        return orderRequest;
    }

    public void setOrderRequest(OrderRequests orderRequest) {
        this.orderRequest = orderRequest;
    }
}
