import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getPublishedProjects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/raheemlabs", "/about", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
  const projects = getPublishedProjects().map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...routes, ...projects];
}
