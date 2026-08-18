"use client";

import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-[#f5f3ee]/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[72px] max-w-[1180px] items-center justify-between gap-4 px-4"
      >
        <a
          href="/"
          className="flex items-center gap-3 text-base font-bold tracking-[-0.04em] text-zinc-900"
          aria-label="Go to homepage"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 via-pink-300 to-violet-400 text-sm text-zinc-900 shadow-lg shadow-orange-200/60">
            SY
          </span>
          Suhail Yazdan
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white/60 shadow-sm md:hidden"
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>

        <div
          id="primary-navigation"
          className={`${
            isOpen ? "flex" : "hidden md:flex"
          } absolute left-4 right-4 top-[calc(100%+0.5rem)] flex-col gap-4 rounded-2xl border border-black/10 bg-[#f7f3ee] p-4 shadow-[0_18px_40px_rgba(17,17,17,0.08)] md:static md:flex-row md:items-center md:justify-end md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex list-none flex-col gap-2 p-0 md:flex-row md:items-center md:gap-1.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center justify-center rounded-full px-3.5 py-2 text-sm font-medium text-zinc-600 transition duration-200 hover:bg-[#efeae0] hover:text-zinc-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/resume"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-gradient-to-r from-zinc-900 to-zinc-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-zinc-200 transition hover:scale-[1.02]"
          >
            <FiDownload size={14} />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
