export default function ZenithMark(props: { className?: string }) {
	const { className } = props;
	return (
		<svg
			viewBox="0 0 512 512"
			aria-hidden="true"
			className={className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="256" cy="256" r="168" stroke="white" strokeWidth="20" />
			<path d="M64 420L448 92" stroke="white" strokeWidth="20" strokeLinecap="round" />
		</svg>
	);
}


