/* Animated starfield with multiple layers and parallax movement */
"use client";

import { memo, useMemo, useState, useEffect } from "react";

function generateBoxShadows(count: number, spread: number) {
	const points: string[] = [];
	for (let i = 0; i < count; i += 1) {
		const x = Math.floor(Math.random() * spread);
		const y = Math.floor(Math.random() * spread);
		const brightness = Math.random() * 0.5 + 0.5; // Vary star brightness
		points.push(`${x}px ${y}px rgba(255,255,255,${brightness})`);
	}
	return points.join(", ");
}

function Layer({
	count,
	size,
	opacity,
	duration,
	blur,
	delay = 0,
	direction = 1
}: {
	count: number;
	size: number;
	opacity: number;
	duration: number;
	blur?: number;
	delay?: number;
	direction?: number;
}) {
	const spread = 3000;
	const boxShadow = useMemo(() => generateBoxShadows(count, spread), [count]);
	return (
		<div
			className="absolute inset-[-3000px] will-change-transform"
			style={{
				animation: `drift ${duration}s linear infinite`,
				animationDelay: `${delay}s`,
				transform: `scale(${direction})`
			}}
		>
			<div
				style={{
					width: size,
					height: size,
					boxShadow,
					opacity,
					filter: blur ? `blur(${blur}px)` : undefined,
					animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
					animationDelay: `${Math.random() * 2}s`
				}}
			/>
		</div>
	);
}

function Stars() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" />;
	}

	return (
		<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
			{/* Deep space layer - slowest, most stars */}
			<Layer count={1200} size={1} opacity={0.9} duration={200} delay={0} direction={1} />
			<Layer count={800} size={1} opacity={0.7} duration={240} delay={20} direction={1} />
			
			{/* Mid layer - medium speed */}
			<Layer count={500} size={2} opacity={0.6} duration={180} delay={10} blur={0.3} />
			<Layer count={300} size={2} opacity={0.5} duration={220} delay={30} blur={0.4} />
			
			{/* Near layer - faster movement, larger stars */}
			<Layer count={200} size={3} opacity={0.4} duration={150} delay={5} blur={0.5} />
			<Layer count={100} size={4} opacity={0.3} duration={130} delay={15} blur={0.6} />
			
			{/* Bright stars layer */}
			<Layer count={50} size={2} opacity={0.8} duration={160} delay={0} />
		</div>
	);
}

export default memo(Stars);


