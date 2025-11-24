"use client";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import Popup from "../popup/popup";

export default function Footer({ footerColor }: Record<string, string>) {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);
	const [activeModal, setActiveModal] = useState("");

	const footerLinks = [
		{ title: "RKB Epiphany", href: "#" },
		{ title: "Privacy Policy", href: "#" },
		{ title: "Terms of Service", href: "#" },
		{ title: "Site by Shade", href: "#" },
	];

	const [showPopup, setShowPopup] = useState(false);

	const handleClick = (title: string) => {
		setActiveModal(title);
		setShowPopup(true);
	};

	async function submitEmail(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsSubmitting(true);

		try {
			const res = await fetch("/api/emailSignup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email,
				}),
			});

			if (!res.ok) throw new Error("Failed to signup");

			setSuccess(true);
			setEmail("");
		} catch (err) {
			setError(err.message);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<motion.div className="flex flex-col justify-center items-center w-full">
			<motion.div
				className={`relative w-[95vw] max-h-full flex flex-col py-6 px-6 text-${footerColor} bg-[#cc9d68] rounded-xl mt-12 mx-3 space-y-2`}
			>
				<p className="text-s md:text-lg font-light mt-0 mb-2">
					Inspire me with all the latest RKB Epiphany news
				</p>

				{/* Subscription Form */}
				<form
					onSubmit={submitEmail}
					className="w-full mt-4 mb-4"
					method="POST"
				>
					<div className="flex flex-row sm:flex-row items-center gap-6">
						<input
							type="email"
							value={email}
							hidden={success ? true : false}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Your email"
							className="px-4 py-2 font-serif bg-white text-sm md:text-xl rounded-lg w-1/3 text-black focus:outline-none"
						/>
						{error && <p className="text-red-500 text-sm">{error}</p>}
						<motion.button
							whileHover={{ scale: 1.05 }}
							viewport={{ once: true }}
							type="submit"
							disabled={isSubmitting}
							className="text-sm font-serif md:text-xl px-4 py-2 bg-[#2a3322] text-[#ffffff] rounded-lg hover:bg-[#36402b] transition cursor-pointer"
						>
							{isSubmitting
								? "Subscribing..."
								: success
									? `Thanks for subscribing!`
									: "Subscribe"}
						</motion.button>
					</div>
				</form>

				{/* Footer Links */}
				<div className="md:flex gap-2 items-center grid grid-cols-2 md:grid-cols-4 justify-between text-xs md:text-md font-light mt-12 w-full">
					{footerLinks.map((link) => (
						<a
							key={link.title}
							onClick={() => handleClick(link.title)}
							className="cursor-pointer"
						>
							{link.title}
						</a>
					))}
				</div>
			</motion.div>

			<motion.div className="relative my-0  w-full flex justify-center select-none pointer-events-none overflow-hidden">
				<p className="relative w-full -bottom-16 pt-[-10] text-[25vw] md:text-[18rem] font-light text-[#cc9d68] tracking-tight leading-none text-center">
					EPIPHANY
				</p>
			</motion.div>

			{showPopup && (
				<Popup
					show={true}
					title={activeModal}
					onClose={() => setShowPopup(false)}
				/>
			)}
		</motion.div>
	);
}
