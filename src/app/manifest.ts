import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Santuário",
    description: site.description,
    lang: "pt-BR",
    start_url: "/",
    display: "browser",
    background_color: "#f8f3e9",
    theme_color: "#651e27",
    icons: [{ src: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
  };
}
