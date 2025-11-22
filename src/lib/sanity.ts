import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-11-22",
	useCdn: true,
	token: process.env.SANITY_API_KEY_READ_ONLY || undefined,
});

export const serverClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-11-22",
	useCdn: false,
	token: process.env.SANITY_API_KEY_READ_WRITE || undefined,
});

export interface BlogData {
	_id: string;
	title: string;
	date?: string;
	content?: string;
}

// Fetch Functions
export async function fetchBlogbyId(id: string): Promise<BlogData | null> {
	const query = `*[_type == "blog" && _id == $id][0]{
    _id,
    title,
    date,
	content
  }`;
	return client.fetch(query, { id });
}

export async function fetchBlogs(): Promise<BlogData[] | null> {
	const BLOG_QUERY = `*[
        _type == "blog"
      ]{_id, title, date}`;

	const options = { next: { revalidate: 30 } };

	return client.fetch(BLOG_QUERY, {}, options);
}
