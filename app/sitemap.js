import projects from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap() {
  const staticPages = [
    { path: "", priority: 1 },
    { path: "/resume", priority: 0.8 },
  ];

  return [
    ...staticPages.map(({ path, priority }) => ({
      url: new URL(path, siteUrl).toString(),
      changeFrequency: "monthly",
      priority,
    })),
    ...projects.map((project) => ({
      url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
