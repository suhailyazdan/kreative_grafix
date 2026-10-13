import Link from "next/link";
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheck,
  FiCode,
  FiDownload,
  FiGlobe,
  FiLayers,
  FiMail,
  FiMapPin,
  FiPhone,
  FiZap,
} from "react-icons/fi";

export const metadata = {
  title: "Resume",
  description:
    "The experience, design practice, and education of Suhail Yazdan — UI/UX designer, developer, and mentor.",
};

const experience = [
  {
    role: "Senior Faculty — UI/UX Design & Web Development",
    company: "Arena Animations",
    location: "Bangalore",
    period: "Sep 2026 — Present",
    summary:
      "Teaching the next generation of designers and developers through practical, industry-focused learning.",
    highlights: [
      "Design and deliver courses, workshops, and hands-on training in UI/UX, web development, and graphic design.",
      "Mentor students through capstone projects, portfolios, career development, and industry certifications.",
      "Bring generative AI and AI-agent workflows into design and full-stack development education.",
    ],
  },
  {
    role: "Lead UI/UX Designer and Developer",
    company: "Naberly India Pvt. Ltd. (intelligent)",
    location: "Bangalore",
    period: "Feb 2021 — Jun 2022",
    summary:
      "Connected thoughtful product design with responsive front-end implementation.",
    highlights: [
      "Designed intuitive interfaces and user flows using Figma and Adobe XD.",
      "Built responsive websites with React, Next.js, and Tailwind CSS.",
      "Used user research and usability testing to improve design decisions.",
    ],
  },
  {
    role: "UI Designer / Interaction Designer / UI Developer",
    company: "IBM India Pvt. Ltd. (Datamatics)",
    location: "Bangalore",
    period: "Sep 2015 — Jun 2020",
    summary:
      "Shaped enterprise experiences, responsive web interfaces, and digital communications.",
    highlights: [
      "Designed enterprise application experiences and responsive websites using IBM CMS, Bootstrap, and Angular Material.",
      "Built UI layouts and landing pages with JavaScript, HTML5, and CSS.",
      "Created newsletters and visual assets with Photoshop, Illustrator, React CSS, and Sass.",
    ],
  },
  {
    role: "Interaction Designer / UI Designer",
    company: "Value Wings Enterprises",
    location: "Bangalore",
    period: "Oct 2014 — Jun 2015",
    summary:
      "Designed dashboards, interactive products, and campaign work across web and social.",
    highlights: [
      "Created wireframes, prototypes, and UI deliverables with HTML5, CSS, and Sass.",
      "Translated concepts into functional websites and digital marketing assets.",
      "Developed logos, brochures, posters, and other brand materials.",
    ],
  },
  {
    role: "Graphic Designer / Web Designer / UI Designer",
    company: "Freelance",
    location: "Bangalore",
    period: "Oct 2012 — Oct 2014",
    summary:
      "Partnered with clients from early interface concepts through implementation and launch.",
    highlights: [
      "Designed interfaces, high-fidelity wireframes, and HTML5 prototypes for web products.",
      "Advised on website UI/UX, e-commerce platforms, and WordPress customization.",
      "Created brand and campaign assets, and supported SEO and social media optimization.",
    ],
  },
  {
    role: "Web Designer & Graphic Designer",
    company: "R Square Consulting",
    location: "Bangalore",
    period: "Jul 2011 — Aug 2012",
    summary:
      "Built standards-minded web interfaces and expressive visual communication.",
    highlights: [
      "Developed front-end components, layouts, and SVG icons using HTML5, CSS, and JavaScript.",
      "Customized WordPress themes and plugins.",
      "Designed campaign and identity materials including landing pages, brochures, and logos.",
    ],
  },
  {
    role: "Flash Animator",
    company: "BFU Animations",
    location: "Lucknow",
    period: "Jul 2007 — Mar 2011",
    summary:
      "Brought character and story to animation, e-books, and interactive media.",
    highlights: [
      "Created timeline-based Flash animation for the cartoon series Uncle Hathi.",
      "Designed and animated storyboards using traditional lightbox techniques.",
      "Produced multimedia assets for e-books and interactive CDs with Flash and ActionScript 3.",
    ],
  },
  {
    role: "Graphic & Animation Faculty",
    company: "WLC College",
    location: "Lucknow",
    period: "Oct 2005 — Mar 2007",
    summary:
      "Taught graphic design, animation, and web design through project-based learning.",
    highlights: [
      "Developed learning modules, e-learning resources, and competency-based assessments.",
      "Guided students through creative problem solving, final projects, and competitions.",
      "Integrated hands-on workshops and collaborative learning into the curriculum.",
    ],
  },
  {
    role: "Graphic & Web Designer",
    company: "Axis Communications",
    location: "New Delhi",
    period: "Jul 2003 — Aug 2005",
    summary: "Designed for web and print across graphic and web design projects.",
    highlights: [],
  },
  {
    role: "Graphic Designer",
    company: "Kranti Bharat Magazine",
    location: "Lucknow",
    period: "Mar 2000 — Jul 2003",
    summary: "Created graphic design work for a print publication.",
    highlights: [],
  },
];

const skills = [
  {
    title: "AI & emerging workflows",
    icon: FiZap,
    items: [
      "Generative AI",
      "AI agents",
      "Prompt engineering",
      "AI-assisted design",
      "ChatGPT",
      "Claude",
      "Gemini",
      "GitHub Copilot",
      "Cursor",
      "Figma AI",
    ],
  },
  {
    title: "UI/UX & visual design",
    icon: FiLayers,
    items: [
      "Figma",
      "Adobe XD",
      "User research",
      "Wireframing",
      "Prototyping",
      "Design systems",
      "Accessible design",
      "Branding",
      "Photoshop",
      "Illustrator",
    ],
  },
  {
    title: "Front end & full stack",
    icon: FiCode,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "REST APIs",
    ],
  },
  {
    title: "Tools & practice",
    icon: FiGlobe,
    items: [
      "Git & GitHub",
      "Vercel",
      "Netlify",
      "Hostinger",
      "cPanel",
      "Design thinking",
      "Agile / Scrum",
      "Cross-functional collaboration",
    ],
  },
];

const education = [
  {
    qualification: "E-Designer",
    focus: "Web Design & Multimedia",
    institution: "Xansa Webcity, Lucknow",
    year: "2002",
  },
  {
    qualification: "Post-Graduate Diploma",
    focus: "Computer Applications",
    institution: "APS Academy, Lucknow",
    year: "1997",
  },
  {
    qualification: "B.Sc.",
    focus: "Physics",
    institution: "Canning College, Lucknow University",
    year: "1996",
  },
];

const portfolioLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/suhailyazdan-ui-ux-designer/"},
    { label: "Behance", href: "https://www.behance.net/suhailyazdan"},
    { label: "Coroflot", href: "https://www.coroflot.com/suhail_graphics"}
];

function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
          <span className="h-px w-7 bg-cyan-500" />
          {eyebrow}
        </p>
        <h2 className="m-0 text-3xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-4xl">
          {title}
        </h2>
      </div>
      {note ? (
        <p className="mb-0 max-w-sm text-sm leading-6 text-slate-500">{note}</p>
      ) : null}
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#eef3f8] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(103,192,224,0.16),transparent_38%),radial-gradient(ellipse_at_80%_18%,rgba(133,139,234,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-5 sm:px-6 lg:px-8">
        <header className="mb-7 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-slate-200/80 bg-white/70 px-4 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-cyan-300 hover:text-cyan-800"
          >
            <FiArrowLeft
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to home
          </Link>
          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 sm:flex">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Kreative Grafix
            <span className="text-slate-300">/</span>
            Resume
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-cyan-800"
          >
            <FiDownload aria-hidden="true" />
            <span className="hidden sm:inline">Download PDF</span>
            <span className="sm:hidden">PDF</span>
          </a>
        </header>

        <section
          aria-labelledby="resume-title"
          className="relative overflow-hidden rounded-[2rem] bg-[#101b35] text-white shadow-[0_28px_80px_rgba(20,42,77,0.2)]"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-36 h-[28rem] w-[28rem] rounded-full border border-cyan-100/10 bg-[radial-gradient(circle_at_center,rgba(59,205,223,0.23),rgba(95,113,222,0.08)_42%,transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-2/3 w-1/2 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(90deg,transparent,black)]"
          />
          <div className="relative grid gap-10 p-6 sm:p-9 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:p-12">
            <div className="flex flex-col justify-between gap-10">
              <div>
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-100/20 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                  <FiZap aria-hidden="true" />
                  Designer · Developer · Educator
                </p>
                <h1
                  id="resume-title"
                  className="max-w-3xl text-[3.2rem] font-semibold leading-[0.97] tracking-[-0.075em] sm:text-7xl"
                >
                  <span className="bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                    Suhail Yazdan.
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/75 sm:text-xl">
                  Turning curious ideas into clear, human-centered digital
                  experiences — and helping others learn how to do the same.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5 sm:max-w-lg sm:gap-6">
                {[
                  ["20+", "years creating"],
                  ["Design", "meets code"],
                  ["AI", "enabled practice"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="mb-1 text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                      {value}
                    </p>
                    <p className="mb-0 text-[0.68rem] leading-5 text-blue-100/55 sm:text-xs">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="self-end rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-md sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="mb-0 text-sm font-semibold text-white">
                  Let’s make something meaningful.
                </p>
                <FiArrowUpRight
                  aria-hidden="true"
                  className="text-cyan-200"
                  size={19}
                />
              </div>
              <div className="grid gap-3">
                <a
                  href="mailto:yazdan.suhail@gmail.com"
                  className="group flex items-center gap-3 rounded-xl bg-white/[0.06] p-3 text-sm text-blue-50 transition hover:bg-white/[0.12]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
                    <FiMail aria-hidden="true" />
                  </span>
                  <span className="min-w-0 break-all">
                    yazdan.suhail@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+917411555859"
                  className="group flex items-center gap-3 rounded-xl bg-white/[0.06] p-3 text-sm text-blue-50 transition hover:bg-white/[0.12]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-300/10 text-indigo-200">
                    <FiPhone aria-hidden="true" />
                  </span>
                  +91 74115 55859
                </a>
                <p className="mb-0 flex items-center gap-3 px-3 pt-1 text-sm text-blue-100/65">
                  <FiMapPin aria-hidden="true" className="text-cyan-200" />
                  BTM 1st, Bangalore, India
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {portfolioLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-blue-100/75 transition hover:border-cyan-200/40 hover:text-cyan-100"
                  >
                    {item.label}
                    <FiArrowUpRight aria-hidden="true" size={12} />
                  </a>
                ))}
              </div>
            </aside>
          </div>

          <nav
            aria-label="Resume sections"
            className="relative flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 px-6 py-4 text-xs font-semibold text-blue-100/60 sm:px-9 lg:px-12"
          >
            <a className="transition hover:text-white" href="#journey">
              Experience <FiArrowDown aria-hidden="true" className="ml-1 inline" />
            </a>
            <a className="transition hover:text-white" href="#expertise">
              Expertise
            </a>
            <a className="transition hover:text-white" href="#education">
              Education
            </a>
          </nav>
        </section>

        <section
          aria-labelledby="profile-title"
          className="my-7 grid gap-5 rounded-[1.75rem] border border-white/80 bg-white/75 p-6 shadow-[0_16px_45px_rgba(34,59,91,0.06)] backdrop-blur sm:grid-cols-[auto_1fr] sm:items-start sm:gap-7 sm:p-8"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-indigo-100 text-cyan-800">
            <FiAward aria-hidden="true" size={24} />
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
              A little about my practice
            </p>
            <h2
              id="profile-title"
              className="mb-3 text-2xl font-semibold tracking-[-0.05em] text-slate-950"
            >
              Design-minded. Tech-curious. People-first.
            </h2>
            <p className="mb-0 max-w-4xl leading-7 text-slate-600">
              I’m a senior faculty member, mentor, and AI-enabled UI/UX and web
              development professional. I bring design, development, and
              teaching together—from research, wireframes, and design systems
              to full-stack builds. I use emerging AI tools to explore ideas,
              prototype, create, and solve problems while keeping the human
              experience at the center.
            </p>
          </div>
        </section>

        <section id="journey" className="scroll-mt-8 py-10">
          <SectionHeading
            eyebrow="The journey"
            title="A career built across disciplines."
            note="From early graphic design to modern product experiences and mentoring, each chapter adds a new point of view."
          />

          <div className="relative grid gap-3 before:absolute before:bottom-8 before:left-[4.4rem] before:top-8 before:hidden before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-indigo-200 before:to-transparent md:gap-4 md:before:block">
            {experience.map((job, index) => (
              <article
                key={`${job.company}-${job.period}`}
                className="grid gap-3 md:grid-cols-[8.5rem_1fr] md:gap-5"
              >
                <div className="flex items-center gap-3 pt-1 md:flex-col md:items-end md:gap-2 md:pt-5 md:text-right">
                  <span className="relative z-10 hidden h-3 w-3 rounded-full border-[3px] border-[#eef3f8] bg-cyan-500 ring-1 ring-cyan-300 md:block" />
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    {job.period}
                  </span>
                </div>
                <details
                  open={index === 0}
                  className="group rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_8px_24px_rgba(34,59,91,0.04)] transition hover:border-cyan-200 hover:shadow-[0_14px_34px_rgba(34,104,135,0.08)] sm:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-start gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-indigo-50 text-cyan-800">
                      <FiBriefcase aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                        <span className="text-[0.68rem] font-bold uppercase tracking-[0.13em] text-cyan-700">
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-400 md:hidden">
                          <FiMapPin aria-hidden="true" />
                          {job.location}
                        </span>
                      </span>
                      <span className="mt-1 block text-lg font-semibold leading-snug tracking-[-0.04em] text-slate-950 sm:text-xl">
                        {job.role}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-slate-500">
                        {job.summary}
                      </span>
                    </span>
                    <span className="ml-1 mt-2 hidden text-xs font-semibold text-cyan-700 group-open:hidden sm:block">
                      Details
                    </span>
                    <span className="ml-1 mt-2 hidden text-xs font-semibold text-slate-400 group-open:sm:block">
                      Close
                    </span>
                  </summary>
                  <div className="ml-0 mt-5 border-t border-slate-100 pt-4 sm:ml-[3.75rem]">
                    {job.highlights.length > 0 ? (
                      <ul className="m-0 grid list-none gap-2.5 p-0">
                        {job.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-2.5 text-sm leading-6 text-slate-600"
                          >
                            <FiCheck
                              aria-hidden="true"
                              className="mt-1 shrink-0 text-cyan-600"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mb-0 text-sm text-slate-500">
                        {job.summary}
                      </p>
                    )}
                    <p className="mb-0 mt-4 hidden items-center gap-1.5 text-xs text-slate-400 md:flex">
                      <FiMapPin aria-hidden="true" />
                      {job.location}
                    </p>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section id="expertise" className="scroll-mt-8 py-10">
          <SectionHeading
            eyebrow="The toolkit"
            title="A wide creative + technical range."
            note="A flexible toolkit for moving from first sketch to shipped experience."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map(({ title, icon: Icon, items }, index) => (
              <article
                key={title}
                className={`rounded-[1.5rem] border p-5 sm:p-6 ${
                  index % 2 === 0
                    ? "border-cyan-100 bg-gradient-to-br from-white to-cyan-50/70"
                    : "border-indigo-100 bg-gradient-to-br from-white to-indigo-50/70"
                }`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-cyan-800 shadow-sm">
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  <h3 className="m-0 text-lg font-semibold tracking-[-0.04em] text-slate-950">
                    {title}
                  </h3>
                </div>
                <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm shadow-slate-900/[0.03]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="scroll-mt-8 py-10">
          <SectionHeading
            eyebrow="The foundation"
            title="Education & perspective."
            note="A foundation in visual craft and computer applications, carried forward into a career of building and sharing."
          />
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/85 shadow-[0_12px_34px_rgba(34,59,91,0.05)]">
            <div className="hidden grid-cols-[1fr_1fr_auto] gap-4 border-b border-slate-100 bg-slate-50/80 px-6 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400 sm:grid">
              <span>Qualification</span>
              <span>Institution</span>
              <span>Year</span>
            </div>
            {education.map((item, index) => (
              <div
                key={item.qualification}
                className={`grid gap-3 px-5 py-5 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:gap-4 sm:px-6 ${
                  index < education.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                    <FiBookOpen aria-hidden="true" />
                  </span>
                  <div>
                    <p className="mb-1 font-semibold text-slate-900">
                      {item.qualification}
                    </p>
                    <p className="mb-0 text-sm text-slate-500">{item.focus}</p>
                  </div>
                </div>
                <p className="mb-0 pl-12 text-sm text-slate-500 sm:pl-0">
                  {item.institution}
                </p>
                <span className="pl-12 text-xs font-bold uppercase tracking-[0.12em] text-cyan-700 sm:pl-0">
                  {item.year}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-cyan-100/80 bg-gradient-to-r from-cyan-50/80 via-white/80 to-indigo-50/80 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {["English", "Hindi", "Urdu"].map((language) => (
                  <span
                    key={language}
                    className="rounded-full border border-white bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-800 sm:self-auto"
            >
              <FiArrowLeft aria-hidden="true" />
              Back to Kreative Grafix
            </Link>
          </div>
        </section>

        <footer className="mt-8 flex flex-col gap-4 border-t border-slate-200/80 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-0">
            <span className="font-semibold text-slate-700">Suhail Yazdan</span>
            <span className="mx-2 text-slate-300">·</span>
            Designing with purpose, building with care.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 font-semibold text-cyan-800 transition hover:text-indigo-700"
          >
            Get the printable resume
            <FiDownload aria-hidden="true" />
          </a>
        </footer>
      </div>
    </main>
  );
}
