package mn.jwt.data.dtos;

import io.micronaut.core.annotation.Introspected;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import mn.jwt.data.domain.OrderRequests;
import mn.jwt.data.domain.Services;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Introspected
public class WorksDto {
    private Long id;
//    private OrderRequests orderRequest;
    private Services service;
}
