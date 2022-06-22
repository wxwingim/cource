package mn.jwt.data.controllers;

//import com.wildbit.java.postmark.client.exception.PostmarkException;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Post;
import io.micronaut.security.annotation.Secured;
import mn.jwt.data.services.MailService;

import java.io.IOException;

import static io.micronaut.security.rules.SecurityRule.IS_AUTHENTICATED;

@Controller("/mail")
@Secured(IS_AUTHENTICATED)
public class MailController {
    MailService mailService;

    public MailController(MailService mailService) {
        this.mailService = mailService;
    }

    @Post("/{id}")
    public void getMail(Long id) {
//        mailService.sendWelcomeEmail();
        mailService.sendMail();
    }
}
