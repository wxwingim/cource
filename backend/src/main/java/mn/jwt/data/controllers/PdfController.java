package mn.jwt.data.controllers;

import com.itextpdf.text.Document;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.security.annotation.Secured;
import mn.jwt.data.services.PdfService;

import javax.print.attribute.standard.Media;

import static io.micronaut.security.rules.SecurityRule.IS_ANONYMOUS;
import static io.micronaut.security.rules.SecurityRule.IS_AUTHENTICATED;

@Controller("/pdf")
@Secured(IS_ANONYMOUS)
public class PdfController {
    PdfService pdfService;

    public PdfController(PdfService pdfService) {
        this.pdfService = pdfService;
    }

//    @Get(produces = MediaType.ALL)
    @Get
    public byte[] getPdf(){
        return pdfService.generatePdf();
    }
}
