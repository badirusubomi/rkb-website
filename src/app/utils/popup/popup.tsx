"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Popup({
	show,
	title,
	onClose,
}: {
	show: boolean;
	title: string;
	onClose: () => void;
}) {
	const modalRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!show) return;

		function handlePointerDown(e: MouseEvent | TouchEvent) {
			const target = e.target as Node | null;
			if (modalRef.current && target && !modalRef.current.contains(target)) {
				onClose();
			}
		}

		function handleKey(e: KeyboardEvent) {
			if (e.key === "Escape") onClose();
		}

		document.addEventListener("mousedown", handlePointerDown);
		document.addEventListener("touchstart", handlePointerDown);
		document.addEventListener("keydown", handleKey);

		return () => {
			document.removeEventListener("mousedown", handlePointerDown);
			document.removeEventListener("touchstart", handlePointerDown);
			document.removeEventListener("keydown", handleKey);
		};
	}, [show, onClose]);

	if (!show) return null;

	return (
		<motion.div>
			{/* Overlay */}
			<div
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
				aria-hidden={false}
			>
				{/* Modal card - clicks inside this element won't close the popup */}
				<div
					ref={modalRef}
					role="dialog"
					aria-modal="true"
					className="bg-[#c2a482] p-6 rounded-lg shadow-lg overflow-y-auto h-max-[80vh]"
				>
					<h2 className="text-xl font-bold mb-4">{title}</h2>
				</div>
			</div>
		</motion.div>
	);
}
