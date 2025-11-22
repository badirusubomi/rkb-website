import { fetchBlogs } from "@/src/lib/sanity";
import { Any } from "next-sanity";

export default async function Event() {
	const blogs = await fetchBlogs();

	return (
		<div className="font-mono grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<h3>Current Events</h3>
			<ul className="flex flex-col align-middle justify-center gap-y-4">
				{blogs?.map((blog: Any) => (
					<li
						className="hover:underline"
						key={blog._id}
					>
						<a
							href={`/blog/${blog._id}`}
							className="text-white text-2xl font-light hover:underline"
						>
							<h2 className="text-xl font-semibold">{blog.title}</h2>

							<p className="text-white text-sm">
								{blog.content?.length > 100
									? blog.content.slice(0, 100) + ". . ."
									: blog.content}
							</p>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
