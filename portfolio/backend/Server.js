import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Debug check for env
console.log("✅ GMAIL_USER:", process.env.GMAIL_USER);
console.log("✅ GMAIL_PASS:", process.env.GMAIL_PASS ? "Loaded" : "Missing");

// POST route
app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "New Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).send("Mail sent successfully!");
  } catch (error) {
    console.error("❌ Error details:", error);
    res.status(500).send("Failed to send mail.");
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
