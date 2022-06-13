package mn.jwt.data.dtos;

import javax.validation.constraints.NotBlank;

import io.micronaut.core.annotation.Introspected;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import mn.jwt.data.domain.OrderRequests;
import mn.jwt.data.domain.Works;

import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Introspected
public class UserDto {

    @NotBlank
    private String username;
    @NotBlank
    private String password;

    private String role;

    private String lastName;
    private String firstName;
    private String middleName;
    private String phone;
//    private Set<OrderRequests> orderRequests = new HashSet<>();
//    private Set<Works> works = new HashSet<>();


}
