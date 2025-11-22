"use client";
import config from "@/sanity.config";
// import { Studio } from "sanity";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage() {
	return (
		<>
			<div className="h-full min-h-screen">
				<NextStudio config={config} />
			</div>
		</>
	);
}
