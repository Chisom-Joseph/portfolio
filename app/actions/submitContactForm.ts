"use server";
import sendContactEmail from "@/mails/contact.mail";

export default async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validate form fields
  if (!name || !email || !message) {
    return {
      success: false,
      message: "All fields are required to proceed",
    };
  }

  // Add to sheet
  const body = {
    portfolio: {
      name,
      email,
      message,
    },
  };

  console.log(process.env.SHEETY_URL);
  console.log(body);

  // Add to sheet
  fetch(process.env.SHEETY_URL_CONTACT as string, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something with object
      console.log(json);
      console.log(json.portfolio);
    })
    .catch((error) => console.log(error));

  // Send email
  const mailSent = await sendContactEmail({
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  return {
    success: true,
    message: "Form submitted successfully",
  };
}
