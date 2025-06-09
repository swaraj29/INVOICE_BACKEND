import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  clientName: String,
  items: [
    {
      description: String,
      price: Number
    }
  ],
  status: { type: String, default: 'Processing' },
  pdfPath: String
}, { timestamps: true });

export const Invoice = mongoose.model('Invoice', invoiceSchema);
