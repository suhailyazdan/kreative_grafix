import {
  FiCode,
  FiFigma,
  FiLayers,
  FiPenTool,
  FiStar,
} from "react-icons/fi";

const skillIcons = {
  "UI/UX Design": FiPenTool,
  "Design Tools": FiFigma,
  "Front-End Development": FiCode,
  "Other Technologies": FiLayers,
  "AI-Assisted Design & Development": FiStar,
};

export default function Skills({ items = [] }) {
  return (
    <section id="skills" className="pt-8 md:pt-10">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="grid gap-2">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-zinc-500">Skills</p>
          <h2 className="m-0 text-4xl leading-[1.05] tracking-[-0.06em] text-zinc-900 md:text-5xl">
            Core capabilities.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {items.map((group) => {
            const Icon = skillIcons[group.category] || FiLayers;

            return (
              <div
                key={group.category}
                className="group min-h-full rounded-[1.5rem] border border-black/10 bg-white/60 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(99,102,241,0.08)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-200 to-orange-100 text-zinc-900 shadow-inner">
                  <Icon size={18} />
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-[-0.04em] text-zinc-900">{group.category}</h3>
                <ul className="m-0 grid list-none gap-2 p-0">
                  {group.items.map((item) => (
                    <li key={item} className="relative pl-4 text-sm leading-6 text-zinc-600 before:absolute before:left-0 before:text-zinc-500 before:content-['•']">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
