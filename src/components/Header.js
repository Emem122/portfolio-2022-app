// import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
	return (
		<>
			<motion.header
				className="mb-1"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<h1 className="select-none text-xl font-extrabold uppercase text-clrSecondary md:text-2xl">
					en portfolio
				</h1>
			</motion.header>
		</>
	);
};

export default Header;
