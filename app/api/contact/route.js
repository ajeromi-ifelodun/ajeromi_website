import nodemailer from "nodemailer";
import * as Yup from "yup";
import { NextResponse } from "next/server";

const contactSchema = Yup.object().shape({
  firstname: Yup.string().min(2).max(50).required(),
  lastname: Yup.string().min(2).max(50).required(),
  email: Yup.string().email().required(),
  phonenumber: Yup.string().matches(/^[0-9]+$/, "Must be a number").min(10).max(15).required(),
  help: Yup.string().max(500).required(),
});

const allowedOrigins = [
  "http://localhost:3000",
  "http://109.176.199.133:3000"
];

export async function POST(req) {
  try {
    console.log("API HIT !");
    const body = await req.json(); // Parse the request body

    // Validate the data
    await contactSchema.validate(body);

    console.log(process.env.EMAIL_PASS);
    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@ajeromi-ifelodun.lg.gov.ng",
      bcc: "ajeromi.ifelodun.ict@gmail.com",
      subject: "Contact Form Submission from website",
      text: `You have a new contact form submission:
      Name: ${body.firstname} ${body.lastname}
      Email: ${body.email}
      Phone: ${body.phonenumber}
      Help Request: ${body.help}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // ✅ Get the origin of the request
    const origin = req.headers.get("origin");

    const headers = {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (origin && allowedOrigins.includes(origin)) {
      headers["Access-Control-Allow-Origin"] = origin;
    }

    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully!", status: 200 }),
      {
        status: 200,
        headers,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    const origin = req.headers.get("origin");

    const headers = {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (origin && allowedOrigins.includes(origin)) {
      headers["Access-Control-Allow-Origin"] = origin;
    }

    return new NextResponse(
      JSON.stringify({ message: error.message, status: 400 }),
      {
        status: 400,
        headers,
      }
    );
  }
}

export async function OPTIONS(req) {
  const origin = req.headers.get("origin");

  const headers = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  if (origin && allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return new NextResponse(null, {
    status: 204,
    headers,
  });
}