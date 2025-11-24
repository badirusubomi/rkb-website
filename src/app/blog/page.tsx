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
			<div className="flex flex-col w-[70vw] h-[70vh] mt-[100px] rounded-xl py-20 lg:px-10 mx-0 justify-items-start md:gap-30 items-center bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden">
				<ul className="flex flex-col align-middle justify-center gap-y-4">
					{blogs.splice(0, 8)?.map((blog: Any) => (
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
