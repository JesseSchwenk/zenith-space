"use client";

import Stars from "@/components/Stars";
import Link from "next/link";
import { useState } from "react";

export default function TeamPage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<main className="relative w-full min-h-screen">
			<Stars />

			{/* animated glow accents - fixed so they stay in place */}
			<div className="pointer-events-none fixed -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,150,255,0.14),transparent_60%)] blur-3xl animate-pulse-slow -z-10" />
			<div className="pointer-events-none fixed -right-20 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(210,70,255,0.12),transparent_60%)] blur-3xl animate-pulse-slow -z-10" style={{ animationDelay: "2s" }} />
			<div className="pointer-events-none fixed left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(100,200,255,0.08),transparent_60%)] blur-3xl animate-pulse-slow -z-10" style={{ animationDelay: "4s" }} />

			{/* Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
				{/* Desktop Navigation */}
				<div className="hidden md:flex glass gap-2 px-6 py-3 rounded-full">
					<Link href="/" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Home</Link>
					<Link href="/#problem" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Problem</Link>
					<Link href="/#solution" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Solution</Link>
					<Link href="/#technology" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Technology</Link>
					<Link href="/#mission" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Mission</Link>
					<Link href="/#contact" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Contact</Link>
					<Link href="/team" className="px-4 py-1 text-sm text-white/90 bg-white/10 rounded-full transition-colors">Team</Link>
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden w-full max-w-sm">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="glass px-4 py-2 rounded-full w-full flex items-center justify-between text-white/90"
						aria-label="Toggle menu"
					>
						<span className="text-sm font-medium">Menu</span>
						<svg
							className={`w-5 h-5 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{isMenuOpen && (
						<div className="glass mt-2 rounded-2xl p-4 space-y-2">
							<Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Home</Link>
							<Link href="/#problem" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Problem</Link>
							<Link href="/#solution" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Solution</Link>
							<Link href="/#technology" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Technology</Link>
							<Link href="/#mission" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Mission</Link>
							<Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Contact</Link>
							<Link href="/team" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/90 bg-white/10 rounded-lg">Team</Link>
						</div>
					)}
				</div>
			</nav>

			{/* Main Content */}
			<section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 md:py-32">
				<div className="glass grid-premium p-6 sm:p-8 md:p-12 animate-fade-in-up">
					{/* Header */}
					<div className="text-center mb-8 md:mb-12">
						<p className="mb-3 text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/60">Our Team</p>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white/90 mb-4">
							Organizational Chart
						</h1>
						<div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto" />
					</div>

					{/* Organizational Chart */}
					<div className="space-y-6 md:space-y-8 lg:space-y-12">
						{/* CEO Level */}
						<div className="flex flex-col items-center">
							<div className="glass p-6 md:p-8 rounded-2xl border-2 border-white/20 max-w-sm w-full text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
								<h2 className="text-xl md:text-2xl font-semibold text-white/95 mb-2">Jesse Schwenk</h2>
								<p className="text-sm md:text-base text-white/70 uppercase tracking-wide">Founder & Chief Executive Officer</p>
							</div>
						</div>

						{/* Connection Line */}
						<div className="flex justify-center">
							<div className="w-px h-6 md:h-8 lg:h-12 bg-gradient-to-b from-white/30 to-transparent" />
						</div>

						{/* C-Level Executives */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
							{/* COO */}
							<div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
								<div className="glass p-5 md:p-6 rounded-xl border border-white/15 w-full text-center h-full flex flex-col">
									<h3 className="text-lg md:text-xl font-semibold text-white/95 mb-1">Cihan Yorulmaz</h3>
									<p className="text-xs md:text-sm text-white/70 uppercase tracking-wide mb-4">Chief Operating Officer</p>
									<div className="pt-4 border-t border-white/10 mt-auto">
										<p className="text-xs text-white/60">Customer Relations</p>
									</div>
								</div>
							</div>

							{/* CFO */}
							<div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
								<div className="glass p-5 md:p-6 rounded-xl border border-white/15 w-full text-center h-full flex flex-col">
									<h3 className="text-lg md:text-xl font-semibold text-white/95 mb-1">Aaron Blomkvist</h3>
									<p className="text-xs md:text-sm text-white/70 uppercase tracking-wide mb-4">Chief Financial Officer</p>
									<div className="pt-4 border-t border-white/10 mt-auto">
										<p className="text-xs text-white/60">Accounting</p>
									</div>
								</div>
							</div>

							{/* CPO */}
							<div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
								<div className="glass p-5 md:p-6 rounded-xl border border-white/15 w-full text-center h-full flex flex-col">
									<h3 className="text-lg md:text-xl font-semibold text-white/95 mb-1">Giovanni Saviano</h3>
									<p className="text-xs md:text-sm text-white/70 uppercase tracking-wide mb-4">Chief Product Officer</p>
									<div className="pt-4 border-t border-white/10 mt-auto">
										<p className="text-xs text-white/60">Manufacturing</p>
									</div>
								</div>
							</div>

							{/* CTO */}
							<div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
								<div className="glass p-5 md:p-6 rounded-xl border border-white/15 w-full text-center h-full flex flex-col">
									<h3 className="text-lg md:text-xl font-semibold text-white/95 mb-1">Adrian Jung</h3>
									<p className="text-xs md:text-sm text-white/70 uppercase tracking-wide mb-4">Chief Technology Officer</p>
									<div className="pt-4 border-t border-white/10 mt-auto">
										<p className="text-[10px] sm:text-[11px] md:text-[11px] text-white/60 leading-tight">Research & Development</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16 mt-12 md:mt-20">
				<div className="glass grid-premium p-6 sm:p-8 md:p-12">
					<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
						{/* Company Info */}
						<div>
							<h3 className="text-base md:text-lg font-semibold text-white/90 mb-3 md:mb-4">ZENITH</h3>
							<p className="text-xs sm:text-sm text-white/60 mb-3 md:mb-4">
								Orbital debris remediation for a sustainable space future.
							</p>
							<div className="flex gap-3">
								<a href="mailto:info@zenith.space" className="text-xs sm:text-sm text-white/70 hover:text-white/90 transition-colors break-all">
									info@zenith.space
								</a>
							</div>
						</div>

						{/* Resources */}
						<div>
							<h3 className="text-base md:text-lg font-semibold text-white/90 mb-3 md:mb-4">Resources</h3>
							<ul className="space-y-2 md:space-y-3 text-xs sm:text-sm">
								<li>
									<a 
										href="https://zenith-questionnaire.vercel.app/overview" 
										target="_blank" 
										rel="noopener noreferrer"
										className="text-white/70 hover:text-white/90 transition-colors inline-flex items-center gap-2"
									>
										Market Research Overview
										<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
								</li>
								<li>
									<a 
										href="/presentations/powerpoint1.pdf" 
										target="_blank" 
										rel="noopener noreferrer"
										className="text-white/70 hover:text-white/90 transition-colors inline-flex items-center gap-2"
									>
										Presentation 1
										<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
								</li>
								<li>
									<a 
										href="/presentations/powerpoint2.pdf" 
										target="_blank" 
										rel="noopener noreferrer"
										className="text-white/70 hover:text-white/90 transition-colors inline-flex items-center gap-2"
									>
										Presentation 2
										<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
								</li>
							</ul>
						</div>

						{/* Quick Links */}
						<div className="sm:col-span-2 md:col-span-1">
							<h3 className="text-base md:text-lg font-semibold text-white/90 mb-3 md:mb-4">Quick Links</h3>
							<ul className="space-y-2 md:space-y-3 text-xs sm:text-sm">
								<li>
									<Link href="/#problem" className="text-white/70 hover:text-white/90 transition-colors">
										The Problem
									</Link>
								</li>
								<li>
									<Link href="/#solution" className="text-white/70 hover:text-white/90 transition-colors">
										Our Solution
									</Link>
								</li>
								<li>
									<Link href="/#technology" className="text-white/70 hover:text-white/90 transition-colors">
										Technology
									</Link>
								</li>
								<li>
									<Link href="/#mission" className="text-white/70 hover:text-white/90 transition-colors">
										Mission
									</Link>
								</li>
								<li>
									<Link href="/#contact" className="text-white/70 hover:text-white/90 transition-colors">
										Contact
									</Link>
								</li>
								<li>
									<Link href="/team" className="text-white/70 hover:text-white/90 transition-colors">
										Team
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-white/10 pt-6 md:pt-8 mt-6 md:mt-8">
						<div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs text-white/50">
							<div className="text-center md:text-left">
								© {new Date().getFullYear()} ZENITH. All rights reserved.
							</div>
							<div className="flex gap-4 md:gap-6">
								<a href="mailto:partnerships@zenith.space" className="hover:text-white/70 transition-colors">
									Partnerships
								</a>
								<a href="mailto:info@zenith.space" className="hover:text-white/70 transition-colors">
									Contact
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</main>
	);
}

