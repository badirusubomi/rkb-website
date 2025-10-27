import { defineConfig } from "sanity";
import { schemaTypes } from "./src/lib/sanity/schemas";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
	projectId: "9i8hmeti", //change

	name: "default",

	dataset: "production",

	title: "games-night-website", //change

	apiVersion: "2025-08-07", //change

	basePath: "/admin",

	token: process.env.SANITY_API_KEY,

	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});

export default config;
