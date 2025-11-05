"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "../utils/modal/modal";
import Footer from "../utils/footer/footer";
import { useState } from "react";

export default function Portfolio() {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleClose = () => {
		setModalOpen(false);
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

	const positions = ["top-0 left-20", "top-10 left-10", "top-20 left-0"];

	return (
		<div className="flex flex-col items-center justify-center min-h-screen snap-y snap-mandatory">
			{/* Events Section */}
			<section
				id="events"
				className="relative flex items-center justify-center w-full h-screen px-8 gap-16"
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="overlap-container gap-2"
				>
					{/* text */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: -40 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="max-w-lg text-[#cc9d68] space-y-8"
					>
						<motion.h1 className="text-4xl font-light leading-snug">
							<q>
								Where ideas turn into milestones and every handshake tells a
								story
							</q>
						</motion.h1>

						{/* button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							viewport={{ once: true }}
							className="px-6 py-3 bg-[#2a3322] text-[#cc9d68] rounded-lg text-lg hover:bg-[#36402b] transition cursor-pointer"
						>
							Book your events here
						</motion.button>
					</motion.div>

					{/* images container */}
					<div className="relative w-[750px] h-[500px] sm:w-[800px] sm:h-[550px] lg:w-[900px] lg:h-[600px]">
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
									className="object-cover rounded-xl shadow-lg cursor-pointer"
									onClick={() => setModalOpen(true)}
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			{/* Products Section */}
			<section
				id="products"
				className="relative flex items-center justify-center w-full h-screen px-8 gap-16"
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="overlap-container gap-2"
				>
					{/* images container */}
					<div className="relative w-[750px] h-[500px] sm:w-[800px] sm:h-[550px] lg:w-[900px] lg:h-[600px]">
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
									className="object-cover rounded-xl shadow-lg cursor-pointer"
									onClick={() => setModalOpen(true)}
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
						className="max-w-lg text-[#cc9d68] space-y-8"
					>
						<motion.h1 className="text-4xl font-light leading-snug">
							<q>
								Objects reimagined — crafted with light to speak louder than
								words
							</q>
						</motion.h1>

						{/* button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							viewport={{ once: true }}
							className="px-6 py-3 bg-[#2a3322] text-[#cc9d68] rounded-lg text-lg hover:bg-[#36402b] transition cursor-pointer"
						>
							Book product photography here
						</motion.button>
					</motion.div>
				</motion.div>
			</section>

			{/* Personal Section */}
			<section
				id="personal"
				className="relative flex items-center justify-center w-full h-screen px-8 gap-16"
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="overlap-container gap-2"
				>
					{/* text */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: -40 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="max-w-lg text-[#cc9d68] space-y-8"
					>
						<motion.h1 className="text-4xl font-light leading-snug">
							<q>A moment of expression where personality becomes art</q>
						</motion.h1>

						{/* button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							viewport={{ once: true }}
							className="px-6 py-3 bg-[#2a3322] text-[#cc9d68] rounded-lg text-lg hover:bg-[#36402b] transition cursor-pointer"
						>
							Book your personal photoshoots here
						</motion.button>
					</motion.div>

					{/* images container */}
					<div className="relative w-[750px] h-[500px] sm:w-[800px] sm:h-[550px] lg:w-[900px] lg:h-[600px]">
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
									className="object-cover rounded-xl shadow-lg cursor-pointer"
									onClick={() => setModalOpen(true)}
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			{/* Products Section */}
			<section
				id="products"
				className="relative flex items-center justify-center w-full h-screen px-8 gap-16"
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="overlap-container gap-2"
				>
					{/* images container */}
					<div className="relative w-[750px] h-[500px] sm:w-[800px] sm:h-[550px] lg:w-[900px] lg:h-[600px]">
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
									className="object-cover rounded-xl shadow-lg cursor-pointer"
									onClick={() => setModalOpen(true)}
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
						className="max-w-lg text-[#cc9d68] space-y-8"
					>
						<motion.h1 className="text-4xl font-light leading-snug">
							<q>
								Objects reimagined — crafted with light to speak louder than
								words
							</q>
						</motion.h1>

						{/* button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							viewport={{ once: true }}
							className="px-6 py-3 bg-[#2a3322] text-[#cc9d68] rounded-lg text-lg hover:bg-[#36402b] transition cursor-pointer"
						>
							Book product photography here
						</motion.button>
					</motion.div>
				</motion.div>
			</section>

			{/* HeadShots Section */}
			<section
				id="headShots"
				className="relative flex items-center justify-center w-full h-screen px-8 gap-16"
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="overlap-container gap-2"
				>
					{/* text */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: -40 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="max-w-lg text-[#cc9d68] space-y-8"
					>
						<motion.h1 className="text-4xl font-light leading-snug">
							<q>
								Confidence&#x2C; presence&#x2C; professionalism captured in a
								single frame
							</q>
						</motion.h1>

						{/* button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							viewport={{ once: true }}
							className="px-6 py-3 bg-[#2a3322] text-[#cc9d68] rounded-lg text-lg hover:bg-[#36402b] transition cursor-pointer"
						>
							Book your head shots here
						</motion.button>
					</motion.div>

					{/* images container */}
					<div className="relative w-[750px] h-[500px] sm:w-[800px] sm:h-[550px] lg:w-[900px] lg:h-[600px]">
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
									className="object-cover rounded-xl shadow-lg cursor-pointer"
									onClick={() => setModalOpen(true)}
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			<Modal
				isOpen={isModalOpen}
				onClose={handleClose}
				pictures={eventPictures}
			/>
			<Modal
				isOpen={isModalOpen}
				onClose={handleClose}
				pictures={productPictures}
			/>
			<Modal
				isOpen={isModalOpen}
				onClose={handleClose}
				pictures={personalPictures}
			/>
			<Modal
				isOpen={isModalOpen}
				onClose={handleClose}
				pictures={headShots}
			/>

			<Footer footerColor="black" />
		</div>
	);
}
