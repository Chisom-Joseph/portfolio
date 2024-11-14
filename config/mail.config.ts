const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify(function (error: Error | null, success: boolean) {
  if (error) {
    console.log(error);
  } else {
    console.log(success);
    console.log("Email transport ready!");
  }
});
