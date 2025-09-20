import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interestedItem: string;
  message: string;
}

export async function POST(request: NextRequest) {
  let formData: Partial<ContactFormData> = {};

  try {
    const { name, email, phone, interestedItem, message } =
      await request.json();

    // Store form data for potential logging in catch block
    formData = { name, email, phone, interestedItem, message };

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter - you can configure this for different email services
    const transporter = nodemailer.createTransport({
      // Gmail configuration (most common)
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // Your address
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #1e40af; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; text-align: center;">RIMAC Contact Form</h1>
        </div>
        
        <div style="background-color: #f8fafc; padding: 30px; border: 1px solid #e5e7eb;">
          <h2 style="color: #1e40af; margin-top: 0; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1e40af;">
            <h3 style="color: #374151; margin-top: 0;">Customer Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 140px;">Name:</td>
                <td style="padding: 8px 0; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email:</td>
                <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Phone:</td>
                <td style="padding: 8px 0; color: #111827;">${
                  phone || "Not provided"
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Interested In:</td>
                <td style="padding: 8px 0; color: #111827;">${
                  interestedItem || "General Inquiry"
                }</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #059669;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">
              <p style="white-space: pre-line; line-height: 1.6; margin: 0; color: #374151;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #dbeafe; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              📧 This email was sent from the RIMAC website contact form<br>
              🕒 Submitted on: ${new Date().toLocaleString("en-US", {
                timeZone: "Asia/Riyadh",
                dateStyle: "full",
                timeStyle: "short",
              })}
            </p>
          </div>
        </div>
        
        <div style="background-color: #374151; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="color: #d1d5db; margin: 0; font-size: 12px;">
            RIMAC - Your Trusted Partner in Construction Materials
          </p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"RIMAC Website" <${process.env.EMAIL_USER}>`,
      to: "info@rimac.co",
      subject: `🔔 New Contact Form Submission - ${
        interestedItem || "General Inquiry"
      }`,
      html: emailHtml,
      replyTo: email, // Allow direct reply to customer
      // Text version for email clients that don't support HTML
      text: `
New Contact Form Submission

Customer Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || "Not provided"}
- Interested In: ${interestedItem || "General Inquiry"}

Message:
${message}

Submitted on: ${new Date().toLocaleString("en-US", {
        timeZone: "Asia/Riyadh",
        dateStyle: "full",
        timeStyle: "short",
      })}
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", {
      messageId: info.messageId,
      response: info.response,
      customerEmail: email,
      customerName: name,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Email sent successfully",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Log the form data even if email fails
    if (formData.name) {
      console.log("Contact form submission (email failed):", {
        ...formData,
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }

    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
