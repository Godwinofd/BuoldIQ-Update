import nodemailer from 'nodemailer';

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export interface ContactEmailData {
  name: string;
  email: string;
  businessName: string;
  budget: string;
  message: string;
}

export async function sendThankYouEmail(data: ContactEmailData): Promise<boolean> {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: data.email,
      subject: 'Thank You for Contacting BuildIQ',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .button {
                display: inline-block;
                background: #667eea;
                color: white;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 20px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0;">BuildIQ</h1>
              <p style="margin: 10px 0 0 0;">Digital Excellence Delivered</p>
            </div>
            <div class="content">
              <h2>Hi ${data.name},</h2>
              <p>Thank you for getting in touch with BuildIQ! We've received your project inquiry and are excited to learn more about your vision.</p>
              
              <p><strong>Here's what we received:</strong></p>
              <ul>
                <li><strong>Business:</strong> ${data.businessName}</li>
                <li><strong>Budget Range:</strong> ${data.budget}</li>
                <li><strong>Message:</strong> ${data.message}</li>
              </ul>
              
              <p>Our team will review your requirements and get back to you within <strong>48 hours</strong> with next steps.</p>
              
              <p>In the meantime, feel free to check out our latest work and insights:</p>
              <a href="https://buildiq.agency" class="button">Visit Our Website</a>
              
              <p style="margin-top: 30px;">Best regards,<br><strong>The BuildIQ Team</strong></p>
            </div>
            <div class="footer">
              <p>BuildIQ | London, United Kingdom</p>
              <p>hello@buildiq.agency | +44 (0) 20 1234 5678</p>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Send notification to admin
export async function sendAdminNotification(data: ContactEmailData): Promise<boolean> {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to business email
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Business:</strong> ${data.businessName}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return false;
  }
}
