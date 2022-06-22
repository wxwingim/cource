package mn.jwt.data.controllers;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Post;
import io.micronaut.security.annotation.Secured;
import mn.jwt.data.domain.User;
import mn.jwt.data.mail.EmailSeviceImpl;
import mn.jwt.data.mail.MailGenerator;
import mn.jwt.data.services.PdfService;
import mn.jwt.data.services.UserService;

import java.security.Principal;
import java.util.Optional;

import static io.micronaut.security.rules.SecurityRule.IS_AUTHENTICATED;

@Controller("/mail")
@Secured(IS_AUTHENTICATED)
public class MailController {


    private static EmailSeviceImpl sender = new EmailSeviceImpl("pestova.lisa@gmail.com", "vdrkqxrmkcwvutfq");
    UserService userService;

    public MailController(UserService userService) {
        this.userService = userService;
    }

    @Post("/{id}")
    public void getMail(Long id) {
    }

    @Get("/send/{id}")
    public HttpResponse<?> getEmail(Principal principal, Long id){
        Optional<User> user = userService.findUserByName(principal.getName());
        sender.send("Счет на оплату", id, "pestova.lisa@gmail.com", user.get().getUsername());
        return HttpResponse.ok();
    }
}
