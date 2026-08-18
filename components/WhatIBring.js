import {
  FiBookOpen,
  FiLayers,
  FiMessageSquare,
  FiPenTool,
} from "react-icons/fi";

export default function WhatIBring() {
  const strengths = [
    {
      title: "Design Thinking",
      description:
        "I solve problems through user-centered thinking, clear structure, and thoughtful visual communication.",
      icon: FiPenTool,
    },
    {
      title: "Design + Development",
      description:
        "I work across the full creative and technical process, helping ideas become polished digital experiences.",
      icon: FiLayers,
    },
    {
      title: "Industry Experience",
      description:
        "My background spans graphic design, web design, front-end development, and digital marketing across many years of practice.",
      icon: FiBookOpen,
    },
    {
      title: "Teaching & Communication",
      description:
        "I explain complex ideas clearly, support learning, and bring strong communication into collaborative environments.",
      icon: FiMessageSquare,
    },
  ];

  return (
    <section id="what-i-bring" className="pt-8 md:pt-10">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="grid gap-2">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-zinc-500">Why hire me</p>
          <h2 className="m-0 text-4xl leading-[1.05] tracking-[-0.06em] text-zinc-900 md:text-5xl">
            What I bring.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-[1.5rem] border border-black/10 bg-white/60 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(99,102,241,0.08)]">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-200 via-violet-200 to-pink-200 text-zinc-900">
                <Icon size={18} />
              </div>
              <h3 className="mb-3 text-xl tracking-[-0.04em] text-zinc-900">{title}</h3>
              <p className="m-0 text-base leading-7 text-zinc-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
