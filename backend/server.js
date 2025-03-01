require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Sixth Ledger App");
});

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Or use "smtp.gmail.com"
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route for handling contact form submissions
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: `Sixth Ledger: Contact Form Submission from ${name}`,
    text: `
Hello Sixth Ledger Team,

You have received a new message via the Contact Form:

Name: ${name}
Email: ${email}
Message: 
${message}

Best regards,
Sixth Ledger Contact Form System
  `,
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <br />
      <p style="color: #555;">This email was generated by the Sixth Ledger Contact Form System.</p>
    </div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send the message. Please try again later." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
