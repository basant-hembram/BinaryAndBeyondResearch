import dns from "dns";
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Debug: Log loaded environment variables (remove in production)
console.log('SMTP Configuration:');
console.log('Host:', process.env.SMTP_HOST);
console.log('Port:', process.env.SMTP_PORT);
console.log('Secure:', process.env.SMTP_SECURE);
console.log('User:', process.env.SMTP_USER);
console.log('Pass:', process.env.SMTP_PASS ? '***' + process.env.SMTP_PASS.slice(-4) : 'NOT SET');

dns.setDefaultResultOrder("ipv4first");

// Create SMTP transporter
const transporter = nodemailer.createTransport({
  host: "pro.turbo-smtp.com", //process.env.SMTP_HOST,
  port: 587, //Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'false', // true for 465, false for other ports
  auth: {
    user: "2303c5eec4046322f60c", //process.env.SMTP_USER,
    pass: "sPntG4uKziSLaBDVF26Z", //process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

await transporter.verify();
console.log("SMTP ready");

// Note: Commenting out verify() as it may fail at startup but work when actually sending
// transporter.verify((error, success) => {
//   if (error) {
//     console.error('SMTP connection error:', error);
//   } else {
//     console.log('SMTP server is ready to send emails');
//   }
// });

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, userType, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !userType || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A1A3A;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>User Type:</strong> ${userType}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the Finyzer Assets contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        User Type: ${userType}
        
        Message:
        ${message}
      `,
    };

    // Send email
    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode
    });
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again later.',
      error: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
