"use client";
import { motion } from "framer-motion";

export default function Portfolio() {
	return (
		<div className="flex m-0 p-0 min-h-screen items-center justify-center snap-y snap-mandatory">
			<main className="flex min-h-screen w-full flex-col items-center justify-between px-0 text-amber-300 ">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<h1>RKB Epiphany Portfolio Page</h1>
				</motion.div>
				<section>
					<div></div>
				</section>
			</main>
		</div>
	);
}
