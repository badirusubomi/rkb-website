"use client";

import Footer from "@/src/app/utils/footer/footer";
import ScrollIndicator from "@/src/app/utils/scrollIndicator/scrollIndicator";
import { BlogData } from "@/src/lib/sanity";
import { Any } from "next-sanity";
import Image from "next/image";

const FEATURED_IMAGE_SRC =
	"https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687";

export default function BlogDetails({
	blog,
	sidebarPosts,
}: {
	blog: BlogData;
	sidebarPosts?: BlogData[];
}) {
	sidebarPosts = [
		{
			_id: "1",
			title: "When the way forwards is backwards",
			date: "November 2025",
			content:
				"Now that the new website has been up and running for a little while I wanted to take a moment to explain why I commissioned it in the first place That's something easier said than done apparently I am on vers. My previous attempts ended in a knot of tangents and anecdotes – a suretire sign that I haven't organized my thoughts enough So I stopped writing for a week and thought about what was sitting at the core of all those rants which led me to a single I'll do my best to explain what I mean by that Let's see ii I can stay on track this time As you may or may not have noticed I am no longer on social media I haven't had a personal account for over a decade but I decided it was time to leave as an artist too I'll do my best to explain what I mean by that Let's see ii I can stay on track this time As you may or may not have noticed I am no longer on social media I haven't had a personal account for over a decade but I decided it was time to leave as an artist too.",
		},
		{
			_id: "2",
			title: "Recent Blog Post",
			date: "November Blog Post",
			content: "Snippet for a recent post.",
		},
		{
			_id: "3",
			title: "Older Post 1",
			date: "October Blog Post",
			content: "Snippet for October post.",
		},
		{
			_id: "4",
			title: "Older Post 2",
			date: "September Blog Post",
			content: "Snippet for September post.",
		},
	];

	return (
		<div className="flex flex-col items-center min-h-screen text-white font-serif ">
			<ScrollIndicator svgSrc="/rkbAssets/scrollDownIndicator.svg" />

			<main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
				<div className="flex flex-row bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
					{/* --- Sidebar (Left Column) --- */}
					<aside className="w-1/4 pr-10 border-r border-zinc-700 hidden lg:block">
						<h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-6">
							Recent
						</h3>
						<ul className="space-y-4">
							{sidebarPosts?.map((blog: Any) => (
								<li key={blog._id}>
									<a
										href={`/blog/${blog._id}`}
										className="text-lg font-light hover:text-zinc-300 transition duration-150 block"
									>
										{blog.title}
									</a>
									<p className="text-xs text-zinc-500 mt-0.5">{blog.date}</p>
								</li>
							))}
							<li>
								<a
									href="/blog/archive"
									className="text-sm font-light uppercase text-zinc-400 mt-8 block hover:text-white transition duration-150"
								>
									See More
								</a>
							</li>
						</ul>
					</aside>

					{/* --- Main Content (Right Column) --- */}
					<div className="w-full lg:w-3/4 lg:pl-10">
						{/* Title and Image */}
						<div className="mb-10">
							<h1 className="text-6xl sm:text-7xl lg:text-8xl font-light leading-none mb-8 text-amber-500">
								{blog.title}
							</h1>
							<div className="w-full h-80 overflow-hidden relative">
								<Image
									src={FEATURED_IMAGE_SRC}
									width={300}
									height={200}
									alt="Agave fields and barrels"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						{/* Post Content */}
						<article className="prose prose-invert max-w-none text-xl font-light leading-relaxed">
							<p className="mb-6">{blog.content?.slice(0, 500) + "..."}</p>

							{/* Example continuation of the content */}
							<p className="mt-8">
								I&apos;ll do my best to explain what I mean by that. Let&apos;s
								see if I can stay on track this time.
							</p>
							<p>
								As you may or may not have noticed I am no longer on social
								media. I haven&apos;t had a personal account for over a decade
								but I decided it was time to leave as an artist too.
							</p>
							{/* You would replace the placeholder text above with more of featuredPost.content */}
						</article>
					</div>
				</div>
			</main>

			<Footer footerColor="black" />
		</div>
	);
}
