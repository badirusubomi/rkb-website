// "use client";
import Footer from "../utils/footer/footer";
import ScrollIndicator from "../utils/scrollIndicator/scrollIndicator";

export default async function Services() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen snap-y snap-mandatory">
			<ScrollIndicator svgSrc="/rkbAssets/scrollDownIndicator.svg" />
			<div className="flex flex-col w-[70vw] h-[70vh] mt-[100px] rounded-xl py-20 lg:px-10 mx-0 justify-items-start md:gap-30 items-center bg-[#04070070] backdrop-filter backdrop-blur-sm bg-opacity-30 relative overflow-hidden">
				<h1 className="text-white text-3xl">Under Construction</h1>
			</div>

			<Footer footerColor="black" />
		</div>
	);
}
