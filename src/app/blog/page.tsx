// "use client";
import { fetchBlogs } from "@/src/lib/sanity";
// import { motion } from "motion/react";
import { Any } from "next-sanity";
import Footer from "../utils/footer/footer";
import ScrollIndicator from "../utils/scrollIndicator/scrollIndicator";

export default async function Blog() {
	const blogs = await fetchBlogs();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen snap-y snap-mandatory">
			<ScrollIndicator svgSrc="/rkbAssets/scrollDownIndicator.svg" />
			<div
				// initial={{ opacity: 0, y: 50 }}
				// whileInView={{ opacity: 1, y: 0 }}
				// transition={{ duration: 2 }}
				// viewport={{ once: true }}
				className="blog-container w-screen h-screen flex flex-col align-middle justify-center"
			>
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

			<Footer footerColor="black" />
		</div>
	);
}
// return (
// 	<div className="font-mono grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
// 		<h3>Current Events</h3>
// 		<ul className="flex flex-col align-middle justify-center gap-y-4">
// 			{blogs?.map((blog: Any) => (
// 				<li
// 					className="hover:underline"
// 					key={blog._id}
// 				>
// 					<a
// 						href={`/blog/${blog._id}`}
// 						className="text-white text-2xl font-light hover:underline"
// 					>
// 						<h2 className="text-xl font-semibold">{blog.title}</h2>

// 						<p className="text-white text-sm">
// 							{blog.content?.length > 100
// 								? blog.content.slice(0, 100) + ". . ."
// 								: blog.content}
// 						</p>
// 					</a>
// 				</li>
// 			))}
// 		</ul>
// 	</div>
// );
// }
