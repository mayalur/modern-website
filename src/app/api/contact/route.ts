import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!process.env.SENDGRID_API_KEY || !process.env.SENDER_EMAIL || !process.env.RECIPIENT_EMAIL) {
      throw new Error('Missing email configuration');
    }

    // Prepare the email
    const emailData = {
      to: process.env.RECIPIENT_EMAIL,
      from: process.env.SENDER_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
      `,
    };

    // Send the email
    await sgMail.send(emailData);

    // Also send an auto-reply to the person who submitted the form
    const autoReplyData = {
      to: email,
      from: process.env.SENDER_EMAIL,
      subject: 'Thank you for contacting us',
      text: `
Dear ${name},

Thank you for your message. We have received it and will get back to you soon.

Best regards,
Mayaware Team
      `,
      html: `
<h2>Thank you for your message</h2>
<p>Dear ${name},</p>
<p>Thank you for your message. We have received it and will get back to you soon.</p>
<p>Best regards,<br>Mayaware Team</p>
      `,
    };

    await sgMail.send(autoReplyData);

    return NextResponse.json(
      { message: 'Message sent! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
} 