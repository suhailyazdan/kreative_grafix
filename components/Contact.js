"use client";

import { useState } from "react";
import {
  FiArrowUpRight,
  FiDownload,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedMethod, setSubmittedMethod] = useState("");
  const [submissionError, setSubmissionError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const links = [
    { label: "yazdan.suhail@gmail.com", href: "mailto:yazdan.suhail@gmail.com", icon: FiMail },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/suhailyazdan-ui-ux-designer/", icon: FiLinkedin },
    { label: "Behance", href: "https://www.behance.net/suhailyazdan", icon: FiGlobe },
    { label: "Coroflot", href: "https://www.coroflot.com/suhail_graphics", icon: FiGlobe },
    { label: "View Resume", href: "/resume", icon: FiDownload },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(false);
    setSubmittedMethod("");
    setSubmissionError("");
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const budget = formData.get("budget");
    const message = formData.get("message");
    const sendMethod = formData.get("sendMethod");
    const inquiry = [
      `Hi Suhail, I’m ${name}.`,
      `I’m interested in: ${service}.`,
      `Budget: ${budget}.`,
      `Email: ${email}.`,
      "",
      message,
    ].join("\n");

    try {
      if (sendMethod === "whatsapp") {
        const whatsappWindow = window.open(
          `https://wa.me/917411555859?text=${encodeURIComponent(inquiry)}`,
          "_blank",
          "noopener,noreferrer",
        );
        if (!whatsappWindow) {
          throw new Error("WhatsApp could not be opened. Please allow pop-ups or choose Email.");
        }
      } else {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, service, budget, message }),
        });

        if (!response.ok) {
          const result = await response.json().catch(() => ({}));
          throw new Error(result.error || "Your email could not be sent.");
        }
      }

      setSubmittedMethod(sendMethod);
      setSubmitted(true);
    } catch (error) {
      setSubmissionError(
        error instanceof Error ? error.message : "Your enquiry could not be sent.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="pt-8 md:pt-10">
      <div className="mx-auto grid max-w-[1180px] gap-6 px-4">
        <div className="grid gap-2">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-zinc-500">Contact</p>
          <h2 className="m-0 text-4xl leading-[1.05] tracking-[-0.06em] text-zinc-900 md:text-5xl">
            Let&apos;s connect.
          </h2>
        </div>

        <div className="rounded-[1.75rem] border border-black/10 bg-white/60 p-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)] backdrop-blur-sm md:p-8">
          <p className="mb-6 text-base leading-8 text-zinc-600 md:text-lg">
            I&apos;m open to professional opportunities where design, UX, front-end
            development, and mentoring can make a meaningful impact.
          </p>

          <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2.5 font-semibold text-zinc-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50"
                >
                  <Icon size={15} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-900 bg-zinc-950 p-6 text-white shadow-[0_24px_60px_rgba(17,17,17,0.14)] md:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <div className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-orange-300">
                  <FiMessageCircle size={15} />
                  Freelance work
                </div>
                <h3 className="m-0 max-w-md text-4xl leading-[0.98] tracking-[-0.06em] md:text-5xl">
                  Have a good idea? Let&apos;s make it useful.
                </h3>
                <p className="m-0 max-w-lg text-base leading-8 text-zinc-300 md:text-lg">
                  Bring me your rough idea, a stuck product, or a visual direction that needs momentum. I&apos;ll help shape it into a clear, thoughtful digital experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-sm font-medium text-zinc-200">
                {[
                  "Brand & visual design",
                  "Websites & landing pages",
                  "UI/UX direction",
                  "Front-end builds",
                  "Full stack web applications"
                ].map((service) => (
                  <span key={service} className="rounded-full border border-white/15 bg-white/10 px-3 py-2">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-sm md:grid-cols-2 md:p-6">
              <label className="grid gap-2 text-sm font-semibold text-zinc-200">
                Your name
                <input required name="name" type="text" placeholder="Jane Smith" className="min-h-12 rounded-xl border border-white/15 bg-black/20 px-4 font-normal text-white outline-none placeholder:text-zinc-500 focus:border-orange-300" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-zinc-200">
                Email address
                <input required name="email" type="email" placeholder="jane@company.com" className="min-h-12 rounded-xl border border-white/15 bg-black/20 px-4 font-normal text-white outline-none placeholder:text-zinc-500 focus:border-orange-300" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-zinc-200">
                I need help with
                <select required name="service" defaultValue="" className="min-h-12 rounded-xl border border-white/15 bg-zinc-900 px-4 font-normal text-white outline-none focus:border-orange-300">
                  <option value="" disabled>Select a service</option>
                  <option>Brand & visual design</option>
                  <option>Website or landing page</option>
                  <option>UI/UX design</option>
                  <option>Front-end development</option>
                  <option>Full stack web applications</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-zinc-200">
                Approx. budget
                <select required name="budget" defaultValue="" className="min-h-12 rounded-xl border border-white/15 bg-zinc-900 px-4 font-normal text-white outline-none focus:border-orange-300">
                  <option value="" disabled>Choose a range</option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $7,000</option>
                  <option>$7,000+</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-zinc-200 md:col-span-2">
                Tell me about the project
                <textarea required name="message" rows="4" placeholder="What are you building, and what would make it a success?" className="resize-y rounded-xl border border-white/15 bg-black/20 px-4 py-3 font-normal leading-7 text-white outline-none placeholder:text-zinc-500 focus:border-orange-300" />
              </label>
              <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
                <fieldset className="grid gap-2 border-0 p-0 text-xs leading-5 text-zinc-300">
                  <legend className="mb-1 font-semibold text-zinc-200">How would you like to send this?</legend>
                  <div className="flex flex-wrap gap-3">
                    <label className="inline-flex cursor-pointer items-center gap-2">
                      <input required type="radio" name="sendMethod" value="email" defaultChecked className="accent-orange-300" />
                      Email
                    </label>
                    <label className="inline-flex cursor-pointer items-center gap-2">
                      <input required type="radio" name="sendMethod" value="whatsapp" className="accent-orange-300" />
                      WhatsApp
                    </label>
                  </div>
                </fieldset>
                <button disabled={isSubmitting} type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-300 px-5 font-bold text-zinc-950 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-200 disabled:cursor-wait disabled:opacity-60">
                  {isSubmitting ? "Sending..." : "Send enquiry"}
                  {!isSubmitting && <FiSend size={15} />}
                </button>
              </div>
              {submitted && (
                <p role="status" className="m-0 inline-flex items-center gap-2 text-sm font-semibold text-orange-200 md:col-span-2">
                  {submittedMethod === "whatsapp"
                    ? "Your enquiry is ready in WhatsApp. Send it there to get in touch."
                    : "Your enquiry has been sent. I&apos;ll be in touch soon."}
                  <FiArrowUpRight size={15} />
                </p>
              )}
              {submissionError && (
                <p role="alert" className="m-0 text-sm font-semibold text-red-300 md:col-span-2">
                  {submissionError}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
