package mn.jwt.data.services;

//import javax.mail.*;
//import javax.mail.internet.*;
//import javax.activation.*;


//import com.wildbit.java.postmark.Postmark;
//import com.wildbit.java.postmark.client.ApiClient;
//import com.wildbit.java.postmark.client.data.model.message.Message;
//import com.wildbit.java.postmark.client.data.model.message.MessageResponse;
//import com.wildbit.java.postmark.client.exception.PostmarkException;


import javax.inject.Singleton;

import java.io.IOException;
import java.util.Properties;


@Singleton
public class MailService {

    public void sendMail() {
//        ApiClient client = Postmark.getApiClient("cb13a293-0981-435d-9afc-192d1f8633b6");
//        Message message = new Message("sender@example.org", "sender@example.org", "Hello from Postmark!", "Hello message body");
//        message.setMessageStream("payment");

//        // Необходимо указать адрес электронной почты получателя
//        String to = "pestova.lisa@gmail.com";
//
//        // Необходимо указать адрес электронной почты отправителя
//        String from = "pestova.lisa@gmail.com";
//
//        // Предполагая, что вы отправляете электронное письмо с localhost
//        String host = "localhost";
//
//        // Получить свойства системы
//        Properties properties = System.getProperties();
//
//        // Настроить почтовый сервер
//        properties.setProperty("mail.smtp.host", host);
//
//        // Получение объекта Session по умолчанию
//        Session session = Session.getDefaultInstance(properties);
//
//        try {
//            // Создание объекта MimeMessage по умолчанию
//            MimeMessage message = new MimeMessage(session);
//
//            // Установить От: поле заголовка
//            message.setFrom(new InternetAddress(from));
//
//            // Установить Кому: поле заголовка
//            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
//
//            // Установить тему: поле заголовка
//            message.setSubject("Это тема письма!");
//
//            // Теперь установите фактическое сообщение
//            message.setText("Это актуальное сообщение");
//
//            // Отправить сообщение
//            Transport.send(message);
//            System.out.println("Сообщение успешно отправлено....");
//        } catch (MessagingException mex) {
//            mex.printStackTrace();
//        }
    }

}
