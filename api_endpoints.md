# API Endpoints

## Auth

### Register
- **POST** `/api/auth/register`
- **Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

### Login
- **POST** `/api/auth/login`
- **Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```
- **Response:**
```json
{
  "token": "<JWT token>"
}
```

---

## Invoices (Require Authorization header: `Bearer <token>`)

### Create Invoice
- **POST** `/api/invoices`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Body:**
```json
{
  "clientName": "Client ABC",
  "items": [
    { "description": "Design work", "price": 150 },
    { "description": "Development", "price": 350 }
  ]
}
```

### Get All Invoices
- **GET** `/api/invoices`
- **Headers:**
  - `Authorization: Bearer <token>`

### Download Invoice PDF
- **GET** `/api/invoices/<invoice_id>/download`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Response:**
  - PDF file download 