# Invoice Management Backend

Backend for Invoice Management System built with Node.js, Express, and MongoDB.

## Features
- User registration and authentication (JWT-based)
- Secure password hashing
- Rate limiting for invoice creation
- Invoice CRUD operations
- PDF invoice generation and download
- Environment variable support

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB instance (local or cloud)

### Installation
```bash
git clone <your-repo-url>
cd invoice_backend
npm install
```

### Environment Variables
Create a `.env` file in the root directory and add the following:
```
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

### Running the Server
```bash
# For production
npm start

# For development (with nodemon)
npm run dev
```

## API Endpoints

### Auth
- **POST** `/api/auth/register` — Register a new user
- **POST** `/api/auth/login` — Login and receive JWT token

### Invoices (Require Authorization header: `Bearer <token>`)
- **POST** `/api/invoices` — Create a new invoice
- **GET** `/api/invoices` — Get all invoices
- **GET** `/api/invoices/<invoice_id>/download` — Download invoice as PDF

For detailed request/response formats, see [`api_endpoints.md`](./api_endpoints.md).

## Project Structure
```
.
├── app.js
├── server.js
├── package.json
├── controllers/
├── routes/
├── models/
├── middlewares/
├── utils/
├── config/
├── pdfs/
└── ...
```

## License
MIT 