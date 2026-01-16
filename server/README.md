# Finyzer Assets Backend API

## Setup Instructions

1. Install dependencies:
```bash
cd server
npm install
```

2. Configure environment variables:
   - The `.env` file is already configured with SMTP settings
   - Update `EMAIL_TO` if needed

3. Start the server:
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### POST /api/contact
Send contact form data

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "userType": "investor",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### GET /api/health
Health check endpoint

## Deployment

For production deployment, you can use:
- **Vercel/Netlify** (serverless functions)
- **Heroku**
- **AWS/Azure**
- **DigitalOcean**

Make sure to set environment variables in your deployment platform.
