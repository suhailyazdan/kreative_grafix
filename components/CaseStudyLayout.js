export default function CaseStudyLayout({ project }) {
  const sections = [
    {
      id: "overview",
      title: "Project Overview",
      content:
        project.overview ||
        "Project overview placeholder content will be added here as the case study develops.",
    },
    {
      id: "problem",
      title: "Problem",
      content:
        project.problem ||
        "The problem statement will be described here once the project goals and constraints are clarified.",
    },
    {
      id: "goals",
      title: "Goals",
      content:
        project.goals ||
        "Project goals placeholder content will be added here as the design and development decisions become clearer.",
    },
    {
      id: "research",
      title: "Research / Understanding",
      content:
        project.research ||
        "User and product understanding placeholder content will be added here as research findings are documented.",
    },
    {
      id: "information-architecture",
      title: "Information Architecture",
      content:
        project.informationArchitecture ||
        "Information architecture placeholder content will be added here as content structure and navigation direction are defined.",
    },
    {
      id: "wireframes",
      title: "Wireframes",
      content:
        project.wireframes ||
        "Wireframe notes and early sketches will be added here when the concept is fully developed.",
    },
    {
      id: "ui-design",
      title: "UI Design",
      content:
        project.uiDesign ||
        "UI design placeholder content will be added here when visual direction and interface details are ready.",
    },
    {
      id: "design-system",
      title: "Design System",
      content:
        project.designSystem ||
        "A design system placeholder will be documented here as reusable patterns and components are defined.",
    },
    {
      id: "development",
      title: "Development",
      content:
        project.development ||
        "Development notes and implementation details will be added here as the build is refined.",
    },
    {
      id: "final-result",
      title: "Final Result",
      content:
        project.finalResult ||
        "Final result placeholder content will be added here when the completed work is ready to be reviewed.",
    },
    {
      id: "learnings",
      title: "Learnings",
      content:
        project.learnings ||
        "Key learnings will be added here once the project is reviewed and reflected upon.",
    },
  ];

  return (
    <main className="px-4 py-8 md:py-12">
      <article className="mx-auto max-w-[980px]">
        <header className="rounded-[1.5rem] border border-black/10 bg-white/50 p-6 md:p-8">
          <div className="mb-3 inline-flex items-center rounded-full border border-black/10 bg-[#efeae0] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-zinc-500">
            Selected Project
          </div>
          <span className="mb-4 inline-flex items-center rounded-full border border-black/10 bg-[#efeae0] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-zinc-500">
            {project.category}
          </span>
          <h1 className="m-0 text-4xl tracking-[-0.06em] text-zinc-900 md:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-[48rem] text-lg leading-8 text-zinc-600">{project.summary}</p>

          <dl className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <dt className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-zinc-500">Role</dt>
              <dd className="mt-1 text-base font-semibold text-zinc-900">{project.role}</dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-zinc-500">Tools</dt>
              <dd className="mt-1 text-base font-semibold text-zinc-900">{project.tools}</dd>
            </div>
          </dl>
        </header>

        {project.gallery?.length > 0 ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2" aria-label="Project gallery">
            {project.gallery.map((item, index) => (
              <div key={`${item.alt}-${index}`} className="overflow-hidden rounded-[1.2rem] border border-black/10 bg-white/50">
                <img src={item.src} alt={item.alt || `${project.title} image ${index + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 flex min-h-[260px] items-center justify-center rounded-[1.2rem] border border-dashed border-black/20 bg-white/60 text-base font-medium text-zinc-500" aria-label="Project preview placeholder">
            Project visual placeholder
          </div>
        )}

        <div className="mt-8 space-y-6">
          {sections.map((section) => (
            <section key={section.id} className="rounded-[1.2rem] border border-black/10 bg-white/50 p-6">
              <h2 className="mb-3 text-2xl tracking-[-0.05em] text-zinc-900">{section.title}</h2>
              <p className="m-0 text-base leading-8 text-zinc-600">{section.content}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
