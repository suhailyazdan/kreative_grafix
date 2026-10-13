
import { Resend } from "resend";

const recipient = process.env.CONTACT_EMAIL || "yazdan.suhail@gmail.com";
const sender =
  process.env.RESEND_FROM_EMAIL || "Kreative Grafix <onboarding@resend.dev>";
const services = new Set([
  "Brand & visual design",
  "Website or landing page",
  "UI/UX design",
  "Front-end development",
  "Full stack web applications",
  "Something else",
]);
const budgets = new Set([
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $7,000",
  "$7,000+",
]);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isText(value, maxLength) {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().length <= maxLength
  );
}

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Email delivery is not configured. Please try again later." },
      { status: 503 },
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Please submit a valid enquiry." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return Response.json({ error: "Please submit a valid enquiry." }, { status: 400 });
  }

  const { name, email, service, budget, message } = payload;
  const cleanName = typeof name === "string" ? name.trim() : "";
  const cleanEmail = typeof email === "string" ? email.trim() : "";
  const cleanMessage = typeof message === "string" ? message.trim() : "";

  if (
    !isText(name, 120) ||
    /[\r\n]/.test(cleanName) ||
    !isText(email, 254) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
    typeof service !== "string" ||
    !services.has(service) ||
    typeof budget !== "string" ||
    !budgets.has(budget) ||
    !isText(message, 5000)
  ) {
    return Response.json({ error: "Please complete all enquiry fields." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const html = `
    <h2>New freelance enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
    <p><strong>Service:</strong> ${escapeHtml(service)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(cleanMessage).replaceAll("\n", "<br />")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: cleanEmail,
      subject: `Freelance enquiry from ${cleanName}`,
      html,
      text: [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Service: ${service}`,
        `Budget: ${budget}`,
        "",
        cleanMessage,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend email failed:", error);
      return Response.json(
        { error: "Email delivery failed. Please try WhatsApp instead." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Resend email request failed:", error);
    return Response.json(
      { error: "Email delivery failed. Please try WhatsApp instead." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}