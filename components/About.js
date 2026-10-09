import Image from "next/image";
import { FiAward, FiCompass, FiPenTool } from "react-icons/fi";

export default function About() {
  const stats = [
    { label: "Years experience", value: "20+", icon: FiAward },
    { label: "Design focus", value: "UX/UI", icon: FiCompass },
    { label: "Creative mix", value: "Design + Dev", icon: FiPenTool },
  ];

  return (
    <section id="about" className="pt-8 md:pt-10">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 lg:grid-cols-[0.9fr_1.6fr] lg:items-start">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-zinc-500">About</p>
            <h2 className="m-0 text-4xl leading-[1.05] tracking-[-0.06em] text-zinc-900 md:text-5xl">
              Designing thoughtful digital experiences.
            </h2>
          </div>

          <div className="grid gap-3">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/60 p-3 shadow-sm backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-200 to-orange-100 text-zinc-900">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-lg font-bold tracking-[-0.05em] text-zinc-900">{value}</div>
                  <div className="text-sm text-zinc-600">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.75rem] border border-black/10 bg-white/60 p-6 shadow-[0_18px_40px_rgba(17,17,17,0.05)] backdrop-blur-sm md:p-8">
          <div className="relative h-64 overflow-hidden rounded-[1.4rem] border border-black/5 bg-[#f4efe9] md:h-80">
            <Image
              src="/banner_suhail_yazdan.png"
              alt="Professional lifestyle portrait with confident pose"
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-3 left-3 z-10 flex h-28 w-28 items-center justify-center rounded-2xl border border-white/70 bg-white/75 p-2 shadow-lg backdrop-blur-sm md:bottom-5 md:left-5 md:h-40 md:w-40 md:p-3"
            >
              <Image
                src="/logo%20kreative%20grafix.svg"
                alt=""
                width={148}
                height={154}
                className="h-full w-full object-contain opacity-90"
              />
            </div>
          </div>

          <p className="m-0 text-base leading-8 text-zinc-600 md:text-lg">
            I bring together graphic design, web design, UI/UX, front-end
            development, and digital marketing to create work that is both
            visually strong and user-focused.
          </p>
          <p className="m-0 text-base leading-8 text-zinc-600 md:text-lg">
            With more than 20 years of experience, I combine creative direction,
            practical problem-solving, and modern front-end execution to deliver
            clear digital experiences that work for people and businesses alike.
          </p>
          <p className="m-0 text-base leading-8 text-zinc-600 md:text-lg">
            I also enjoy teaching and mentoring, helping others build confidence
            in digital skills, design thinking, and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
