import express from 'express';
import { authMiddleware } from '../middlewares/auth.js';
import { invoiceRateLimiter } from '../middlewares/rateLimiter.js';
import { createInvoice, getInvoices, downloadInvoice } from '../controllers/invoiceController.js';

const router = express.Router();

router.use(authMiddleware);
router.post('/', invoiceRateLimiter, createInvoice);
router.get('/', getInvoices);
router.get('/:id/download', downloadInvoice);

export default router;
