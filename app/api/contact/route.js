import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Allowed origins
const allowedOrigins = [
  "http://localhost:3000",
  "http://109.176.199.133:3000",
  "https://ajeromi-ifelodun.lg.gov.ng",
  "http://ajeromi-ifelodun.lg.gov.ng"
];

// Function to handle CORS dynamically
function getCorsHeaders(origin) {
  if (allowedOrigins.includes(origin)) {
    return {
      "Access-Control-Allow-Origin": origin, // Allow only this origin
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
  }
  return {}; // Block unauthorized origins
}

// Handle OPTIONS (CORS Preflight Request)
export function OPTIONS(req) {
  const origin = req.headers.get("origin") || "";
  return new Response(null, { status: 204, headers: getCorsHeaders(origin) });
}

// Handle POST requests
export async function POST(req) {
  try {
    const origin = req.headers.get("origin") || "";

    if (!allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { message: "CORS policy does not allow this origin." },
        { status: 403 }
      );
    }

    const body = await req.json(); // Read request body

    // Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: "info@ajeromi-ifelodun.lg.gov.ng",
      subject: "Contact Form Submission",
      text: `Name: ${body.firstname} ${body.lastname}\nEmail: ${body.email}\nMessage: ${body.help}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: getCorsHeaders(origin),
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: getCorsHeaders(origin),
    });
  }
}