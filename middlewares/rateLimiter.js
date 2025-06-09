import rateLimit from 'express-rate-limit';

export const invoiceRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: 'Too many PDF requests, please try again after a minute.'
});
