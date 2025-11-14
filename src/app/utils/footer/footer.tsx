"use client";
import { motion } from "framer-motion";

export default function Footer({ footerColor }: Record<string, string>) {
	return (
		<motion.div className="flex flex-col justify-center items-center w-full">
			<motion.div
				className={`relative w-[95vw] max-h-full flex flex-col py-6 px-6 text-${footerColor} bg-[#cc9d68] rounded-xl mt-12 mx-3 space-y-2`}
			>
				<p className="text-s md:text-lg font-light mt-0 mb-2">
					Inspire me with all the latest RKB Epiphany news
				</p>

				{/* Subscription Form */}
				<form className="w-full mt-4 mb-4">
					<div className="flex flex-row sm:flex-row items-center gap-6">
						<input
							type="email"
							placeholder="Your email"
							className="px-4 py-2 bg-white text-sm md:text-xl rounded-lg w-1/3 text-black focus:outline-none"
						/>
						<button className="text-sm md:text-xl px-4 py-2 bg-[#2a3322] text-[#cc9d68] rounded-lg hover:bg-[#36402b] transition">
							Subscribe
						</button>
					</div>
				</form>

				{/* Footer Links */}
				<div className="md:flex gap-2 items-center grid grid-cols-2 md:grid-cols-4 justify-between text-xs md:text-md font-light mt-12 w-full">
					<a href="#">RKB Epiphany</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Terms of Service</a>
					<a href="#">Site by Shade</a>
				</div>
			</motion.div>

			<motion.div className="relative my-0  w-full flex justify-center select-none pointer-events-none overflow-hidden">
				<p className="relative w-full bottom-[-4rem] pt-[-10] text-[25vw] md:text-[18rem] font-light text-[#cc9d68] tracking-tight leading-none text-center">
					EPIPHANY
				</p>
			</motion.div>
		</motion.div>
	);
}
