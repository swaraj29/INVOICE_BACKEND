import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.set('trust proxy', 1);

app.use('/api/auth', authRoutes);
app.use('/api/invoices', invoiceRoutes);

export default app;
