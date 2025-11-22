import { defineConfig } from "sanity";
import { schemaTypes } from "./src/lib/sanity/schemas";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-11-22",
	basePath: "/admin",
	plugins: [structureTool(), visionTool()],
	schema: {
		types: schemaTypes,
	},
});

export default config;
