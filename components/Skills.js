import Image from "next/image";

const skillImages = {
  "UI/UX Design": "/Skill-01-UI%20UX%20Design.png",
  "Design Tools": "/Skill-02-Design%20Tools.png",
  "Front-End Development": "/Skill-03-Front%20End%20Development.png",
  "Other Technologies": "/Skill-04-Other%20Technologies.png",
  "AI-Assisted Design & Development":
    "/Skill-05-AI-Assisted%20Design%20Development.png",
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
            const image = skillImages[group.category];

            return (
              <div
                key={group.category}
                className="group min-h-full rounded-[1.5rem] border border-black/10 bg-white/60 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(99,102,241,0.08)]"
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={image || skillImages["Other Technologies"]}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
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
