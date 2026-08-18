const resumeDownloadUrl = "/resume.pdf";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] px-4 py-12 text-zinc-900">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-black/10 bg-white/60 p-6 shadow-[0_18px_40px_rgba(17,17,17,0.08)] md:p-10">
        <div className="flex flex-col gap-4 border-b border-black/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-zinc-500">Resume</p>
            <h1 className="mt-2 text-4xl tracking-[-0.06em] md:text-5xl">Suhail Yazdan</h1>
            <p className="mt-2 text-lg text-zinc-600">
              UI/UX Designer • Web Designer • Front-End Developer
            </p>
          </div>

          <a
            href={resumeDownloadUrl}
            download
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 font-semibold text-white transition hover:bg-black"
          >
            Download PDF
          </a>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <section>
            <h2 className="text-2xl tracking-[-0.05em] text-zinc-900">Profile</h2>
            <p className="mt-3 text-base leading-8 text-zinc-600">
              Designer and front-end developer focused on creating thoughtful digital experiences that balance clarity,
              usability, and modern execution. I work across design strategy, interface design, and front-end implementation
              to help businesses present themselves clearly and effectively online.
            </p>

            <div className="mt-8">
              <h2 className="text-2xl tracking-[-0.05em] text-zinc-900">Core Skills</h2>
              <ul className="mt-3 grid list-none gap-2 p-0 text-base text-zinc-600">
                <li>• UI/UX Design</li>
                <li>• Web Design</li>
                <li>• Front-End Development</li>
                <li>• Design Thinking</li>
                <li>• Responsive Design</li>
                <li>• Figma, HTML, CSS, JavaScript, React, Next.js</li>
              </ul>
            </div>
          </section>

          <aside className="rounded-[1.25rem] border border-black/10 bg-[#efeae0] p-5">
            <h2 className="text-xl tracking-[-0.05em] text-zinc-900">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li>Email: hello@example.com</li>
              <li>LinkedIn: linkedin.com</li>
              <li>GitHub: github.com</li>
              <li>Behance: behance.net</li>
            </ul>
          </aside>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl tracking-[-0.05em] text-zinc-900">Experience Highlights</h2>
          <div className="mt-5 space-y-5">
            <div className="rounded-2xl border border-black/10 bg-white/40 p-5">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-zinc-500">Professional Experience</p>
              <h3 className="mt-2 text-xl tracking-[-0.04em] text-zinc-900">UI/UX Designer & Front-End Developer</h3>
              <p className="mt-2 text-zinc-600">
                Created strategic digital experiences, designed visually clear interfaces, and built responsive front-end experiences that align with user needs and business goals.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/40 p-5">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-zinc-500">Teaching & Mentoring</p>
              <h3 className="mt-2 text-xl tracking-[-0.04em] text-zinc-900">Mentor & Learning Support</h3>
              <p className="mt-2 text-zinc-600">
                Helped learners build confidence in UX thinking, design workflows, HTML/CSS, JavaScript, and modern front-end tools.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
          <a href="/" className="font-semibold text-zinc-900 underline decoration-black/20 underline-offset-4">
            Back to portfolio
          </a>
          <a
            href={resumeDownloadUrl}
            download
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 font-semibold text-zinc-900 transition hover:bg-[#efeae0]"
          >
            Download PDF
          </a>
        </div>
      </div>
    </main>
  );
}
