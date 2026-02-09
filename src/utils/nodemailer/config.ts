import nodemailer from "nodemailer";

interface EmailOptions {
  email: string;
  subject: string;
  message: string;
}

interface SendEmailResponse {
  status: string;
  response: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: import.meta.env.GMAIL_USER,
    pass: import.meta.env.GMAIL_PASSWORD_APP, // The 16-character App Password
  },
});

export const sendMail = async ({
  email,
  subject,
  message,
}: EmailOptions): Promise<SendEmailResponse> => {
  try {
    await transporter.sendMail({
      from: email, 
      to: import.meta.env.RECIPIENT_EMAIL, 
      subject: subject, 
      text: message, 
      html: `
      <h1>Portfolio JaimeJB</h1>
      <h2>Recibiste un correo de: <span>${email}</span></h2>
      <br/>
      <p>El mensaje es el siguiente:</p>
      <br/>
      <p>${message}</p>
      `,
    });

    return {
      status: "ok",
      response: "Mensaje enviado!",
    };
  } catch (err) {
    console.error(err);
    return {
      status: "fail",
      response: "Error al enviar email, inténtalo más tarde.",
    };
  }
};
