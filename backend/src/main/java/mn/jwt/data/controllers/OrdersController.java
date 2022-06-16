package mn.jwt.data.controllers;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Post;
import io.micronaut.security.annotation.Secured;
import mn.jwt.data.domain.OrderRequests;
import mn.jwt.data.domain.User;
import mn.jwt.data.repositories.OrdersRepository;
import mn.jwt.data.services.UserService;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import static io.micronaut.security.rules.SecurityRule.IS_AUTHENTICATED;

@Controller("/history")
@Secured(IS_AUTHENTICATED)
public class OrdersController {
    OrdersRepository ordersRepository;
    UserService userService;

    public OrdersController(OrdersRepository ordersRepository, UserService userService) {
        this.ordersRepository = ordersRepository;
        this.userService = userService;
    }

    @Post("/all")
    public List<OrderRequests> getAllHistory(Principal principal){
        Optional<User> user = userService.findUserByName(principal.getName());
        return ordersRepository.findAll(user.get().getId());
    }
}
