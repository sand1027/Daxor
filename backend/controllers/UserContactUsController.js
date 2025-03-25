import dotenv from "dotenv";

import nodemailer from "nodemailer";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL, // Your Gmail email address
    pass: process.env.SENDER_PASS, // Your Gmail password or app-specific password
  },
});

export const sendMessage = async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.SENDER_EMAIL,
      subject: `New Message: ${subject}`,
      text: `
        From: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};
