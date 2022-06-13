package mn.jwt.data.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "works")
public class Works implements Serializable {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_order", nullable = false, foreignKey = @ForeignKey(name = "fk_id_order"))
    OrderRequests orderRequest;

    @ManyToOne
    @JoinColumn(name = "id_service", nullable = false, foreignKey = @ForeignKey(name = "fk_id_service"))
    Services service;

    @ManyToOne
    @JoinColumn(name = "id_employee", nullable = false, foreignKey = @ForeignKey(name = "fk_id_employee"))
    User employee;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public OrderRequests getOrderRequest() {
        return orderRequest;
    }

    public void setOrderRequest(OrderRequests orderRequest) {
        this.orderRequest = orderRequest;
    }

    public Services getService() {
        return service;
    }

    public void setService(Services service) {
        this.service = service;
    }

    public User getEmployee() {
        return employee;
    }

    public void setEmployee(User employee) {
        this.employee = employee;
    }
}
