import {
  FiDownload,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

export default function Contact() {
  const links = [
    { label: "hello@example.com", href: "mailto:hello@example.com", icon: FiMail },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: FiLinkedin },
    { label: "GitHub", href: "https://github.com", icon: FiGithub },
    { label: "Behance", href: "https://www.behance.net", icon: FiGlobe },
    { label: "View Resume", href: "/resume", icon: FiDownload },
  ];

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
      </div>
    </section>
  );
}
