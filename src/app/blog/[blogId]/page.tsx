// pages/[eventId].js
// import { fetchEventById } from
import BlogDetails from "@/src/components/ui/BlogDetails";
import { fetchBlogbyId, fetchSideBlogs } from "@/src/lib/sanity";
import { notFound } from "next/navigation";

export default async function BlogPage(props: {
	params: Promise<{ blogId: string }>;
}) {
	const { blogId } = await props.params;

	const blog = await fetchBlogbyId(blogId);
	const sidebarPosts = await fetchSideBlogs(blogId);

	if (!blog) {
		notFound();
	}
	return (
		<BlogDetails
			blog={blog}
			sidebarPosts={
				Array.isArray(sidebarPosts)
					? sidebarPosts
					: sidebarPosts
						? [sidebarPosts]
						: []
			}
		/>
	);
}
