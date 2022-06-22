package mn.jwt.data.services;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfDocument;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

import javax.inject.Singleton;
import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;

@Singleton
public class PdfService {
    private ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

    public byte[] generatePdf(){
        PdfDocument pdfDocument = new PdfDocument();

        Document document = new Document(PageSize.LETTER, 0.75F, 0.75F, 0.75F, 0.75F);


        try {
            PdfWriter.getInstance(document, byteArrayOutputStream);

            document.open();
            PdfPTable table = new PdfPTable(3);

            Font font = FontFactory.getFont(FontFactory.COURIER, 16, BaseColor.BLACK);
            Chunk chunk = new Chunk("Hello World", font);

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
