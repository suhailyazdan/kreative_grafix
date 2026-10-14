import CaseStudyLayout from "@/components/CaseStudyLayout";
import projects from "@/data/projects";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found", robots: { index: false, follow: false } };
  }

  const title = `${project.title} — ${project.category}`;
  const description = `${project.summary} Project by Suhail Yazdan, UI/UX Designer and Front-End Developer.`.slice(0, 160);
  const canonical = `/projects/${project.slug}`;
  const image = { url: project.image, alt: project.imageAlt || `${project.title} project preview` };

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, type: "article", url: canonical, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <main className="container"><p>Project not found.</p></main>;
  }

  return <CaseStudyLayout project={project} />;
}
