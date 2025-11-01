"use client";
import { motion } from "framer-motion";

export default function Footer({ footerColor }: Record<string, string>) {
	return (
		<motion.div
			className={`relative w-full max-h-full flex flex-col items-center py-6 text-[#${footerColor}]`}
		></motion.div>
	);
}
