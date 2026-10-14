export default function Teaching() {
  const teachingTopics = [
    "UI/UX Design",
    "Design Thinking",
    "Problem Solving",
    "Figma",
    "HTML/CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Responsive Web Design",
    "Portfolio Development",
  ];

  return (
    <section id="teaching" className="pt-8 md:pt-10">
      <div className="mx-auto grid max-w-[1180px] gap-6 px-4">
        <div className="grid gap-2">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-zinc-500">Teaching &amp; Mentoring</p>
          <h2 className="m-0 text-4xl leading-[1.05] tracking-[-0.06em] text-zinc-900 md:text-5xl">
            Helping others grow in design and development.
          </h2>
        </div>

        <div className="rounded-[1.75rem] border border-black/10 bg-white/60 p-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)]">
          <p className="m-0 text-base leading-8 text-zinc-600 md:text-lg">
            Alongside my UI/UX design practice and front-end development work, I
            train and mentor aspiring designers and developers. I use practical
            projects, clear guidance, and hands-on feedback to build confidence
            in design thinking, interface design, and modern web skills.
          </p>

          <div className="mt-5 flex flex-wrap gap-2" aria-label="Teaching topics">
            {teachingTopics.map((topic) => (
              <span key={topic} className="inline-flex items-center justify-center rounded-full border border-black/10 bg-[#efeae0] px-3 py-1.5 text-xs font-semibold text-zinc-800">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
