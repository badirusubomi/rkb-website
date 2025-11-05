import Image from "next/image";
import { TransitionLink } from "../transitionLink";

export default function LogoCard({ logoSrc }: { logoSrc: string }) {
	return (
		<div
			className="
				fixed top-3 left-3 z-50 bg-[#04070070] rounded-xl shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] flex items-center justify-center
			"
		>
			{/* Logo Image (responsive and centered) */}
			<div className="relative w-[60%] h-[60%]">
				<TransitionLink href="/home">
					<Image
						src={logoSrc}
						alt="Brand Logo"
						fill
						className="object-contain"
						priority
					/>
				</TransitionLink>
			</div>
		</div>
	);
}
