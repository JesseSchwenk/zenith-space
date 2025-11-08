import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#05060a",
				foreground: "#e7e9ee"
			},
			boxShadow: {
				glass:
					"0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 80px rgba(255,255,255,0.04)"
			},
			animation: {
				"float-slow": "float 12s ease-in-out infinite",
				"pulse-slow": "pulse 6s ease-in-out infinite",
				twinkle: "twinkle 2.5s linear infinite",
				drift: "drift 120s linear infinite"
			},
			keyframes: {
				float: {
					"0%,100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-8px)" }
				},
				twinkle: {
					"0%,100%": { opacity: "0.8" },
					"50%": { opacity: "0.25" }
				},
				drift: {
					"0%": { transform: "translate3d(0,0,0)" },
					"100%": { transform: "translate3d(-2000px,-2000px,0)" }
				}
			}
		}
	},
	plugins: []
};

export default config;


