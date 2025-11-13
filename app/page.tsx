"use client";

import Stars from "@/components/Stars";
import { useState } from "react";

export default function Page() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<main className="relative w-full">
			<Stars />

			{/* animated glow accents - fixed so they stay in place */}
			<div className="pointer-events-none fixed -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,150,255,0.14),transparent_60%)] blur-3xl animate-pulse-slow -z-10" />
			<div className="pointer-events-none fixed -right-20 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(210,70,255,0.12),transparent_60%)] blur-3xl animate-pulse-slow -z-10" style={{ animationDelay: "2s" }} />
			<div className="pointer-events-none fixed left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(100,200,255,0.08),transparent_60%)] blur-3xl animate-pulse-slow -z-10" style={{ animationDelay: "4s" }} />

			{/* Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
				{/* Desktop Navigation */}
				<div className="hidden md:flex glass gap-2 px-6 py-3 rounded-full">
					<a href="#hero" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Home</a>
					<a href="#problem" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Problem</a>
					<a href="#solution" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Solution</a>
					<a href="#technology" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Technology</a>
					<a href="#mission" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Mission</a>
					<a href="#contact" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Contact</a>
					<a href="/team" className="px-4 py-1 text-sm text-white/70 hover:text-white/90 transition-colors">Team</a>
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
							<a href="#hero" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Home</a>
							<a href="#problem" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Problem</a>
							<a href="#solution" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Solution</a>
							<a href="#technology" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Technology</a>
							<a href="#mission" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Mission</a>
							<a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Contact</a>
							<a href="/team" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-white/70 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">Team</a>
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section */}
			<section id="hero" className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 sm:px-6 pt-24 md:pt-32 pb-12 md:pb-20">
				<div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
					{/* Video Section */}
					<div className="flex-1 flex justify-center w-full md:w-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
						<div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] bg-white/5">
							<video
								autoPlay
								loop
								muted
								playsInline
								className="w-full h-full object-cover"
							>
								<source src="/Generated_File_October_24_2025_-_8_48PM.mp4" type="video/mp4" />
							</video>
							{/* Subtle gradient overlay for better integration with design */}
							<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none" />
						</div>
					</div>

					{/* Content Section */}
					<div className="flex-1 glass grid-premium p-6 sm:p-8 md:p-10 animate-fade-in-up animate-float-slow" style={{ animationDelay: "0.4s", animationDuration: "5s" }}>
						<p className="mb-2 text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/60 animate-fade-in" style={{ animationDelay: "0.6s" }}>
							Orbital Debris Remediation
						</p>
						<h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-in" style={{ animationDelay: "0.8s" }}>
							<span className="text-white/95">Cleaning space,</span>
							<br />
							<span className="text-white/80">one piece of debris at a time.</span>
						</h1>
						<p className="mb-6 md:mb-8 text-base sm:text-lg text-white/70 leading-relaxed animate-fade-in" style={{ animationDelay: "1s" }}>
							We develop precision systems that locate, capture, and clear orbital debris — quietly restoring low‑Earth orbit for the missions that matter.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: "1.2s" }}>
							<a href="#problem" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg text-white/90 transition-all backdrop-blur-sm text-center font-medium text-sm sm:text-base">
								Explore Our Mission
							</a>
							<a href="#contact" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white/20 hover:bg-white/25 border border-white/30 rounded-lg text-white transition-all backdrop-blur-sm text-center font-medium text-sm sm:text-base">
								Get in Touch
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Problem Section */}
			<section id="problem" className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-20">
				<div className="glass grid-premium w-full max-w-4xl p-6 sm:p-8 md:p-12 animate-fade-in-up">
					<p className="mb-3 text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/60">The Challenge</p>
					<h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-semibold leading-tight md:text-4xl text-white/90">
						Orbital Debris: A Growing Threat
					</h2>
					<div className="space-y-4 md:space-y-6 text-white/70">
						<p className="text-sm sm:text-base">
							Low Earth Orbit is becoming increasingly congested. With over 34,000 tracked objects larger than 10cm and millions of smaller fragments, the risk of collisions threatens both active satellites and future space missions.
						</p>
						<div className="grid sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
							<div className="p-4 md:p-6 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-base md:text-lg font-semibold text-white/90 mb-2">Exponential Growth</h3>
								<p className="text-xs sm:text-sm">Debris population increases with each collision, creating cascading risks that compound over time.</p>
							</div>
							<div className="p-4 md:p-6 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-base md:text-lg font-semibold text-white/90 mb-2">Critical Orbits</h3>
								<p className="text-xs sm:text-sm">Valuable orbital slots are becoming unusable, limiting access to space for future generations.</p>
							</div>
							<div className="p-4 md:p-6 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-base md:text-lg font-semibold text-white/90 mb-2">Mission Risk</h3>
								<p className="text-xs sm:text-sm">Active satellites face increasing collision probabilities, threatening critical infrastructure.</p>
							</div>
							<div className="p-4 md:p-6 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-base md:text-lg font-semibold text-white/90 mb-2">Economic Impact</h3>
								<p className="text-xs sm:text-sm">Debris mitigation costs billions annually and threatens the sustainability of space commerce.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Solution Section */}
			<section id="solution" className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-20">
				<div className="glass grid-premium w-full max-w-4xl p-6 sm:p-8 md:p-12 animate-fade-in-up">
					<p className="mb-3 text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/60">Our Approach</p>
					<h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-semibold leading-tight md:text-4xl text-white/90">
						Precision Debris Remediation
					</h2>
					<div className="space-y-4 md:space-y-6 text-white/70">
						<p className="text-sm sm:text-base">
							ZENITH develops autonomous systems designed to safely and efficiently remove orbital debris. Our technology combines advanced detection, precision capture, and controlled deorbit capabilities.
						</p>
						<div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
							<div className="flex gap-3 md:gap-4 items-start">
								<div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 font-semibold text-sm md:text-base">1</div>
								<div>
									<h3 className="text-base md:text-lg font-semibold text-white/90 mb-1">Detection & Tracking</h3>
									<p className="text-xs sm:text-sm">Advanced sensor systems identify and track debris with millimeter precision, even in challenging lighting conditions.</p>
								</div>
							</div>
							<div className="flex gap-3 md:gap-4 items-start">
								<div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 font-semibold text-sm md:text-base">2</div>
								<div>
									<h3 className="text-base md:text-lg font-semibold text-white/90 mb-1">Precision Capture</h3>
									<p className="text-xs sm:text-sm">Autonomous rendezvous and capture mechanisms secure debris of various sizes and shapes without generating additional fragments.</p>
								</div>
							</div>
							<div className="flex gap-3 md:gap-4 items-start">
								<div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 font-semibold text-sm md:text-base">3</div>
								<div>
									<h3 className="text-base md:text-lg font-semibold text-white/90 mb-1">Controlled Deorbit</h3>
									<p className="text-xs sm:text-sm">Safe, predictable reentry ensures complete removal without risk to active satellites or ground infrastructure.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Technology Section */}
			<section id="technology" className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-20">
				<div className="glass grid-premium w-full max-w-4xl p-6 sm:p-8 md:p-12 animate-fade-in-up">
					<p className="mb-3 text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/60">Innovation</p>
					<h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-semibold leading-tight md:text-4xl text-white/90">
						Advanced Technology Stack
					</h2>
					<div className="space-y-4 md:space-y-6 text-white/70">
						<p className="text-sm sm:text-base">
							Our systems leverage cutting-edge technologies to ensure reliable, autonomous operation in the harsh environment of space.
						</p>
						<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
							<div className="p-4 md:p-5 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-sm md:text-base font-semibold text-white/90 mb-2">AI Navigation</h3>
								<p className="text-xs">Machine learning algorithms enable autonomous decision-making and adaptive mission planning.</p>
							</div>
							<div className="p-4 md:p-5 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-sm md:text-base font-semibold text-white/90 mb-2">Multi-Sensor Fusion</h3>
								<p className="text-xs">Combining optical, radar, and lidar systems for comprehensive situational awareness.</p>
							</div>
							<div className="p-4 md:p-5 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-sm md:text-base font-semibold text-white/90 mb-2">Robust Capture</h3>
								<p className="text-xs">Versatile end-effectors designed to handle diverse debris geometries and materials.</p>
							</div>
							<div className="p-4 md:p-5 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-sm md:text-base font-semibold text-white/90 mb-2">Propulsion Systems</h3>
								<p className="text-xs">Efficient, reliable propulsion for precise maneuvering and controlled deorbit.</p>
							</div>
							<div className="p-4 md:p-5 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-sm md:text-base font-semibold text-white/90 mb-2">Mission Autonomy</h3>
								<p className="text-xs">Long-duration autonomous operations with minimal ground intervention required.</p>
							</div>
							<div className="p-4 md:p-5 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-sm md:text-base font-semibold text-white/90 mb-2">Safety Protocols</h3>
								<p className="text-xs">Redundant systems and fail-safe mechanisms ensure mission safety and reliability.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section id="mission" className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-20">
				<div className="glass grid-premium w-full max-w-4xl p-6 sm:p-8 md:p-12 animate-fade-in-up">
					<p className="mb-3 text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/60">Our Purpose</p>
					<h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-semibold leading-tight md:text-4xl text-white/90">
						Mission & Values
					</h2>
					<div className="space-y-4 md:space-y-6 text-white/70">
						<p className="text-base sm:text-lg">
							ZENITH is committed to preserving the space environment for future generations. We believe that space should remain accessible, safe, and sustainable.
						</p>
						<div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
							<div className="p-4 md:p-6 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-lg md:text-xl font-semibold text-white/90 mb-2 md:mb-3">Sustainability</h3>
								<p className="text-xs sm:text-sm">We're building the infrastructure needed to maintain space as a viable environment for centuries to come.</p>
							</div>
							<div className="p-4 md:p-6 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-lg md:text-xl font-semibold text-white/90 mb-2 md:mb-3">Precision</h3>
								<p className="text-xs sm:text-sm">Every mission is executed with meticulous attention to detail, ensuring safety and effectiveness.</p>
							</div>
							<div className="p-4 md:p-6 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-lg md:text-xl font-semibold text-white/90 mb-2 md:mb-3">Innovation</h3>
								<p className="text-xs sm:text-sm">We continuously advance our technology to meet the evolving challenges of space debris remediation.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-20">
				<div className="glass grid-premium w-full max-w-3xl p-6 sm:p-8 md:p-12 animate-fade-in-up">
					<p className="mb-3 text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/60">Get in Touch</p>
					<h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-semibold leading-tight md:text-4xl text-white/90">
						Partner With Us
					</h2>
					<div className="space-y-4 md:space-y-6 text-white/70">
						<p className="text-sm sm:text-base">
							Interested in learning more about our debris remediation solutions? We're always open to discussing partnerships, collaborations, and opportunities to make space safer together.
						</p>
						<div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
							<div className="p-4 md:p-6 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-base md:text-lg font-semibold text-white/90 mb-2">Partnerships</h3>
								<p className="text-xs sm:text-sm mb-3 md:mb-4">Explore collaboration opportunities with satellite operators, space agencies, and industry leaders.</p>
								<a href="mailto:partnerships@zenith.space" className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors underline break-all">
									partnerships@zenith.space
								</a>
							</div>
							<div className="p-4 md:p-6 bg-white/5 rounded-lg border border-white/10">
								<h3 className="text-base md:text-lg font-semibold text-white/90 mb-2">General Inquiries</h3>
								<p className="text-xs sm:text-sm mb-3 md:mb-4">Have questions about our technology or services? We'd love to hear from you.</p>
								<a href="mailto:info@zenith.space" className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors underline break-all">
									info@zenith.space
								</a>
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
									<a href="#problem" className="text-white/70 hover:text-white/90 transition-colors">
										The Problem
									</a>
								</li>
								<li>
									<a href="#solution" className="text-white/70 hover:text-white/90 transition-colors">
										Our Solution
									</a>
								</li>
								<li>
									<a href="#technology" className="text-white/70 hover:text-white/90 transition-colors">
										Technology
									</a>
								</li>
								<li>
									<a href="#mission" className="text-white/70 hover:text-white/90 transition-colors">
										Mission
									</a>
								</li>
								<li>
									<a href="#contact" className="text-white/70 hover:text-white/90 transition-colors">
										Contact
									</a>
								</li>
								<li>
									<a href="/team" className="text-white/70 hover:text-white/90 transition-colors">
										Team
									</a>
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


