package mn.jwt.data.mail;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.*;
import mn.jwt.data.domain.User;
import mn.jwt.data.dtos.ConsumptionDto;
import mn.jwt.data.dtos.OrderDto;
import mn.jwt.data.dtos.WorksDto;
import mn.jwt.data.repositories.ConsumptionsRepository;
import mn.jwt.data.repositories.OrdersRepository;
import mn.jwt.data.repositories.WorksRepository;
import mn.jwt.data.services.UserService;

import javax.persistence.Table;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


public class MailGenerator {
    private ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

//    private OrdersRepository ordersRepository;
//    private WorksRepository worksRepository;
//    private ConsumptionsRepository consumptionsRepository;
    private static BaseFont baseFont = loadBaseFont("/Volumes/data/workspace/Godot-projects/Mannequiny:Open3DMannequin/assets/theme/fonts/montserrat/Montserrat-Medium.ttf");

    private static Font font = new Font(baseFont, 12, Font.NORMAL, BaseColor.BLACK);
    private static Font headFont = new Font(baseFont, 14, Font.NORMAL, BaseColor.BLACK);

    /**
     * Загружаем шрифт из .ttf файла
     * @param fontName Путь к файлу
     * @return
     */
    private static BaseFont loadBaseFont(String fontName) {
        BaseFont baseFont= null;
        try {
            baseFont = BaseFont.createFont(fontName, BaseFont.IDENTITY_H, BaseFont.EMBEDDED);
        } catch (DocumentException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return baseFont;
    }

    public MailGenerator() {
    }

    public byte[] generateMail(Long id, User user){
//        PdfDocument pdfDocument = new PdfDocument();
//        Optional<OrderDto> order = ordersRepository.findById(id);
//        List<WorksDto> works = worksRepository.findAll(id);
//        List<ConsumptionDto> consumptions = consumptionsRepository.findByOrderId(id);

        Document document = new Document(PageSize.A4, 0.75F, 0.75F, 0.75F, 0.75F);

        try {
            PdfWriter.getInstance(document, byteArrayOutputStream);
            document.open();

            float col = 280f;
            float columnWidth[] = {col, col};

//            PdfPTable table = new PdfPTable(3);

            Font font = FontFactory.getFont(FontFactory.TIMES, 14, BaseColor.BLACK);
            Font bold = FontFactory.getFont(FontFactory.TIMES_BOLD, 14, BaseColor.BLACK);

            PdfPTable table = new PdfPTable(new float[]{1, 7, 2, 2, 4, 4});
            table.setWidthPercentage(100);

            // head table
            table.addCell(new PdfPCell (new Phrase ("№", font)));
            table.addCell(new PdfPCell (new Phrase ("Работы/услуги", font)));
            table.addCell(new PdfPCell (new Phrase ("Кол-во", font)));
            table.addCell(new PdfPCell (new Phrase ("ед.", font)));
            table.addCell(new PdfPCell (new Phrase ("Цена", font)));
            table.addCell(new PdfPCell (new Phrase ("Сумма", font)));

//            for(WorksDto work: works){
//                int num = 1;
////                table.addCell(new Cell().add());
//                num++;
//            }
//            for(ConsumptionDto consumption: consumptions){
//
//            }

            Chunk chunk = new Chunk("Hello World", font);

            document.add(table);
            document.add(chunk);
//            createPDF(document);

            document.close();
        } catch (DocumentException e) {
            e.printStackTrace();
        }
        byte[] pdfBytes = byteArrayOutputStream.toByteArray();
        return pdfBytes;
    }
}
