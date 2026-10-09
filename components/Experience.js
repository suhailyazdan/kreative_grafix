import { FiBriefcase, FiTrendingUp } from "react-icons/fi";

export default function Experience({ items = [] }) {
  return (
    <section id="experience" className="pt-8 md:pt-10">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="grid gap-2">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-zinc-500">Experience</p>
          <h2 className="m-0 text-4xl leading-[1.05] tracking-[-0.06em] text-zinc-900 md:text-5xl">
            Professional background.
          </h2>
        </div>

        <div className="relative mt-8 grid gap-6 before:absolute before:bottom-0 before:left-[0.67rem] before:top-0 before:w-px before:bg-black/10">
          {items.map((job) => (
            <article key={`${job.company}-${job.role}`} className="relative grid grid-cols-[1.5rem_minmax(0,1fr)] gap-4 align-start">
              <div className="relative z-10 mt-1.5 flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-[#f5f3ee] bg-[#10bfaa]" aria-hidden="true">
                <FiBriefcase size={9} className="text-zinc-900" />
              </div>

              <div className="rounded-[1.5rem] border border-black/10 bg-white/60 p-5 shadow-sm transition duration-200 hover:shadow-[0_18px_40px_rgba(99,102,241,0.08)] md:p-6">
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="mb-1 text-[0.74rem] font-bold uppercase tracking-[0.1em] text-zinc-500">{job.company}</p>
                    <h3 className="m-0 text-2xl tracking-[-0.05em] text-zinc-900">{job.role}</h3>
                  </div>
                  <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">
                    <FiTrendingUp size={12} />
                    {job.period}
                  </span>
                </div>

                <ul className="m-0 grid list-none gap-2 p-0">
                  {job.responsibilities?.map((item) => (
                    <li key={item} className="relative pl-4 text-base leading-7 text-zinc-600 before:absolute before:left-0 before:text-zinc-500 before:content-['•']">
                      {item}
                    </li>
                  ))}
                </ul>

                {job.skills?.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2" aria-label={`${job.role} skills`}>
                    {job.skills.map((skill) => (
                      <span key={skill} className="inline-flex items-center justify-center rounded-full border border-black/10 bg-[#efeae0] px-3 py-1.5 text-xs font-semibold text-zinc-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
