"use client";
import { useRef, useState, useEffect } from "react";

export default function Home() {
	const leftVideoRef = useRef<HTMLVideoElement>(null);
	const rightVideoRef = useRef<HTMLVideoElement>(null);
	const [leftPaused, setLeftPaused] = useState(false);
	const [rightPaused, setRightPaused] = useState(false);
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	const handleLeftPause = () => {
		const video = leftVideoRef.current;
		if (!video) return;
		if (video.paused) {
			video.play();
			setLeftPaused(false);
		} else {
			video.pause();
			setLeftPaused(true);
		}
	};

	const handleRightPause = () => {
		const video = rightVideoRef.current;
		if (!video) return;
		if (video.paused) {
			video.play();
			setRightPaused(false);
		} else {
			video.pause();
			setRightPaused(true);
		}
	};

	return (
		<>
			{hasMounted && (
				<div className="w-full min-h-screen flex flex-col bg-[#7d7272] p-0 m-0 overflow-hidden">
					{/* Main split section - full width, full height, fixed */}
					<div className="w-full flex-1 flex flex-row min-h-screen relative">
						{/* Left Panel */}
						<div
							// onMouseLeave={handleLeftPause}
							className="flex-1 bg-[#d9d9d9] flex flex-col justify-between items-center relative min-h-0 overflow-hidden"
						>
							<video
								src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4#t=30"
								autoPlay
								loop
								muted
								playsInline
								ref={leftVideoRef}
								className="absolute inset-0 w-full h-full object-cover z-0"
							/>
							<button
								onClick={handleLeftPause}
								className="absolute bottom-8 left-8 bg-[#241d1d] rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
								title={leftPaused ? "Play" : "Pause"}
							>
								{leftPaused ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="white"
										className="w-6 h-6"
									>
										<polygon
											points="8,5 19,12 8,19"
											fill="white"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="white"
										className="w-6 h-6"
									>
										<rect
											x="6"
											y="5"
											width="3"
											height="14"
											rx="1"
											fill="white"
										/>
										<rect
											x="15"
											y="5"
											width="3"
											height="14"
											rx="1"
											fill="white"
										/>
									</svg>
								)}
							</button>
							<div className="flex flex-col items-center justify-end mb-10 h-full z-10">
								<span className="text-white text-lg font-light mb-2 opacity-80">
									Photography
								</span>
								<a
									href="#"
									className="text-xs text-white/80 underline"
								>
									View More
								</a>
							</div>
						</div>
						{/* Center Logo */}
						<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none">
							<span
								className="text-[9vw] sm:text-[5vw] md:text-[6vw] text-white tracking-widest"
								style={{ letterSpacing: "0.05em" }}
							>
								RKB EPIPHANY
							</span>
						</div>
						{/* Right Panel */}
						<div
							// onMouseEnter={handleRightPause}
							// onMouseLeave={handleRightPause}
							className="flex-1 bg-[#5a5656] font-serif flex flex-col justify-between items-center relative min-h-0 overflow-hidden"
						>
							<video
								src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
								autoPlay
								loop
								muted
								playsInline
								ref={rightVideoRef}
								className="absolute inset-0 w-full h-full object-cover z-0"
							/>
							<button
								onClick={handleRightPause}
								className="absolute bottom-8 right-8 bg-[#292727] rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
								title={rightPaused ? "Play" : "Pause"}
							>
								{rightPaused ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="white"
										className="w-6 h-6"
									>
										<polygon
											points="8,5 19,12 8,19"
											fill="white"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="white"
										className="w-6 h-6"
									>
										<rect
											x="6"
											y="5"
											width="3"
											height="14"
											rx="1"
											fill="white"
										/>
										<rect
											x="15"
											y="5"
											width="3"
											height="14"
											rx="1"
											fill="white"
										/>
									</svg>
								)}
							</button>
							<div className="flex flex-col items-center justify-end mb-10 h-full z-10">
								<span className="text-white text-lg font-light font-serif mb-2 opacity-80">
									Creative Services
								</span>
								<a
									href="#"
									className="text-xs text-white/80 underline"
								>
									View more
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
