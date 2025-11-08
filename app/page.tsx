import Stars from "@/components/Stars";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<main className="relative min-h-dvh overflow-hidden">
			<Stars />

			{/* animated glow accents */}
			<div className="pointer-events-none absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,150,255,0.14),transparent_60%)] blur-3xl animate-pulse-slow" />
			<div className="pointer-events-none absolute -right-20 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(210,70,255,0.12),transparent_60%)] blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

			<section className="relative mx-auto flex max-w-5xl flex-col items-center px-6">
				<header className="flex items-center gap-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
					<div className="relative h-80 w-[1200px] md:h-[400px] md:w-[1500px]">
						<Image
							src="/zenithtextlogo.png"
							alt="ZENITH"
							fill
							className="object-contain"
							priority
						/>
					</div>
				</header>

				<div className="glass grid-premium w-full max-w-3xl p-8 md:p-12 animate-fade-in-up animate-float-slow" style={{ animationDelay: "0.4s", animationDuration: "14s" }}>
					<p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/60 animate-fade-in" style={{ animationDelay: "0.6s" }}>
						Orbital Debris Remediation
					</p>
					<h2 className="mb-4 text-3xl font-semibold leading-tight md:text-5xl animate-fade-in" style={{ animationDelay: "0.8s" }}>
						<span className="text-white/90">Coming Soon.</span>{" "}
						<span className="text-white/60 text-xl"><br />Cleaning space, one debris at a time!</span>
					</h2>
					<p className="mb-8 max-w-[55ch] text-white/70 animate-fade-in" style={{ animationDelay: "1s" }}>
						We develop precision systems that locate, capture, and clear orbital debris —
						quietly restoring low‑Earth orbit for the missions that matter.
					</p>
				</div>

				<footer className="mt-4 text-xs text-white/50 animate-fade-in" style={{ animationDelay: "1.4s" }}>
					© {new Date().getFullYear()} ZENITH. All rights reserved.
				</footer>
			</section>
		</main>
	);
}


