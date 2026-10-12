import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-[1.4rem] border border-black/10 bg-white/60 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(17,17,17,0.08)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <Image
          src={project.image}
          alt={project.imageAlt || `${project.title} project preview`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="grid gap-2">
          <span className="inline-flex w-fit items-center rounded-full border border-black/10 bg-[#efeae0] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-zinc-500">
            {project.category}
          </span>
          <h3 className="m-0 text-3xl tracking-[-0.06em] text-zinc-900">{project.title}</h3>
        </div>

        <p className="m-0 text-base leading-7 text-zinc-600">{project.summary}</p>

        <dl className="m-0 grid gap-3">
          <div className="grid gap-1">
            <dt className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-zinc-500">My role</dt>
            <dd className="m-0 font-semibold text-zinc-900">{project.role}</dd>
          </div>
          <div className="grid gap-1">
            <dt className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-zinc-500">Tools</dt>
            <dd className="m-0 font-semibold text-zinc-900">{project.tools}</dd>
          </div>
        </dl>

        <div className="mt-auto pt-1">
          <a
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 border-b border-transparent font-semibold text-zinc-900 transition hover:border-zinc-900"
            aria-label={`View case study for ${project.title}`}
          >
            View Case Study
            <FiArrowRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
