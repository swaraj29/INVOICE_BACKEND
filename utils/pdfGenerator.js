import fs from "fs";
import PDFDocument from "pdfkit";
import path from "path";

// ✅ Make sure the 'pdfs' directory exists
const pdfDir = path.resolve("pdfs");
if (!fs.existsSync(pdfDir)) {
  fs.mkdirSync(pdfDir);
}

export const generatePDF = (invoice) => {
  return new Promise((resolve, reject) => {
    const filePath = `pdfs/${invoice._id}.pdf`;
    const doc = new PDFDocument();

    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);

    doc.fontSize(18).text(`Invoice for ${invoice.clientName}`, { underline: true });
    doc.moveDown();

    invoice.items.forEach((item, idx) => {
      doc.fontSize(14).text(`${idx + 1}. ${item.description} - ₹${item.price}`);
    });

    doc.moveDown();
    const total = invoice.items.reduce((acc, item) => acc + item.price, 0);
    doc.fontSize(16).text(`Total: ₹${total}`, { bold: true });

    doc.end();

    writeStream.on("finish", () => resolve(filePath));
    writeStream.on("error", reject);
  });
};
