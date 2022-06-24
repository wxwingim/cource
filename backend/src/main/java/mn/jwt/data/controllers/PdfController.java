package mn.jwt.data.controllers;

import com.itextpdf.text.Document;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.security.annotation.Secured;
import mn.jwt.data.domain.User;
import mn.jwt.data.dtos.ConsumptionDto;
import mn.jwt.data.dtos.OrderDto;
import mn.jwt.data.dtos.WorksDto;
import mn.jwt.data.repositories.ConsumptionsRepository;
import mn.jwt.data.repositories.OrdersRepository;
import mn.jwt.data.repositories.WorksRepository;
import mn.jwt.data.services.PdfService;
import mn.jwt.data.services.UserService;

import javax.print.attribute.standard.Media;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import static io.micronaut.security.rules.SecurityRule.IS_ANONYMOUS;
import static io.micronaut.security.rules.SecurityRule.IS_AUTHENTICATED;

@Controller("/pdf")
@Secured(IS_AUTHENTICATED)
public class PdfController {
    PdfService pdfService;
    UserService userService;
    WorksRepository worksRepository;
    ConsumptionsRepository consumptionsRepository;
    OrdersRepository ordersRepository;

    public PdfController(PdfService pdfService, UserService userService, WorksRepository worksRepository, ConsumptionsRepository consumptionsRepository, OrdersRepository ordersRepository) {
        this.pdfService = pdfService;
        this.userService = userService;
        this.worksRepository = worksRepository;
        this.consumptionsRepository = consumptionsRepository;
        this.ordersRepository = ordersRepository;
    }

    @Get("/{id}")
    public byte[] getPdf(Principal principal, Long id){
        Optional<User> user = userService.findUserByName(principal.getName());
        List<WorksDto> works = worksRepository.findAll(id);
        List<ConsumptionDto> consumptions = consumptionsRepository.findByOrderId(id);
        Optional<OrderDto> order = ordersRepository.findById(id);
        return pdfService.generatePdf(id, order.get(), works, consumptions, user.get());
    }
}
