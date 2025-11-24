"use client";

import Footer from "@/src/app/utils/footer/footer";
import ScrollIndicator from "@/src/app/utils/scrollIndicator/scrollIndicator";
import { BlogData } from "@/src/lib/sanity";
import { Any } from "next-sanity";
import Image from "next/image";
import { useState } from "react";

const FEATURED_IMAGE_SRC =
	"https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687";

export default function BlogDetails({
	blog,
	sidebarPosts,
}: {
	blog: BlogData;
	sidebarPosts?: BlogData[];
}) {
	const [showSidebar, setShowSidebar] = useState(false);
	sidebarPosts = [
		{
			_id: "1",
			title: "When the way forwards is backwards",
			date: "November 2025",
			content:
				"Now that the new website has been up and running for a little while I wanted to take a moment to explain why I commissioned it in the first place That's something easier said than done apparently I am on vers. My previous attempts ended in a knot of tangents and anecdotes – a suretire sign that I haven't organized my thoughts enough So I stopped writing for a week and thought about what was sitting at the core of all those rants which led me to a single I'll do my best to explain what I mean by that Let's see ii I can stay on track this time As you may or may not have noticed I am no longer on social media I haven't had a personal account for over a decade but I decided it was time to leave as an artist too I'll do my best to explain what I mean by that Let's see ii I can stay on track this time As you may or may not have noticed I am no longer on social media I haven't had a personal account for over a decade but I decided it was time to leave as an artist too.",
		},
	];

	return (
		<div className="flex flex-col items-center min-h-screen text-white font-serif ">
			<ScrollIndicator svgSrc="/rkbAssets/scrollDownIndicator.svg" />

			{/* Floating Button (Mobile Only) */}
			<button
				onClick={() => setShowSidebar(true)}
				className="lg:hidden fixed top-6 right-6 z-50 bg-[#0f0f0f90] backdrop-blur-md border border-zinc-700 text-white px-4 py-2 rounded-full text-sm tracking-wide shadow-md hover:bg-[#1a1a1a]"
			>
				Browse Posts
			</button>

			<main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-32">
				<div className="flex flex-col lg:flex-row bg-[#04070070] backdrop-blur-sm rounded-2xl p-10 ">
					{/* Desktop Sidebar */}
					<aside className="hidden lg:block w-full lg:w-1/4 lg:pr-12 border-zinc-700 lg:border-r-2 mb-12 lg:mb-0">
						<h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-6">
							Recent
						</h3>

						<ul className="space-y-6">
							{sidebarPosts?.map((blog) => (
								<li key={blog._id}>
									<a
										href={`/blog/${blog._id}`}
										className="text-lg font-light  hover:text-zinc-200 transition"
									>
										{blog.title}
									</a>
									<p className="text-xs text-zinc-500 mt-1">{blog.date}</p>
								</li>
							))}

							<li className="pt-4">
								<a
									href="/blog/archive"
									className="text-sm font-light uppercase text-zinc-400 hover:text-white transition"
								>
									See more
								</a>
							</li>
						</ul>
					</aside>

					{/* --- Main Content (Right Column) --- */}
					<div className="w-full lg:w-3/4 lg:pl-12">
						{/* Title */}
						<h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-[#cc9d68] mb-10">
							{blog.title}
						</h1>

						{/* Featured Image */}
						<div className="w-full flex justify-center mb-12">
							<div className="w-full max-w-xl rounded-xl overflow-hidden">
								<Image
									src={FEATURED_IMAGE_SRC}
									width={1600}
									height={900}
									alt={blog.title}
									className="w-full h-50 lg:h-100 object-cover"
								/>
							</div>
						</div>

						{/* Content */}
						<article className="prose prose-invert prose-xl max-w-none font-light leading-relaxed">
							<p>{blog.content?.slice(0, 600) + "..."}</p>

							<p className="mt-10">
								I&apos;ll do my best to explain what I mean by that. Let&apos;s
								see if I can stay on track this time.
							</p>

							<p>
								As you may or may not have noticed I am no longer on social
								media. I haven&apos;t had a personal account for over a decade
								but I decided it was time to leave as an artist too.
							</p>
						</article>
					</div>
					{/* Mobile Sidebar Modal */}
					{showSidebar && (
						<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex">
							{/* Sidebar Panel */}
							<div className="w-72 bg-[#111] h-full p-8 border-r border-zinc-800 overflow-y-auto">
								<div className="flex justify-between items-center mb-8">
									<h3 className="text-sm uppercase tracking-widest text-zinc-400">
										Recent
									</h3>
									<button
										onClick={() => setShowSidebar(false)}
										className="text-zinc-400 hover:text-white text-xl"
									>
										✕
									</button>
								</div>

								<ul className="space-y-6">
									{sidebarPosts?.map((blog) => (
										<li key={blog._id}>
											<a
												href={`/blog/${blog._id}`}
												className="text-lg font-light hover:text-zinc-200 transition"
												onClick={() => setShowSidebar(false)}
											>
												{blog.title}
											</a>
											<p className="text-xs text-zinc-500 mt-1">{blog.date}</p>
										</li>
									))}

									<li className="pt-4">
										<a
											href="/blog/archive"
											className="text-sm font-light uppercase text-zinc-400 hover:text-white transition"
											onClick={() => setShowSidebar(false)}
										>
											See more
										</a>
									</li>
								</ul>
							</div>

							{/* Click outside closes modal */}
							<div
								className="flex-1"
								onClick={() => setShowSidebar(false)}
							/>
						</div>
					)}
				</div>
			</main>

			<Footer footerColor="black" />
		</div>
	);
}
