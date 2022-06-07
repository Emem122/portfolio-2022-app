module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		screens: {
			xs: "375px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			// screens: {
			// 	xs: "375px",
			// },
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
				xs: "1rem",
				md: "1.5rem",
				lg: "1rem",
				xl: "2rem",
			},
		},
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				".container": {
					maxWidth: "100%",
					"@screen sm": {
						maxWidth: "640px",
					},
					"@screen md": {
						maxWidth: "768px",
					},
					"@screen lg": {
						maxWidth: "1280px",
					},
					"@screen xl": {
						maxWidth: "1400px",
					},
				},
			});
		},
	],
};
