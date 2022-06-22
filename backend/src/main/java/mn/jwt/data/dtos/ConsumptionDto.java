package mn.jwt.data.dtos;

import io.micronaut.core.annotation.Introspected;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Introspected
public class ConsumptionDto {
    private Long id;
    private String name;

    private Double retailPrice;

    private Integer amount;
}
