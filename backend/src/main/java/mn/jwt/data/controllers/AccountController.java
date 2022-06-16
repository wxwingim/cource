package mn.jwt.data.controllers;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.security.annotation.Secured;
import io.reactivex.Single;
import mn.jwt.data.domain.User;
import mn.jwt.data.mappers.UserMapper;
import mn.jwt.data.services.UserService;

import java.security.Principal;
import java.util.Optional;

import static io.micronaut.security.rules.SecurityRule.IS_AUTHENTICATED;

@Controller("/account")
@Secured(IS_AUTHENTICATED)
public class AccountController {
    private final UserService userService;
    private final UserMapper userMapper;


    public AccountController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @Get("/profile/info")
    @Secured(IS_AUTHENTICATED)
    public Optional<User> getUser(Principal principal){
        return userService.findUserById(principal.getName());
    }
}
