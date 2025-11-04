"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
	const imgUrlFront =
		"https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687";
	const imgUrlBack =
		"https://images.unsplash.com/photo-1506787497326-c2736dde1bef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=692";

	const portFolioImages = [
		"https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=500",
		"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=500",
		"https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&q=80&w=500",
		"https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&q=80&w=500",
	];
	return (
		<main className="flex m-0 p-0 min-h-screen items-center w-full flex-col justify-center overflow-hidden">
			{/* hero section */}
			<section className=" w-dvw h-screen flex justify-center items-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="flex w-[95vw] h-[95vh] rounded-xl px-20 py-10 my-0 lg:px-10 mx-0 justify-between gap-30 items-center bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden"
				>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 2 }}
						className="relative flex flex-col gap-5"
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
						className="flex flex-col w-max max-w-lg gap-20 text-white text-3xl lg:text-4xl"
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
				</motion.div>
			</section>

			{/* portfolio section */}
			<section className=" w-dvw h-screen flex justify-center items-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="flex flex-col items-center justify-center w-[95vw] h-[95vh] rounded-xl px-20 py-10 lg:px-10 gap-2 bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden"
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-xl lg:text-4xl font-light text-center text-white mb-5"
					>
						A glimpse into stories told through light
					</motion.h1>

					{/* Image Grid */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.3, duration: 3 }}
						className="grid  grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[50dvw] rounded-4xl h-[70vh] px-5 bg-white py-10"
					>
						{/* Large image */}
						<div className="col-span-2 row-span-2 w-full h-full rounded-xl overflow-hidden">
							<Image
								src={portFolioImages[0]}
								alt="Portfolio image"
								width={300}
								height={200}
								className="object-cover w-full h-full rounded-xl"
							/>
						</div>

						{/* Smaller stacked images */}
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
					</motion.div>

					{/* See more */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-xl lg:text-4xl font-light text-right text-white mt-5"
					>
						<motion.a
							href="/portfolio"
							whileHover={{ scale: 1.05 }}
							className="text-white text-lg underline underline-offset-4 mx-[10/10]"
						>
							see more
						</motion.a>
					</motion.h1>
				</motion.div>
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
						className="text-xl lg:text-4xl font-light text-center text-white mb-5"
					>
						A glimpse into stories told through light
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
						A glimpse into stories told through light
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
						className="text-xl lg:text-4xl font-light text-center text-white mb-5"
					>
						A glimpse into stories told through light
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
					className="flex w-[95vw] h-[95vh] rounded-xl px-20 py-10 my-0 lg:px-10 mx-0 justify-between gap-30 items-center bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden"
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-xl lg:text-4xl font-light text-center text-white mb-5"
					>
						Testimonial Section
					</motion.h1>
				</motion.div>
			</section>

			{/* contact form section */}
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
						Contact card section
					</motion.h1>
				</motion.div>
			</section>

			{/* inspiring text 3 */}
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
						className="text-xl lg:text-4xl font-light text-center text-white mb-5"
					>
						A glimpse into stories told through light
					</motion.h1>
				</motion.div>
			</section>

			{/* collaborators section */}
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
						Collabs
					</motion.h1>
				</motion.div>
			</section>

			{/* footer section */}
			<section>
				<div></div>
			</section>
		</main>
	);
}
