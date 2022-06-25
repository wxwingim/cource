package mn.jwt.data.controllers;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Post;
import io.micronaut.security.annotation.Secured;
import mn.jwt.data.domain.User;
import mn.jwt.data.dtos.ConsumptionDto;
import mn.jwt.data.dtos.OrderDto;
import mn.jwt.data.dtos.WorksDto;
import mn.jwt.data.mail.EmailSeviceImpl;
import mn.jwt.data.mail.MailGenerator;
import mn.jwt.data.repositories.ConsumptionsRepository;
import mn.jwt.data.repositories.OrdersRepository;
import mn.jwt.data.repositories.WorksRepository;
import mn.jwt.data.services.OrdersRepositoryImpl;
import mn.jwt.data.services.PdfService;
import mn.jwt.data.services.UserService;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import static io.micronaut.security.rules.SecurityRule.IS_AUTHENTICATED;

@Controller("/mail")
@Secured(IS_AUTHENTICATED)
public class MailController {


    private static EmailSeviceImpl sender = new EmailSeviceImpl("pestova.lisa@gmail.com", "vdrkqxrmkcwvutfq");
    UserService userService;
    OrdersRepository ordersRepository;
    WorksRepository worksRepository;
    ConsumptionsRepository consumptionsRepository;

    public MailController(UserService userService, OrdersRepository ordersRepository, WorksRepository worksRepository, ConsumptionsRepository consumptionsRepository) {
        this.ordersRepository = ordersRepository;
        this.userService = userService;
        this.worksRepository = worksRepository;
        this.consumptionsRepository = consumptionsRepository;
    }

    @Get("/send/{id}")
    public HttpResponse<?> getEmail(Principal principal, Long id){
        Optional<User> user = userService.findUserByName(principal.getName());
        List<WorksDto> works = worksRepository.findAll(id);
        List<ConsumptionDto> consumptions = consumptionsRepository.findByOrderId(id);
        Optional<OrderDto> order = ordersRepository.findById(id);
        sender.send("Счет на оплату", id, user.get(), "pestova.lisa@gmail.com", user.get().getUsername(), works, consumptions, order.get());
        ordersRepository.payOrder(id);
        return HttpResponse.ok();
    }
}
