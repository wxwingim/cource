package mn.jwt.data.services;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.*;
import com.itextpdf.text.pdf.draw.DottedLineSeparator;
import mn.jwt.data.domain.User;
import mn.jwt.data.dtos.ConsumptionDto;
import mn.jwt.data.dtos.OrderDto;
import mn.jwt.data.dtos.WorksDto;
import mn.jwt.data.repositories.ConsumptionsRepository;
import mn.jwt.data.repositories.OrdersRepository;
import mn.jwt.data.repositories.WorksRepository;

import javax.inject.Singleton;
import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Singleton
public class PdfService {
    private ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

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

    public byte[] generatePdf(Long id, OrderDto order, List<WorksDto> works, List<ConsumptionDto> consumptions,  User user){
        Document document = new Document(PageSize.A4);


        try {
            PdfWriter.getInstance(document, byteArrayOutputStream);

            document.open();
            document.setMargins(10f, 10f, 10f, 10f);


            //header
            LocalDate date = LocalDate.now();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
            StringBuilder h1Str = new StringBuilder("Счет на оплату № ");
            h1Str.append(id).append(" от ").append(date.format(formatter));
            Paragraph h1 = new Paragraph(h1Str.toString(), headFont);

            //line
            Chunk linebreak1 = new Chunk(new DottedLineSeparator());



            // Table
            PdfPTable table = new PdfPTable (6);
            table.setWidths(new int[]{1, 7, 2, 2, 4, 2});

            // head table
            table.addCell(new PdfPCell (new Phrase ("№", font)));
            table.addCell(new PdfPCell (new Phrase ("Работы/услуги", font)));
            table.addCell(new PdfPCell (new Phrase ("Кол-во", font)));
            table.addCell(new PdfPCell (new Phrase ("ед.", font)));
            table.addCell(new PdfPCell (new Phrase ("Цена", font)));
            table.addCell(new PdfPCell (new Phrase ("Сумма", font)));

            int amount = 0;
            Double price = 0.00;
            int n = 1;

            // body table
            if(works.size() != 0){
                for(WorksDto work: works){
                    amount++;
                    price += work.getService().getPrice();
                    table.addCell(new PdfPCell (new Phrase (String.valueOf(n),  font)));
                    table.addCell(new PdfPCell (new Phrase (work.getService().getName(), font)));
                    table.addCell(new PdfPCell (new Phrase ("1", font)));
                    table.addCell(new PdfPCell (new Phrase ("шт.", font)));
                    table.addCell(new PdfPCell (new Phrase (String.valueOf(work.getService().getPrice()), font)));
                    table.addCell(new PdfPCell (new Phrase (String.valueOf(work.getService().getPrice()), font)));
                    n++;
                }
            }
            if(consumptions.size() != 0){
                for(ConsumptionDto consumption: consumptions){
                    amount += consumption.getAmount();
                    price += consumption.getRetailPrice() * consumption.getAmount();
                    table.addCell(new PdfPCell (new Phrase (String.valueOf(n), font)));
                    table.addCell(new PdfPCell (new Phrase (consumption.getName(), font)));
                    table.addCell(new PdfPCell (new Phrase (String.valueOf(consumption.getAmount()), font)));
                    table.addCell(new PdfPCell (new Phrase ("шт.", font)));
                    table.addCell(new PdfPCell (new Phrase (String.valueOf(consumption.getRetailPrice()), font)));
                    table.addCell(new PdfPCell (new Phrase (String.valueOf(consumption.getRetailPrice() * consumption.getAmount()), font)));
                    n++;
                }
            }

            //last line in table
            table.addCell(new PdfPCell (new Phrase ("", font)));
            table.addCell(new PdfPCell (new Phrase ("", font)));
            table.addCell(new PdfPCell (new Phrase (String.valueOf(amount), font)));
            table.addCell(new PdfPCell (new Phrase ("", font)));
            table.addCell(new PdfPCell (new Phrase ("", font)));
            table.addCell(new PdfPCell (new Phrase (String.valueOf(price), font)));


            //line
            Chunk linebreak2 = new Chunk(new DottedLineSeparator());

            //footer
            StringBuilder footerStr = new StringBuilder("Всего наименований ");
            footerStr.append(amount).append(", на сумму ").append(price).append(" руб.");
            Paragraph footerP = new Paragraph(footerStr.toString(), font);
            footerP.setPaddingTop(10f);


            document.add(h1);
            document.add(linebreak1);
            document.add(table);
            document.add(footerP);
            document.add(linebreak2);


            document.close();
        } catch (DocumentException e) {
            e.printStackTrace();
        }
        byte[] pdfBytes = byteArrayOutputStream.toByteArray();
        return pdfBytes;
    }
}
