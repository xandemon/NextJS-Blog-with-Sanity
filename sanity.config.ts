import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "SANDESH_BLOG_STUDIO",
  title: "SANDESH BLOG STUDIO",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
});
