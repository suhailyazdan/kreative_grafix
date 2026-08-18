import ProjectCard from "./ProjectCard";

export default function Projects({ items = [] }) {
  return (
    <section id="projects" className="pt-8 md:pt-10">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="grid gap-2">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-zinc-500">Selected Projects</p>
          <h2 className="m-0 text-4xl leading-[1.05] tracking-[-0.06em] text-zinc-900 md:text-5xl">
            Work that blends design and front-end execution.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
