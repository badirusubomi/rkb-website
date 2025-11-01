"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { X, Plus } from "lucide-react";
import { TransitionLink } from "../transitionLink";

const pageNavigationMap: Record<string, string> = {
	home: "/",
	portfolio: "/portfolio",
	// "https://book.squareup.com/appointments/s4v957vaozqatr/location/LS4KC4CH63WJV/services",
	blog: "/blog",
};

export default function Navigation({ activeTab }: Record<string, string>) {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="fixed bottom-0 z-10 inset-x-0 mx-auto w-fit flex items-center justify-center h-auto py-0 mb-5">
			{/* Top rounded rectangle (toggle menu) */}
			{menuOpen && (
				<div className="absolute bottom-25 left-1/2 -translate-x-1/2 mt-0 bg-[#25331f7e] backdrop-filter backdrop-blur-sm bg-opacity-30 text-[#C4A77D] rounded-4xl w-[90%] max-w-md p-6 flex flex-col gap-4 shadow-lg z-10 transition-all duration-300 ease-in-out">
					<div className="flex justify-between items-center">
						<h1 className="text-lg font-semibold">RKB Epiphany</h1>
						<p className="text-sm opacity-70">&#x2026;slogan</p>
					</div>

					{/* Menu buttons */}
					<div className="flex flex-col gap-3 mt-3">
						{["About us", "Portfolio", "Book with us now"].map((item, i) => (
							<div
								key={i}
								className="flex items-center bg-[#ECE5DF] rounded-2xl p-4 cursor-pointer hover:opacity-80 transition"
							>
								<div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
								<span className="text-black text-lg">{item}</span>
							</div>
						))}
					</div>
				</div>
			)}
			{/* Bottom rounded rectangle (nav bar) */}
			<motion.div className="bg-[#25331f7e] backdrop-filter backdrop-blur-sm bg-opacity-30 border-0 flex items-center  justify-center gap-6 text-[#C4A77D] rounded-full px-6 py-3 shadow-md">
				{["home", "portfolio", "blog"].map((tab, i) => (
					<TransitionLink
						href={pageNavigationMap[tab]}
						key={i}
						onClick={toggleMenu}
					>
						<div
							className={`${pageNavigationMap[tab] === activeTab ? "bg-[#F4EDE6]" : "bg-[#2F3B2B]"} rounded-full px-5 py-2 text-sm hover:bg-[#3b4a35] transition`}
						>
							{tab.toLocaleLowerCase()}
						</div>
					</TransitionLink>
				))}
				<button
					onClick={toggleMenu}
					className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C4A77D] text-[#545C4A] hover:opacity-80 transition hover:target:"
				>
					{menuOpen ? <X size={20} /> : <Plus size={20} />}
				</button>
			</motion.div>
		</div>
	);
}
