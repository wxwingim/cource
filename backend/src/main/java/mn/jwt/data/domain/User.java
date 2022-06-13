package mn.jwt.data.domain;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
@Table(name = "users")
public class User {

    public static final String DEFAULT_ROLE = "USER";

    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    @Column(name = "email")
    private String username;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "password")
    private String password;

    @Column(name = "phone")
    private String phone;

    @Column(name = "position", columnDefinition = "varchar DEFAULT 'VIEW'")
    private String role = DEFAULT_ROLE;

    @Column(name = "token")
    private String token;

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private Set<OrderRequests> orderRequests = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "employee", fetch = FetchType.EAGER)
    private Set<Works> works = new HashSet<>();

    public static String getDefaultRole() {
        return DEFAULT_ROLE;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Set<OrderRequests> getOrderRequests() {
        return orderRequests;
    }

    public void setOrderRequests(Set<OrderRequests> orderRequests) {
        this.orderRequests = orderRequests;
    }

    public Set<Works> getWorks() {
        return works;
    }

    public void setWorks(Set<Works> works) {
        this.works = works;
    }
}