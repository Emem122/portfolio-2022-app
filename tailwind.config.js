module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				clrPrimary: "var(--clr-primary)",
				clrSecondary: "var(--clr-secondary)",
				clrAccent: "var(--clr-accent)",
				clrBg: "var(--clr-bg)",
				clrBgComponent: "var(--clr-bg-component)",
				clrBgLight: "var(--clr-bg-light)",
				clrText: "var(--clr-text)",
				clrWhite: "var(--clr-white)",
				clrWhiteDark: "var(--clr-white-dark)",
				clrWhiteLight: "var(--clr-white-light)",
				clrBlack: "var(--clr-black)",
				clrGray: "var(--clr-gray)",
				clrDarkBg: "var(--clr-dark-bg)",
			},
			fontFamily: {
				fontPrimary: "var(--ff-primary)",
				fontSecondary: "var(--ff-secondary)",
			},
			borderRadius: {
				normalRound: "var(--normalRound)",
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "10px",
				sm: "1rem",
				md: "1.5rem",
				lg: "1rem",
				xl: "2rem",
			},
		},
	},
	plugins: [],
};
