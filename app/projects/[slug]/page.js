import CaseStudyLayout from "@/components/CaseStudyLayout";
import projects from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return <main className="container"><p>Project not found.</p></main>;
  }

  return <CaseStudyLayout project={project} />;
}
