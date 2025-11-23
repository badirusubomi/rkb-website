"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "../utils/modal/modal";
import Footer from "../utils/footer/footer";
import { useState } from "react";
import ScrollIndicator from "../utils/scrollIndicator/scrollIndicator";

export default function Portfolio() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [currentPictures, setCurrentPictures] = useState<
		{ id: number; url: string }[]
	>([]);

	const handleClose = () => {
		setModalOpen(false);
		setCurrentPictures([]);
	};

	const openModalWith = (pictures: { id: number; url: string }[]) => {
		setCurrentPictures(pictures);
		setModalOpen(true);
	};
	const eventPictures = [
		{
			id: 1,
			url: "https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
		},
		{
			id: 2,
			url: "https://images.unsplash.com/photo-1506787497326-c2736dde1bef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=692",
		},
		{
			id: 3,
			url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
		},
	];

	const productPictures = [
		{
			id: 1,
			url: "https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
		},
		{
			id: 2,
			url: "https://images.unsplash.com/photo-1506787497326-c2736dde1bef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=692",
		},
		{
			id: 3,
			url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
		},
	];

	const personalPictures = [
		{
			id: 1,
			url: "https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
		},
		{
			id: 2,
			url: "https://images.unsplash.com/photo-1506787497326-c2736dde1bef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=692",
		},
		{
			id: 3,
			url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
		},
	];

	const headShots = [
		{
			id: 1,
			url: "https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
		},
		{
			id: 2,
			url: "https://images.unsplash.com/photo-1506787497326-c2736dde1bef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=692",
		},
		{
			id: 3,
			url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
		},
	];

	const positions = [
		"sm:top-0 sm:left-10 top-0 left-4",
		"sm:top-5 sm:left-5 top-2 left-2",
		"sm:top-10 sm:left-0 top-4 left-0",
	];

	return (
		<div className="flex flex-col items-center justify-center min-h-screen snap-y snap-mandatory">
			<ScrollIndicator svgSrc="/rkbAssets/scrollDownIndicator.svg" />
			{/* Events Section */}
			<section
				id="events"
				className="relative flex items-center justify-center w-full h-[95vh] px-4 sm:px-8 gap-8"
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="overlap-container flex-col-reverse sm:flex-row"
				>
					{/* text */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: -40 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="max-w-lg w-[90vw] sm:max-w-lg text-[#cc9d68] space-y-8"
					>
						<motion.h1 className="text-base sm:text-lg md:text-2xl font-light leading-snug">
							<q>
								Where ideas turn into milestones and every handshake tells a
								story
							</q>
						</motion.h1>

						{/* button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							viewport={{ once: true }}
							className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2a3322] text-[#cc9d68] rounded-lg text-xs sm:text-sm md:text-base hover:bg-[#36402b] transition cursor-pointer"
						>
							Book your events here
						</motion.button>
					</motion.div>

					{/* images container */}
					<div className="relative w-[95vw] sm:w-screen md:w-[70vw] lg:w-[700px] h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[450px]">
						{/* images */}
						{eventPictures.map((pic, index) => (
							<motion.div
								key={pic.id}
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: index * 0.3 }}
								viewport={{ once: true }}
								className={`block ${positions[index % positions.length]}`}
							>
								<Image
									src={pic.url}
									alt={`Event picture ${index + 1}`}
									fill
									className="object-contain sm:object-cover rounded-xl shadow-lg cursor-pointer"
									onClick={() => openModalWith(eventPictures)}
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			{/* Products Section */}
			<section
				id="products"
				className="relative flex items-center justify-center w-full h-[95vh] px-4 sm:px-8 gap-8"
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="overlap-container flex-col sm:flex-row"
				>
					{/* images container */}
					<div className="relative w-[95vw] sm:w-screen md:w-[70vw] lg:w-[700px] h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[450px]">
						{/* images */}
						{productPictures.map((pic, index) => (
							<motion.div
								key={pic.id}
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: index * 0.3 }}
								viewport={{ once: true }}
								className={`block ${positions[index % positions.length]}`}
							>
								<Image
									src={pic.url}
									alt={`Product picture ${index + 1}`}
									fill
									className="object-contain sm:object-cover rounded-xl shadow-lg cursor-pointer"
									onClick={() => openModalWith(productPictures)}
								/>
							</motion.div>
						))}
					</div>
					{/* text */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: -40 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="max-w-lg w-[90vw] sm:max-w-lg text-[#cc9d68] space-y-8"
					>
						<motion.h1 className="text-base sm:text-lg md:text-2xl font-light leading-snug">
							<q>
								Objects reimagined — crafted with light to speak louder than
								words
							</q>
						</motion.h1>

						{/* button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							viewport={{ once: true }}
							className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2a3322] text-[#cc9d68] rounded-lg text-xs sm:text-sm md:text-base hover:bg-[#36402b] transition cursor-pointer"
						>
							Book product photography here
						</motion.button>
					</motion.div>
				</motion.div>
			</section>

			{/* Personal Section */}
			<section
				id="personal"
				className="relative flex items-center justify-center w-full h-[95vh] px-4 sm:px-8 gap-8"
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="overlap-container flex-col-reverse sm:flex-row"
				>
					{/* text */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: -40 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="max-w-lg w-[90vw] sm:max-w-lg text-[#cc9d68] space-y-8"
					>
						<motion.h1 className="text-base sm:text-lg md:text-2xl font-light leading-snug">
							<q>A moment of expression where personality becomes art</q>
						</motion.h1>

						{/* button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							viewport={{ once: true }}
							className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2a3322] text-[#cc9d68] rounded-lg text-xs sm:text-sm md:text-base hover:bg-[#36402b] transition cursor-pointer"
						>
							Book your personal photoshoots here
						</motion.button>
					</motion.div>

					{/* images container */}
					<div className="relative w-[95vw] sm:w-screen md:w-[70vw] lg:w-[700px] h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[450px]">
						{/* images */}
						{personalPictures.map((pic, index) => (
							<motion.div
								key={pic.id}
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: index * 0.3 }}
								viewport={{ once: true }}
								className={`block ${positions[index % positions.length]}`}
							>
								<Image
									src={pic.url}
									alt={`Personal picture ${index + 1}`}
									fill
									className="object-contain sm:object-cover rounded-xl shadow-lg cursor-pointer"
									onClick={() => openModalWith(personalPictures)}
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			{/* Products Section */}
			<section
				id="products"
				className="relative flex items-center justify-center w-full h-[95vh] px-4 sm:px-8 gap-8"
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="overlap-container flex-col sm:flex-row"
				>
					{/* images container */}
					<div className="relative w-[95vw] sm:w-screen md:w-[70vw] lg:w-[700px] h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[450px]">
						{/* images */}
						{productPictures.map((pic, index) => (
							<motion.div
								key={pic.id}
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: index * 0.3 }}
								viewport={{ once: true }}
								className={`block ${positions[index % positions.length]}`}
							>
								<Image
									src={pic.url}
									alt={`Product picture ${index + 1}`}
									fill
									className="object-contain sm:object-cover rounded-xl shadow-lg cursor-pointer"
									onClick={() => openModalWith(productPictures)}
								/>
							</motion.div>
						))}
					</div>
					{/* text */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: -40 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="max-w-lg w-[90vw] sm:max-w-lg text-[#cc9d68] space-y-8"
					>
						<motion.h1 className="text-base sm:text-lg md:text-2xl font-light leading-snug">
							<q>
								Objects reimagined — crafted with light to speak louder than
								words
							</q>
						</motion.h1>

						{/* button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							viewport={{ once: true }}
							className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2a3322] text-[#cc9d68] rounded-lg text-xs sm:text-sm md:text-base hover:bg-[#36402b] transition cursor-pointer"
						>
							Book product photography here
						</motion.button>
					</motion.div>
				</motion.div>
			</section>

			{/* HeadShots Section */}
			<section
				id="headShots"
				className="relative flex items-center justify-center w-full h-[95vh] px-4 sm:px-8 gap-8"
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="overlap-container flex-col-reverse sm:flex-row"
				>
					{/* text */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: -40 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="max-w-lg w-[90vw] sm:max-w-lg text-[#cc9d68] space-y-8"
					>
						<motion.h1 className="text-base sm:text-lg md:text-2xl font-light leading-snug">
							<q>
								Confidence&#x2C; presence&#x2C; professionalism captured in a
								single frame
							</q>
						</motion.h1>

						{/* button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							viewport={{ once: true }}
							className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2a3322] text-[#cc9d68] rounded-lg text-xs sm:text-sm md:text-base hover:bg-[#36402b] transition cursor-pointer"
						>
							Book your head shots here
						</motion.button>
					</motion.div>

					{/* images container */}
					<div className="relative w-[95vw] sm:w-screen md:w-[70vw] lg:w-[700px] h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[450px]">
						{/* images */}
						{headShots.map((pic, index) => (
							<motion.div
								key={pic.id}
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: index * 0.3 }}
								viewport={{ once: true }}
								className={`block ${positions[index % positions.length]}`}
							>
								<Image
									src={pic.url}
									alt={`Head shot ${index + 1}`}
									fill
									className="object-contain sm:object-cover rounded-xl shadow-lg cursor-pointer"
									onClick={() => openModalWith(headShots)}
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			<Modal isOpen={isModalOpen} onClose={handleClose} pictures={currentPictures} />

			<Footer footerColor="black" />
		</div>
	);
}
