import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Michroma } from "next/font/google";

const bodyFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const displayFont = Michroma({ weight: "400", subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
	title: "ZENITH — Orbital Debris Remediation",
	description: "Coming soon — ZENITH clears space debris with precision, elegance, and safety.",
	icons: { icon: "/favicon.svg" },
	metadataBase: new URL("https://zenith.example")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
			<body className="min-h-dvh antialiased bg-[var(--bg)] text-[var(--fg)] selection:bg-white/20 selection:text-white">
				{children}
			</body>
		</html>
	);
}


