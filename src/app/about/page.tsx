"use client";
import { motion } from "framer-motion";
import Footer from "../utils/footer/footer";
import ScrollIndicator from "../utils/scrollIndicator/scrollIndicator";

export default function About() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen snap-y snap-mandatory">
			<ScrollIndicator svgSrc="/rkbAssets/scrollDownIndicator.svg" />
			<div className="flex w-[95vw] h-auto flex-col items-center justify-center px-4 sm:px-8">
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
						At RKB Epiphany Studio<span className="font-serif">&#x2C;</span> we
						are driven by two core missions
						<span className="font-serif">:</span> empowering businesses to
						thrive through impactful social media strategies and creating a
						nurturing space for the next generation of creatives to unlock their
						full potential<span className="font-serif">.</span> <br></br>
						<br></br>On the business side<span className="font-serif">,</span>{" "}
						we partner with companies to elevate their online presence and tell
						compelling stories that resonate with their audience
						<span className="font-serif">.</span> Through dynamic social media
						campaigns and stunning visuals<span className="font-serif">,</span>{" "}
						we help businesses sell their products and services while building
						lasting connections with their customers
						<span className="font-serif">.</span> <br></br>
						<br></br>On the community side<span className="font-serif">,</span>{" "}
						we are dedicated to supporting young creatives—particularly
						storytellers<span className="font-serif">,</span> photographers
						<span className="font-serif">,</span> videographers
						<span className="font-serif">,</span> and digital artists between
						the ages of <span className="font-serif">17</span> and{" "}
						<span className="font-serif">25</span>
						<span className="font-serif">.</span> Our goal is to become a
						leading force in the creative space
						<span className="font-serif">,</span> providing free access to
						high-quality equipment<span className="font-serif">,</span> studio
						spaces<span className="font-serif">,</span> and mentoring
						<span className="font-serif">.</span> We envision a physical
						location with fully equipped studio rooms where emerging talents can
						bring their visions to life without the burden of cost
						<span className="font-serif">,</span> enabling them to focus purely
						on creativity and the pursuit of their artistic journeys
						<span className="font-serif">.</span> <br></br>
						<br></br>Through this dual approach
						<span className="font-serif">,</span> RKB Epiphany Studio strive to
						be both a catalyst for business growth and a transformative resource
						for the next wave of creative talent
						<span className="font-serif">.</span> Our social media platforms
						will serve as a bridge<span className="font-serif">,</span>{" "}
						connecting these two worlds<span className="font-serif">-</span>
						showcasing collaborations with businesses while fostering a vibrant
						community where young creatives can learn
						<span className="font-serif">,</span> grow
						<span className="font-serif">,</span> and thrive
						<span className="font-serif">.</span> <br></br>
						<br></br>Want to learn more about us
						<span className="font-serif">?</span> Book a consultation
						<span className="font-serif">,</span> let
						<span className="font-serif">&apos;</span>s have a chat
						<span className="font-serif">!</span>
					</motion.p>
				</motion.div>

				{/* button */}
				<div className="flex justify-center mb-20">
					<motion.a
						whileHover={{ scale: 1.05 }}
						viewport={{ once: true }}
						href="https://book.squareup.com/appointments/s4v957vaozqatr/location/LS4KC4CH63WJV"
						className="px-4 py-2 w-full bg-[#2a3322] text-[#cc9d68] rounded-lg text-sm md:text-2xl hover:bg-[#36402b] transition cursor-pointer"
					>
						Book Appointment Now
					</motion.a>
				</div>
			</div>

			<Footer footerColor="black" />
		</div>
	);
}
