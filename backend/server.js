require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); // Cambia esto en producción


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/submit", async (req, res) => {
  const { firstName, email, type, comment } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "tomcesped7@gmail.com", 
    subject: `Nuevo mensaje de ${firstName} (${type})`,
    text: `Nombre: ${firstName}\nEmail: ${email}\nTipo: ${type}\nMensaje: ${comment}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ type: "success", message: "Hey 👋🏼 I will contact you as soon as possible 📩" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ type: "error", message: "Oops 😬, there was an error." });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
