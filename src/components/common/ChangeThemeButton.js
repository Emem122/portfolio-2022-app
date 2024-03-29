import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";

export const ChangeThemeButton = () => {
	const { theme, setTheme } = useTheme();
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setIsDark(theme === "light" ? false : true);
	}, [theme]);

	const toggleTheme = () => {
		if (theme === "dark") {
			setTheme("light");
			setIsDark(false);
		} else {
			setTheme("dark");
			setIsDark(true);
		}
	};

	return (
		<>
			<div
				className="toggle-theme relative mr-3 flex w-[52px] cursor-pointer justify-start rounded-full bg-clrBgComponent p-1"
				onClick={() => toggleTheme()}
				data-isdark={isDark}
			>
				<BsFillMoonStarsFill className="absolute left-[5px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 fill-amber-500" />
				<RiSunFill className="absolute right-[5px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 fill-amber-500" />
				<motion.div
					className="z-10 h-[22px] w-[22px] rounded-full bg-clrSecondary"
					layout
					transition={{ type: "spring", stiffness: 700, damping: 30 }}
				></motion.div>
			</div>
		</>
	);
};
