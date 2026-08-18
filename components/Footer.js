import { FiGithub, FiGlobe, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: FiLinkedin },
    { label: "GitHub", href: "https://github.com", icon: FiGithub },
    { label: "Behance", href: "https://www.behance.net", icon: FiGlobe },
  ];

  return (
    <footer className="border-t border-black/10 pb-8 pt-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="m-0 text-base font-bold tracking-[-0.04em] text-zinc-900">Suhail Yazdan</p>
          <p className="mt-1 text-sm text-zinc-500">UI/UX Designer • Web Designer • Front-End Developer</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-3 text-sm font-medium text-zinc-600">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-2 transition hover:border-violet-200 hover:bg-violet-50 hover:text-zinc-900"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
