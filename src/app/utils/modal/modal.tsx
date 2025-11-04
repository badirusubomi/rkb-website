import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function Modal({
	isOpen,
	onClose,
	pictures,
}: {
	isOpen: boolean;
	onClose: () => void;
	pictures: { id: number; url: string }[];
}) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = useCallback(() => {
		setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
	}, [pictures.length]);

	const handleNext = useCallback(() => {
		setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
	}, [pictures.length]);

	// Keyboard navigation with useEffect
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") handlePrev();
			if (e.key === "ArrowRight") handleNext();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handlePrev, handleNext]);

	if (!isOpen || pictures.length === 0) return null;

	const handleThumbnailClick = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
			<div className="rounded-lg shadow-lg p-4 max-w-5xl w-[90%]">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="close cursor-pointer"
				>
					&times;
				</button>

				{/* Main Image Section */}
				<div className="relative flex items-center justify-center w-full h-[550px] rounded-lg overflow-hidden">
					{/* Prev Button */}
					<button
						onClick={handlePrev}
						className="absolute left-4 z-10 text-4xl text-white bg-black/40 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center transition"
					>
						&#8249;
					</button>

					{/* Current Image */}
					<div className="relative w-full h-full">
						<Image
							src={pictures[currentIndex].url}
							alt={`Picture ${pictures[currentIndex].id}`}
							fill
							className="object-cover rounded-lg"
						/>
					</div>

					{/* Next Button */}
					<button
						onClick={handleNext}
						className="absolute right-4 z-10 text-4xl text-white bg-black/40 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center transition"
					>
						&#8250;
					</button>
				</div>

				{/* Thumbnails */}
				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-6">
					{pictures.map((picture, index) => (
						<div
							key={picture.id}
							onClick={() => handleThumbnailClick(index)}
							className={`relative w-full h-24 cursor-pointer rounded-lg overflow-hidden opacity-70 border-2 transition ${
								index === currentIndex
									? "border-amber-500"
									: "border-transparent hover:border-gray-300"
							}`}
						>
							<Image
								src={picture.url}
								alt={`Thumbnail ${picture.id}`}
								fill
								className="object-cover"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
