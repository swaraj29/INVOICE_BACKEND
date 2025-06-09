import { Invoice } from '../models/Invoice.js';
import { generatePDF } from '../utils/pdfGenerator.js';
import path from 'path';

export const createInvoice = async (req, res) => {
  const { clientName, items } = req.body;
  const invoice = await Invoice.create({
    user: req.userId,
    clientName,
    items
  });
  
  res.status(201).json({ message: 'Invoice created', invoice });

  // Async PDF generation
  setTimeout(async () => {
    const outputPath = path.join('pdfs', `${invoice._id}.pdf`);
    await generatePDF(invoice, outputPath);
    invoice.status = 'Ready';
    invoice.pdfPath = outputPath;
    await invoice.save();
  }, 5000);
};

export const getInvoices = async (req, res) => {
  const invoices = await Invoice.find({ user: req.userId });
  res.json(invoices);
};

export const downloadInvoice = async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);
  if (!invoice || invoice.user.toString() !== req.userId)
    return res.status(403).json({ message: 'Access denied' });

  if (!invoice.pdfPath) {
    return res.status(404).json({ message: 'Invoice PDF not yet generated.' });
  }

  res.download(invoice.pdfPath);
};
