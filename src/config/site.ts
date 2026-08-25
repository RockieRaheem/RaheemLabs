const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  url: configuredUrl.replace(/\/$/, ""),
  name: "RaheemLabs",
} as const;

