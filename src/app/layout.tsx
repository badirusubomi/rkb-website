"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { usePathname } from "next/navigation";
// import { TransitionLink } from "./utils/transitionLink";
import Navigation from "./utils/navBar/navigation";
import LogoCard from "./utils/logoCard/logoCard";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// Needs to be updated everytime a new page is added; Bad system I know, but it'll have to do for now

const pageUrls = ["home", "about", "services", "portfolio", "blog", "admin"];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const isAdmin = pathname.startsWith("/admin");
	const isLanding =
		pageUrls.filter((url) => pathname.split("/")[1] === url).length == 0;

	const [hasMounted, setHasMounted] = React.useState(false);

	React.useEffect(() => {
		setHasMounted(true);
	}, []);

	return (
		<html
			lang="en"
			suppressHydrationWarning={true}
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased ${
					isAdmin ? "" : ""
				}`}
				style={isAdmin ? { height: "100vh", margin: 0 } : {}}
			>
				{isAdmin ? (
					// --- ADMIN LAYOUT ---
					<div style={{ height: "100%", minHeight: "100vh" }}>{children}</div>
				) : (
					// --- NORMAL SITE LAYOUT ---
					<>
						{hasMounted && (
							<>
								{!isLanding && (
									<>
										<Navigation activeTab={pathname.split("/")[1]} />
									</>
								)}
								<LogoCard logoSrc={"/rkbAssets/logoWhite.svg"} />
							</>
						)}
						{children}
					</>
				)}
			</body>
		</html>
	);
}
