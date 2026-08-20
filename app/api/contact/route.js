import { Resend } from "resend";

const recipient = "yazdan.suhail@gmail.com";

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Email delivery needs RESEND_API_KEY in .env.local. Add it and restart the development server." },
      { status: 503 },
    );
  }

  const { name, email, service, budget, message } = await request.json();

  if (!name || !email || !service || !budget || !message) {
    return Response.json({ error: "Please complete all enquiry fields." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Portfolio enquiries <onboarding@resend.dev>",
    to: [recipient],
    replyTo: email,
    subject: `Freelance enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Budget: ${budget}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    return Response.json({ error: "Email delivery failed. Please try WhatsApp instead." }, { status: 502 });
  }

  return Response.json({ success: true });
}