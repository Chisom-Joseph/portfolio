import { transporter } from "../config/mail.config";

type contactType = {
  subject: string;
  text: string;
  html?: string;
};

export default async function sendContactEmail({ subject, text }: contactType) {
  try {
    let info = await transporter.sendMail({
      from: `Contact form submission <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject,
      text,
    });

    console.log("Message sent: %s", info.messageId);

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
