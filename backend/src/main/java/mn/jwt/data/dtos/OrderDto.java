package mn.jwt.data.dtos;

import io.micronaut.core.annotation.Introspected;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import mn.jwt.data.domain.Consumptions;
import mn.jwt.data.domain.DeviceTypes;
import mn.jwt.data.domain.StatusesRepair;
import mn.jwt.data.domain.Works;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

//@NoArgsConstructor
//@AllArgsConstructor
//@Data
//@Builder
//@Introspected
public class OrderDto {
    private String model;
    private String defect;
    private String equipment;
    private String mechanicalDamage;
    private Date dateRequest;
    private Date dateLimit;
    private boolean quarantee;
//    private DeviceTypes deviceType;
//    private StatusesRepair statusRepair;
//    private Set<Consumptions> consumptions = new HashSet<>();
//    private Set<Works> works = new HashSet<>();

}
