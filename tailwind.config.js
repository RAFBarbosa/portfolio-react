/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontSize: {
			xs: 10,
			sm: 12,
			md: 14,
			lg: 24,
			xl: 28,
			"2xl": 46,
			"3xl": 100,
			"4xl": 200,
		},
		colors: {
			transparent: "transparent",
			black: "#000",
			white: "#fff",
			green: "#BFFF38",
			gray: "#C4C4C4",

			purple: {
				200: "linear-gradient(106.75deg, #5B3EF2 -15.38%, rgba(91, 62, 242, 0.1) 58.41%)",
				500: "#5B3EF2",
				600: "#171040",
				900: "#100B2C",
			},
		},
		extend: {
			fontFamily: {
				sans: "Roboto, sans-serif",
			},
		},
	},
	plugins: [],
};
