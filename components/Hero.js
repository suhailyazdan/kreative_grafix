import Image from "next/image";
import { FiArrowRight, FiGithub, FiGlobe, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: FiLinkedin },
    { label: "GitHub", href: "https://github.com", icon: FiGithub },
    { label: "Behance", href: "https://www.behance.net", icon: FiGlobe },
  ];

  const highlights = [
    "UI/UX Design",
    "Web Design",
    "Front-End Development",
    "Teaching & Mentoring",
  ];

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-16 md:pb-20 md:pt-20">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-br from-teal-200/40 via-orange-100/50 to-transparent blur-3xl" />
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2rem] top-20 z-0 h-44 w-44 opacity-40 sm:right-[7%] sm:top-16 sm:h-56 sm:w-56 lg:right-[35%] lg:top-0 lg:h-72 lg:w-72"
      >
        <Image
          src="/logo%20kreative%20grafix.svg"
          alt=""
          fill
          sizes="(min-width: 1024px) 288px, (min-width: 640px) 224px, 176px"
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1180px] gap-8 px-4 lg:grid-cols-[1.7fr_0.7fr] lg:items-center">
        <div className="grid gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-teal-800 shadow-sm backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-[#10bfaa]" />
            Kreative Grafix · Creative Portfolio
          </div>

          <h1 className="m-0 max-w-[680px] text-5xl leading-[0.98] tracking-[-0.07em] text-zinc-900 md:text-6xl xl:text-[5rem]">
            Suhail Yazdan
          </h1>

          <p className="m-0 max-w-[42rem] text-lg leading-8 text-zinc-600 md:text-[1.42rem]">
            I bring design, development, and digital storytelling together to
            create thoughtful experiences for people and businesses.
          </p>

          <ul className="m-0 flex list-none flex-wrap gap-2 p-0" aria-label="Professional roles">
            {["UI/UX Designer", "Web Developer", "Mentor / Trainer"].map((role) => (
              <li
                key={role}
                className="rounded-full border border-teal-900/10 bg-teal-50/80 px-3.5 py-2 text-sm font-semibold text-teal-950"
              >
                {role}
              </li>
            ))}
          </ul>

          <div className="mt-1 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-[#10bfaa] px-5 py-3 font-semibold text-zinc-950 shadow-[0_10px_18px_rgba(16,191,170,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0eaa98]"
              aria-label="View my work"
            >
              View My Work
              <FiArrowRight size={16} />
            </a>
            <a
              href="/resume"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-3 font-semibold text-zinc-900 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-teal-900/20 hover:bg-teal-50"
              aria-label="View resume page"
            >
              View Resume
            </a>
          </div>

          <ul className="m-0 flex list-none flex-wrap items-center gap-3 p-0" aria-label="Social profiles">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold text-zinc-700 transition duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50 hover:text-zinc-900"
                >
                  <Icon size={14} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-[1.75rem] border border-white/50 bg-white/65 p-4 shadow-[0_22px_50px_rgba(17,17,17,0.08)] backdrop-blur-sm" aria-label="Professional summary">
          <div className="relative h-72 overflow-hidden rounded-[1.4rem] border border-black/5 bg-[#f4efe9]">
            <Image
              src="/Suhail%20Yazdan.jpg"
              alt="Suhail Yazdan portrait"
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover object-center"
            />
          </div>

          <p className="mb-4 mt-5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-zinc-500">Professional focus</p>
          <ul className="m-0 grid list-none gap-3 p-0">
            {highlights.map((item, index) => (
              <li
                key={item}
                className="flex items-center justify-between rounded-2xl border border-black/5 bg-gradient-to-r from-white to-[#f5f1eb] px-3 py-3 font-medium text-zinc-900 shadow-sm"
              >
                <span>{item}</span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-950">
                  {index + 1}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
