package mn.jwt.data.mail;

import mn.jwt.data.domain.User;
import mn.jwt.data.domain.Works;
import mn.jwt.data.dtos.ConsumptionDto;
import mn.jwt.data.dtos.OrderDto;
import mn.jwt.data.dtos.WorksDto;
import mn.jwt.data.services.PdfService;

import java.util.*;
import javax.inject.Singleton;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;
import javax.mail.util.ByteArrayDataSource;


@Singleton
public class EmailSeviceImpl {

    PdfService mailGenerator = new PdfService();
    private String username;
    private String password;
    private Properties props;

    public EmailSeviceImpl(String username, String password) {
        this.username = username;
        this.password = password;

        props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
        props.put("mail.smtp.ssl.protocols", "TLSv1.2");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
    }

    public void send(String subject, Long id, User user, String fromEmail, String toEmail, List<WorksDto> works, List<ConsumptionDto> consumptions, OrderDto order){
        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            Message message = new MimeMessage(session);
            //от кого
            message.setFrom(new InternetAddress(username));
            //кому
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail));
            //Заголовок письма
            message.setSubject(subject);
            //Составное сообщение
            Multipart multipart = new MimeMultipart();
            // Часть сообщения
            BodyPart messageBodyPart = new MimeBodyPart();

            DataSource dataSource = new ByteArrayDataSource( mailGenerator.generateMail(id, order, works, consumptions, user) , "application/pdf");

            messageBodyPart.setDataHandler(new DataHandler(dataSource));
            messageBodyPart.setFileName("check.pdf");

            multipart.addBodyPart(messageBodyPart);

            message.setContent(multipart);

            //Отправляем сообщение
            Transport.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

}
