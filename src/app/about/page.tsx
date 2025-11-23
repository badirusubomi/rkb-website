"use client";
import { motion } from "framer-motion";
import Footer from "../utils/footer/footer";
import ScrollIndicator from "../utils/scrollIndicator/scrollIndicator";

export default function About() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen snap-y snap-mandatory">
			<ScrollIndicator svgSrc="/rkbAssets/scrollDownIndicator.svg" />
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 2 }}
				viewport={{ once: true }}
				className="flex w-[95vw] h-auto flex-col items-center justify-center px-4 sm:px-8"
			>
				{/* headings */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="max-w-lg mt-20 mb-20 space-y-8 w-[90vw] sm:max-w-lg flex flex-col items-center justify-center"
				>
					<motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] text-[#cc9d68] font-light leading-snug mb-20">
						VISION STATEMENT
					</motion.h1>

					{/* sub heading */}
					<motion.h2 className="text-xl sm:text-2xl md:text-[2rem] lg:text-[2.5rem] font-light text-[#cc9d68] leading-none">
						Our Mission And Vision
					</motion.h2>
				</motion.div>

				{/* paragraph */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="max-w-3xl mb-20 space-y-6 px-4 w-[90vw] sm:max-w-3xl"
				>
					<motion.p className="text-sm md:text-base lg:text-lg font-light text-[#cc9d68]">
						At RKB Epiphany Studio, we are driven by two core missions:
						empowering businesses to thrive through impactful social media
						strategies and creating a nurturing space for the next generation of
						creatives to unlock their full potential. <br></br>
						<br></br>On the business side, we partner with companies to elevate
						their online presence and tell compelling stories that resonate with
						their audience. Through dynamic social media campaigns and stunning
						visuals, we help businesses sell their products and services while
						building lasting connections with their customers. <br></br>
						<br></br>On the community side, we are dedicated to supporting young
						creatives—particularly storytellers, photographers, videographers,
						and digital artists between the ages of 17 and 25. Our goal is to
						become a leading force in the creative space, providing free access
						to high-quality equipment, studio spaces, and mentoring. We envision
						a physical location with fully equipped studio rooms where emerging
						talents can bring their visions to life without the burden of cost,
						enabling them to focus purely on creativity and the pursuit of their
						artistic journeys. <br></br>
						<br></br>Through this dual approach, RKB Epiphany Studio strive to
						be both a catalyst for business growth and a transformative resource
						for the next wave of creative talent. Our social media platforms
						will serve as a bridge, connecting these two worlds—showcasing
						collaborations with businesses while fostering a vibrant community
						where young creatives can learn, grow, and thrive. <br></br>
						<br></br>Want to learn more about us? Book a consultation, let&#39;s
						have a chat!
					</motion.p>
				</motion.div>

				{/* button */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="flex justify-center mb-20"
				>
					<motion.button
						whileHover={{ scale: 1.05 }}
						viewport={{ once: true }}
						className="px-4 py-2 w-full bg-[#2a3322] text-[#cc9d68] rounded-lg text-sm md:text-2xl hover:bg-[#36402b] transition cursor-pointer"
					>
						Book Appointment Now
					</motion.button>
				</motion.div>
			</motion.div>

			<Footer footerColor="black" />
		</div>
	);
}
