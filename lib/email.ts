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
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>BuildIQ – Thank You</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body, html {
        margin: 0; padding: 0; background: #050505;
      }
      table { border-collapse: collapse; }
      img { display: block; }
      .font { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    </style>
  </head>

  <body style="margin:0; padding:0; background:#050505;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505; padding:40px 0;">
      <tr>
        <td align="center">

          <!-- Outer container -->
          <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; border-radius:28px; background:#0a0a0a; overflow:hidden; border:1px solid rgba(255,255,255,0.06);">

            <!-- Header -->
            <tr>
              <td align="center" style="padding:40px 20px; background:linear-gradient(180deg, #0d0d0e, #0b0b0b); border-bottom:1px solid rgba(255,255,255,0.05);">

                <!-- Logo replacement text (HTML safe) -->
                <div class="font" style="color:#fff; font-size:26px; font-weight:700; letter-spacing:0.08em;">
                  BUILD<span style="color:#facc15;">IQ</span>
                </div>

                <!-- Gold divider -->
                <div style="width:40px; height:3px; background:#facc15; margin:18px auto 0 auto; border-radius:10px;"></div>

                <div class="font" style="margin-top:18px; font-size:14px; color:#bcbcbc; letter-spacing:0.15em; text-transform:uppercase;">
                  Digital Excellence Delivered
                </div>
              </td>
            </tr>

            <!-- Main content card -->
            <tr>
              <td style="padding:32px 28px;">
                <table width="100%" style="background:#0f0f0f; border-radius:20px; border:1px solid rgba(255,255,255,0.08); box-shadow:0 0 25px rgba(0,0,0,0.4);">

                  <tr>
                    <td class="font" style="padding:30px; color:#e5e5e5; font-size:16px; line-height:1.7;">

                      <h2 style="margin:0 0 16px 0; color:#ffffff; font-size:22px; font-weight:600;">
                        Hi ${data.name || "there"},
                      </h2>

                      <p style="margin:0 0 16px 0; color:#d1d1d1;">
                        Thank you for contacting BuildIQ. We've received your project enquiry and we're excited to learn more about your vision.
                      </p>

                      <!-- Received data -->
                      <p style="margin-bottom:8px; font-weight:600; color:#facc15;">
                        Here’s what we received:
                      </p>

                      <table width="100%" cellpadding="0" cellspacing="0" style="color:#d4d4d4; font-size:15px;">
                        <tr>
                          <td style="padding:6px 0; width:130px; color:#999;">Business</td>
                          <td style="padding:6px 0; font-weight:500;">${data.businessName || "—"}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0; width:130px; color:#999;">Budget Range</td>
                          <td style="padding:6px 0; font-weight:500;">${data.budget || "—"}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0; width:130px; color:#999; vertical-align:top;">Message</td>
                          <td style="padding:6px 0; white-space:pre-line; color:#cfcfcf;">${data.message || "—"}</td>
                        </tr>
                      </table>

                      <p style="margin:22px 0 8px 0; color:#d1d1d1;">
                        Our team will review your requirements and get back to you within
                        <span style="color:#facc15; font-weight:600;">48 hours</span>.
                      </p>

                      <p style="margin:0 0 24px 0; color:#9e9e9e;">
                        In the meantime, feel free to explore our recent work and process:
                      </p>

                      <!-- CTA Button -->
                      <a href="https://buildiqs.org"
                        style="display:inline-block; background:linear-gradient(135deg,#facc15,#f97316); padding:14px 32px; border-radius:999px; color:#000; font-weight:600; font-size:14px; text-decoration:none; letter-spacing:0.04em; text-transform:uppercase; box-shadow:0 4px 14px rgba(250,204,21,0.3);">
                        Visit Our Website
                      </a>

                      <p style="margin-top:28px; color:#b3b3b3; font-size:14px;">
                        Best regards,<br/>
                        <span style="color:#fff; font-weight:600;">The BuildIQ Team</span>
                      </p>

                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td class="font" align="center" style="padding:22px; font-size:12px; color:#6d6d6d;">
                <p style="margin:0 0 4px 0;">BuildIQ · Oxford, United Kingdom</p>
                <p style="margin:0;">
                  <a href="mailto:enquiry@buildiq.org" style="color:#facc15; text-decoration:none;">enquiry@buildiq.org</a>
                  &nbsp;·&nbsp;
                  <span style="color:#7a7a7a;">+44 (0) 73 0834 3820</span>
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
