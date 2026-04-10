import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Binary & Beyond Research" <${process.env.SMTP_USER}>`,
      to: 'basant807@gmail.com',
      replyTo: email,
      subject: `[BBR Enquiry] ${firstName} ${lastName} reached out via the website`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f7;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#353572 0%,#602F7B 50%,#A32787 100%);padding:36px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:0.5px;">Binary &amp; Beyond Research</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.75);font-size:13px;letter-spacing:1px;text-transform:uppercase;">New Website Enquiry</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;">
              <p style="margin:0 0 24px;color:#151D26;font-size:15px;line-height:1.6;">
                You have received a new message through the contact form on your website. Here are the details:
              </p>

              <!-- Detail rows -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 16px;background:#f9f7ff;border-left:4px solid #4D3D84;border-radius:4px;margin-bottom:10px;">
                    <p style="margin:0;font-size:11px;color:#8A8A8A;text-transform:uppercase;letter-spacing:0.8px;">Full Name</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#151D26;font-weight:600;">${firstName} ${lastName}</p>
                  </td>
                </tr>
                <tr><td style="height:10px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background:#f9f7ff;border-left:4px solid #4D3D84;border-radius:4px;">
                    <p style="margin:0;font-size:11px;color:#8A8A8A;text-transform:uppercase;letter-spacing:0.8px;">Email Address</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#151D26;font-weight:600;">
                      <a href="mailto:${email}" style="color:#4D3D84;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr><td style="height:10px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background:#f9f7ff;border-left:4px solid #4D3D84;border-radius:4px;">
                    <p style="margin:0;font-size:11px;color:#8A8A8A;text-transform:uppercase;letter-spacing:0.8px;">Phone Number</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#151D26;font-weight:600;">${phone}</p>
                  </td>
                </tr>
                <tr><td style="height:10px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background:#f9f7ff;border-left:4px solid #4D3D84;border-radius:4px;">
                    <p style="margin:0;font-size:11px;color:#8A8A8A;text-transform:uppercase;letter-spacing:0.8px;">Message</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#151D26;line-height:1.7;">${message.replace(/\n/g, '<br/>')}</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#4D3D84,#A32787);color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 32px;border-radius:6px;letter-spacing:0.3px;">
                      Reply to ${firstName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f4f4f7;padding:20px 40px;text-align:center;border-top:1px solid #e8e8ee;">
              <p style="margin:0;font-size:12px;color:#8A8A8A;">
                This email was sent from the contact form at
                <a href="https://binaryandbeyondresearch.com" style="color:#4D3D84;text-decoration:none;">binaryandbeyondresearch.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
