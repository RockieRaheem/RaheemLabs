import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getPublishedProjects } from "@/content/projects";
export default function sitemap():MetadataRoute.Sitemap{const routes=["","/work","/ethos","/hobbies","/journey","/contact"];return[...routes.map(route=>({url:`${siteConfig.url}${route}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:route===""?1:.8})),...getPublishedProjects().map(project=>({url:`${siteConfig.url}/work/${project.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.7}))]}
