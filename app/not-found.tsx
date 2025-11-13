import Stars from "@/components/Stars";
import Link from "next/link";

export default function NotFound() {
	return (
		<main className="relative w-full min-h-screen flex items-center justify-center">
			<Stars />

			{/* animated glow accents - fixed so they stay in place */}
			<div className="pointer-events-none fixed -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,150,255,0.14),transparent_60%)] blur-3xl animate-pulse-slow -z-10" />
			<div className="pointer-events-none fixed -right-20 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(210,70,255,0.12),transparent_60%)] blur-3xl animate-pulse-slow -z-10" style={{ animationDelay: "2s" }} />
			<div className="pointer-events-none fixed left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(100,200,255,0.08),transparent_60%)] blur-3xl animate-pulse-slow -z-10" style={{ animationDelay: "4s" }} />

			<div className="relative mx-auto max-w-2xl px-4 sm:px-6 py-12">
				<div className="glass grid-premium p-8 md:p-12 text-center animate-fade-in-up">
					<div className="mb-6">
						<h1 className="text-8xl md:text-9xl font-bold text-white/90 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
							404
						</h1>
						<div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }} />
					</div>

					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 mb-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
						Page Not Found
					</h2>

					<p className="text-base sm:text-lg text-white/70 mb-8 max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.8s" }}>
						The page you're looking for seems to have drifted off into space. Let's get you back on course.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "1s" }}>
						<Link
							href="/"
							className="px-6 sm:px-8 py-3 bg-white/20 hover:bg-white/25 border border-white/30 rounded-lg text-white transition-all backdrop-blur-sm text-center font-medium"
						>
							Return Home
						</Link>
						<Link
							href="/#contact"
							className="px-6 sm:px-8 py-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg text-white/90 transition-all backdrop-blur-sm text-center font-medium"
						>
							Contact Us
						</Link>
					</div>

					<div className="mt-8 pt-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: "1.2s" }}>
						<p className="text-xs sm:text-sm text-white/50">
							Error Code: 404 • Orbital Debris Not Found
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}

