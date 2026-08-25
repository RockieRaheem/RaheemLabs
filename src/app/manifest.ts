import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kamwanga Rahiim — RaheemLabs",
    short_name: "RaheemLabs",
    description: "Built in the Lab. Forged in the Ring.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c0b",
    theme_color: "#ee6b2f",
  };
}

