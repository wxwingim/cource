package mn.jwt.data.controllers;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Post;
import io.micronaut.security.annotation.Secured;
import mn.jwt.data.domain.OrderRequests;
import mn.jwt.data.domain.User;
import mn.jwt.data.domain.Works;
import mn.jwt.data.dtos.OrderDto;
import mn.jwt.data.dtos.WorksDto;
import mn.jwt.data.repositories.OrdersRepository;
import mn.jwt.data.repositories.WorksRepository;
import mn.jwt.data.services.UserService;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import static io.micronaut.security.rules.SecurityRule.IS_ANONYMOUS;
import static io.micronaut.security.rules.SecurityRule.IS_AUTHENTICATED;

@Controller("/history")
public class OrdersController {
    OrdersRepository ordersRepository;
    UserService userService;
    WorksRepository worksRepository;

    public OrdersController(OrdersRepository ordersRepository, UserService userService, WorksRepository worksRepository) {
        this.ordersRepository = ordersRepository;
        this.userService = userService;
        this.worksRepository = worksRepository;
    }

    @Post("/all")
    @Secured(IS_AUTHENTICATED)
    public List<OrderDto> getAllHistory(Principal principal){
        Optional<User> user = userService.findUserByName(principal.getName());
        return ordersRepository.findAll(user.get().getId());
    }

    @Post("/appeal/{id}")
    @Secured(IS_AUTHENTICATED)
    public Optional<OrderDto> getOrderFromHistory(Long id){
        return ordersRepository.findById(id);
    }

    @Get("/search/{id}")
    @Secured(IS_ANONYMOUS)
    public Optional<OrderDto> getOrderForEveryone(Long id){ return ordersRepository.findById(id); }

    @Post("/works/{id}")
    @Secured(IS_AUTHENTICATED)
    public List<WorksDto> getWorks(Long id){ return worksRepository.findAll(id); }
}
