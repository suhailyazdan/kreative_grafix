import {
  FiBookOpen,
  FiLayers,
  FiMessageSquare,
  FiPenTool,
} from "react-icons/fi";

export default function WhatIBring() {
  const strengths = [
    {
      title: "UI/UX Design",
      description:
        "I shape intuitive digital experiences through user research, clear flows, thoughtful interaction, and polished interface design.",
      icon: FiPenTool,
    },
    {
      title: "Front-End Development",
      description:
        "I use HTML, CSS, JavaScript, React, and Next.js to bring design intent into responsive, usable web experiences.",
      icon: FiLayers,
    },
    {
      title: "Training & Mentoring",
      description:
        "I guide learners through practical design and development work, helping them grow their skills, confidence, and portfolios.",
      icon: FiBookOpen,
    },
    {
      title: "Creative Experience",
      description:
        "More than 20 years across design and digital work brings a broad visual perspective to each product challenge.",
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
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-200 to-orange-100 text-zinc-900">
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
