import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	devIndicators: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
		localPatterns: [
			{
				pathname: "/photo.jpg", // Allow an exact path
				// Omitting "search" will allow all query parameters for this path
			},
			{
				pathname: "/photo.svg", // Allow an exact path
				// Omitting "search" will allow all query parameters for this path
			},
			{
				pathname: "/public/**", // Allow a wildcard path (e.g., /assets/image.png, /assets/subfolder/image.jpg)
				search: "", // An empty search string will block all query parameters for this path
			},
			{
				pathname: "/public/(.*)/(.*)", // Allow a regex pattern for paths within a specific directory
				search: ".*", // Allow any query parameters for this regex pattern
			},
		],
	},
};

export default nextConfig;
