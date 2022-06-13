package mn.jwt.data.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "defects")
public class Defects implements Serializable {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Integer id;

    @NotNull
    @Column(name = "name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "id_defect_type", nullable = false, foreignKey = @ForeignKey(name = "fk_id_defect_type"))
    DefectTypes defectType;

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public DefectTypes getDefectType() {
        return defectType;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDefectType(DefectTypes defectType) {
        this.defectType = defectType;
    }
}
