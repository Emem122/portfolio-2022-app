// import Navbar from "./Navbar";
import { motion } from "framer-motion";

// import ChangeThemeButton from "./ChangeThemeButton";

import { ChangeThemeButton } from "@/components/common";

export const Header = () => {
	return (
		<>
			<motion.header
				className="mb-1 flex items-center justify-between"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<h1 className="select-none text-xl font-extrabold uppercase text-clrSecondary md:text-2xl">
					en portfolio
				</h1>
				<ChangeThemeButton />
			</motion.header>
		</>
	);
};

// export default Header;
