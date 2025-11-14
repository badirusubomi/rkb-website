"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../utils/footer/footer";
import { LayoutGrid } from "@/src/components/ui/layout-grid";
import { useState } from "react";
import { InfiniteMovingCards } from "@/src/components/ui/infinite-moving-cards";
import ScrollIndicator from "../utils/scrollIndicator/scrollIndicator";

const SkeletonOne = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">
				House in the woods
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				A serene and tranquil retreat, this house in the woods offers a peaceful
				escape from the hustle and bustle of city life.
			</p>
		</div>
	);
};

export default function Home() {
	const imgUrlFront =
		"https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687";
	const imgUrlBack =
		"https://images.unsplash.com/photo-1506787497326-c2736dde1bef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=692";

	const portfolioImages = [
		{
			id: 1,
			content: <SkeletonOne />,
			className: "md:col-span-2",
			thumbnail:
				"https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			content: <SkeletonOne />,
			className: "col-span-1",
			thumbnail:
				"https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 3,
			content: <SkeletonOne />,
			className: "col-span-1",
			thumbnail:
				"https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 4,
			content: <SkeletonOne />,
			className: "md:col-span-2",
			thumbnail:
				"https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];
	const testimonials = [
		{
			quote:
				"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
			name: "Charles Dickens",
			title: "A Tale of Two Cities",
		},
		{
			quote:
				"To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
			name: "William Shakespeare",
			title: "Hamlet",
		},
		{
			quote: "All that we see or seem is but a dream within a dream.",
			name: "Edgar Allan Poe",
			title: "A Dream Within a Dream",
		},
		{
			quote:
				"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
			name: "Jane Austen",
			title: "Pride and Prejudice",
		},
		{
			quote:
				"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
			name: "Herman Melville",
			title: "Moby-Dick",
		},
	];

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert("Form submitted!");
	};

	return (
		<main className="flex m-0 p-0 min-h-screen sm:flex-col items-center w-full flex-col justify-center overflow-hidden">
			{/* Scroll Indicator */}
			<ScrollIndicator svgSrc="/rkbAssets/scrollDownIndicator.svg" />

			{/* hero section */}
			<section className="w-dvw h-screen flex justify-center items-center">
				<div className="flex flex-col md:flex-row w-[95vw] h-[95vh] rounded-xl px-20 py-10 my-0 lg:px-10 mx-0 justify-around gap-2 md:gap-30 items-center bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 2 }}
						className="relative flex flex-col  gap-5"
					>
						{/* images */}
						<motion.div
							className="absolute top-10 left-10 w-[280px] h-[420px] rounded-3xl overflow-hidden opacity-80 border-white border-4 border-b-50 bg-white"
							whileHover={{ scale: 1.02 }}
						>
							<Image
								src={imgUrlBack}
								alt="Background image"
								fill
								className="object-cover rounded-3xl fill-white"
							/>
						</motion.div>

						<motion.div
							className="relative z-10 w-[280px] h-[420px] rounded-3xl overflow-hidden shadow-lg border-white bg-white border-4 border-b-50"
							whileHover={{ scale: 1.05 }}
						>
							<Image
								src={imgUrlFront}
								alt="Foreground image"
								fill
								className="object-cover rounded-3xl "
							/>
						</motion.div>
					</motion.div>

					{/* text */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { staggerChildren: 0.7, duration: 1 },
							},
						}}
						className="flex text-[20px] md:text-xl flex-col w-max max-w-lg gap-2 md:gap-20 text-white text-3xl lg:text-4xl"
					>
						<motion.h1
							variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
						>
							Photography that elevates your brand
						</motion.h1>
						<motion.h1
							variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
							className="text-center"
						>
							crafted to reflect the values behind your business
						</motion.h1>
						<motion.h1
							variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
							className="text-end"
						>
							Let us tell your story
						</motion.h1>
					</motion.div>
				</div>
			</section>

			{/* portfolio section */}
			<section className=" w-dvw h-screen flex justify-center items-center">
				<div className="flex flex-col items-center justify-center w-[95vw] h-[95vh] rounded-xl px-20 py-10 lg:px-10 gap-2 bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-xl lg:text-4xl font-light text-center text-white mb-5"
					>
						A glimpse into stories told through light
					</motion.h1>

					{/* Image Grid */}
					{/* <motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.3, duration: 3 }}
						className="grid  grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[50dvw] rounded-4xl h-[70vh] px-5 bg-white py-10"
					>
						<div className="col-span-2 row-span-2 w-full h-full rounded-xl overflow-hidden">
							<Image
								src={portFolioImages[0]}
								alt="Portfolio image"
								width={300}
								height={200}
								className="object-cover w-full h-full rounded-xl"
							/>
						</div>

						<div className="flex flex-col gap-4 w-full h-full">
							<div className="flex gap-4 h-1/2">
								<Image
									src={portFolioImages[1]}
									alt="Portfolio small"
									width={150}
									height={100}
									className="object-cover w-full h-full rounded-xl"
								/>
								<Image
									src={portFolioImages[2]}
									alt="Portfolio small"
									width={150}
									height={100}
									className="object-cover w-full h-full rounded-xl"
								/>
							</div>
							<div className="h-1/2">
								<Image
									src={portFolioImages[3]}
									alt="Portfolio wide"
									width={300}
									height={150}
									className="object-cover w-full h-full rounded-xl"
								/>
							</div>
						</div>
					</motion.div> */}
					<LayoutGrid cards={portfolioImages} />

					{/* See more */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-xl lg:text-4xl font-light text-right text-white mt-5"
					>
						{/* <motion.a
							href="/portfolio"
							whileHover={{ scale: 1.05 }}
							className="text-white text-lg underline underline-offset-4 mx-[10/10]"
						>
							see more
						</motion.a> */}
						<motion.a
							href="/portfolio"
							className="px-3 mt-0.5 text-sm bg-[#2F3A25] hover:bg-[#3e4d32] text-[#CC9D68] rounded-md py-2 transition-all duration-300"
						>
							see more
						</motion.a>
					</motion.h1>
				</div>
			</section>

			{/* inspiring text 1 */}
			<section className=" w-dvw h-screen flex justify-center items-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="flex w-[95vw] h-[95vh] rounded-xl px-20 py-10 my-0 lg:px-10 mx-0 justify-between gap-30 items-center bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden"
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-xl lg:text-4xl font-light text-center text-[#CC9D68] mb-5"
					>
						“Images that do more than look good They sell
						<span className="font-serif">,</span> engage
						<span className="font-serif">,</span> and leave lasting impressions”
					</motion.h1>
				</motion.div>
			</section>

			{/* blog section */}
			<section className="w-dvw h-screen flex justify-center items-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="flex w-[95vw] h-[95vh] rounded-xl px-20 py-10 my-0 lg:px-10 mx-0 justify-between gap-30 items-center bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden"
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-xl lg:text-4xl font-light text-center text-white mb-5"
					>
						Thoughts behind the lens
					</motion.h1>
				</motion.div>
			</section>

			{/* inspiring text 2 */}
			<section className="w-dvw h-screen flex justify-center items-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="flex w-[95vw] h-[95vh] rounded-xl px-20 py-10 my-0 lg:px-10 mx-0 justify-between gap-30 items-center bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden"
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-xl lg:text-4xl font-light text-center text-[#CC9D68] mb-5"
					>
						From corporate campaigns to creative launches
						<span className="font-serif">,</span> we capture your vision with
						intent<span className="font-serif">.</span>
					</motion.h1>
				</motion.div>
			</section>

			{/* testimonial section */}
			<section className="w-dvw h-screen flex justify-center items-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="flex flex-col justify-center items-center gap-20 md:flex-row w-[95vw] h-[95vh] rounded-xl px-20 py-10 my-0 lg:px-10 mx-0 bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden"
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-xl lg:text-4xl font-light text-center text-[#CC9D68] mb-5"
					>
						Echoes of trust and shared memories
					</motion.h1>
					<div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
						<InfiniteMovingCards
							items={testimonials}
							direction="right"
							speed="slow"
						/>
					</div>
				</motion.div>
			</section>

			{/* contact form section */}
			<section className="w-dvw h-screen flex justify-center items-center text-[#CC9D68]">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="flex flex-col justify-center items-center w-[95vw] h-[95vh] px-10 py-8 bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden"
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-3xl md:text-4xl font-light text-center mb-2"
					>
						Let’s begin your story together
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2 }}
						className="italic text-lg md:text-xl text-center mb-1"
					>
						“Quote from the founder here”
					</motion.p>

					<p className="text-lg md:text-xl mb-8">Rebecca</p>

					<form
						onSubmit={handleSubmit}
						className="flex flex-col w-full md:max-w-1/2 space-y-6 text-[#CC9D68]"
					>
						<div>
							<label className="mb-1 text-[#CC9D68]">Name</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="w-full text-white text-sm bg-transparent border-b border-[#CC9D68] focus:outline-none focus:border-[#A37E4B] py-2"
								required
							/>
						</div>

						<div>
							<label className="mb-1 text-[#CC9D68]">Email</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full text-white text-sm bg-transparent border-b border-[#CC9D68] focus:outline-none focus:border-[#A37E4B] py-2"
								required
							/>
						</div>

						<div>
							<label className="mb-1 text-[#CC9D68]">
								How may we help<span className="font-serif">?</span>
							</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								className="w-full resize-y text-white text-sm bg-transparent border-b border-[#CC9D68] focus:outline-none focus:border-[#A37E4B] py-2 h-20"
								required
							/>
						</div>

						<button
							type="submit"
							className="mt-0.5 bg-[#2F3A25] hover:bg-[#3e4d32] text-[#CC9D68] rounded-md py-2 transition-all duration-300"
						>
							Contact Us
						</button>
					</form>
				</motion.div>
			</section>

			{/* inspiring text 3 */}
			<section className=" w-dvw h-screen flex justify-center items-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="flex items-center justify-center w-[95vw] h-[95vh] rounded-xl px-20 py-10 my-0 lg:px-10 mx-0  gap-30 bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden"
				>
					<motion.div className="align-item-center justify-center flex flex-col items-center gap-10">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className="text-xl lg:text-4xl font-light text-center text-[#CC9D68] mb-5"
						>
							Ready to turn your brand moments into timeless visuals
							<span className="font-serif">?</span>
						</motion.h1>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className="text-xl lg:text-4xl font-light text-center text-[#CC9D68] mb-5"
						>
							Let’s collaborate to create images that move your audience
							<span className="font-serif">,</span> and your business
						</motion.h1>
						{/* <button
							type="submit"
							className="mt-0.5 bg-[#2F3A25] hover:bg-[#3e4d32] text-[#CC9D68] rounded-md py-2 transition-all duration-300"
						>
							Book with us Now
						</button> */}
						<motion.a
							href=""
							className="px-3 mt-0.5 bg-[#2F3A25] hover:bg-[#3e4d32] text-[#CC9D68] rounded-md py-2 transition-all duration-300"
						>
							Book with us Now
						</motion.a>
					</motion.div>
				</motion.div>
			</section>

			{/* collaborators section */}
			<section className="w-dvw h-screen flex justify-center items-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="flex flex-col justify-center items-center gap-20 md:flex-row w-[95vw] h-[95vh] rounded-xl px-20 py-10 my-0 lg:px-10 mx-0 bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden"
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-xl lg:text-4xl font-light text-center text-[#CC9D68] mb-5"
					>
						Our work speaks through the brands we partner with
					</motion.h1>
					<div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
						<InfiniteMovingCards
							items={testimonials}
							direction="right"
							speed="slow"
						/>
					</div>
				</motion.div>
			</section>

			{/* footer section */}
			<section>
				<div></div>
			</section>
			{/* footer section */}
			<Footer footerColor="black" />
		</main>
	);
}
