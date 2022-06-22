package mn.jwt.data.mail;

import mn.jwt.data.services.PdfService;

import java.util.*;
import javax.inject.Singleton;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;
import javax.mail.util.ByteArrayDataSource;


@Singleton
public class EmailSeviceImpl {

    MailGenerator mailGenerator = new MailGenerator();
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

    public void send(String subject, Long id, String fromEmail, String toEmail){
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

            DataSource dataSource = new ByteArrayDataSource( mailGenerator.generateMail() , "application/pdf");

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
