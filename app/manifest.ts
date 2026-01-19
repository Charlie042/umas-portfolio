import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Umas Portfolio",
    short_name: "Umas",
    description: "I love to code and build things.",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
