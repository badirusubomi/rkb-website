"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ScrollIndicatorProps {
	svgSrc: string; // path to your SVG, e.g. "/icons/arrow.svg"
}

export default function ScrollIndicator({ svgSrc }: ScrollIndicatorProps) {
	const [isAtBottom, setIsAtBottom] = useState(false);
	const [isVisible, setIsVisible] = useState(true);

	// Track scroll position
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const bottomReached = scrollY + windowHeight >= documentHeight - 10;

			setIsAtBottom(bottomReached);

			// Fade out near the bottom or top few pixels
			setIsVisible(
				scrollY < documentHeight - windowHeight - 20 || bottomReached
			);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Smooth scroll to top or bottom
	const handleClick = () => {
		if (isAtBottom) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
		}
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, rotate: isAtBottom ? 180 : 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					className="fixed bottom-10 left-10 z-50 cursor-pointer select-none"
					onClick={handleClick}
				>
					<motion.div
						animate={{
							opacity: [1, 0.1, 1],
						}}
						transition={{
							duration: 3.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<Image
							src={svgSrc}
							alt="Scroll indicator"
							width={40}
							height={40}
							className="opacity-90 mask-auto"
							priority
						/>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
