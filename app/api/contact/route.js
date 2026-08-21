
import { Resend } from "resend";

const recipient = process.env.CONTACT_EMAIL || "suhailyazdanweb@gmail.com";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

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
  const html = `
    <h2>New freelance enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Service:</strong> ${escapeHtml(service)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: recipient,
    replyTo: email,
    subject: `Freelance enquiry from ${name}`,
    html,
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
    console.error("Resend email failed:", error);
    return Response.json({ error: "Email delivery failed. Please try WhatsApp instead." }, { status: 502 });
  }

  return Response.json({ success: true });
}