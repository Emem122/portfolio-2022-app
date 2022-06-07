import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { FaLaptopCode, FaHome, FaUserAlt, FaWindowRestore } from "react-icons/fa";

export const Navbar = ({ spToggleClose, toggleOpen, open }) => {
	const router = useRouter();
	const currentPath = router.pathname;

	const navData = [
		{ name: "home", path: "/", icon: <FaHome /> },
		{ name: "about", path: "/about", icon: <FaUserAlt /> },
		{ name: "skills", path: "/skills", icon: <FaLaptopCode /> },
		{ name: "projects", path: "/projects", icon: <FaWindowRestore /> },
	];
	console.log("rendering nav");

	return (
		<div
			className={`absolute top-0 mr-1 flex h-full flex-col gap-3 rounded-l-xl pt-3 transition-all md:top-0 ${
				open && "bg-clrBg pr-3 md:bg-transparent"
			} z-10 px-1 md:relative md:h-auto md:p-0`}
		>
			<div className="ml-2 w-fit cursor-pointer select-none text-3xl" onClick={toggleOpen}>
				<CgMenuLeft />
			</div>
			<ul className="flex flex-col gap-2">
				{navData.map((data) => {
					return (
						<li key={data.name} className="w-fit">
							<Link href={data.path}>
								<a
									onClick={spToggleClose}
									className={`relative flex items-center gap-1 py-1 px-2 font-medium text-clrText transition-all duration-300 dark:text-clrWhiteDark xs:px-3 ${
										currentPath === data.path && "text-clrBg dark:text-clrBg"
									}`}
								>
									{currentPath === data.path ? (
										<motion.div
											layout
											className="rounded-3xl"
											style={{
												position: "absolute",
												width: "100%",
												height: "100%",
												background: "var(--clr-text)",
												zIndex: -1,
												left: 0,
												top: 0,
											}}
											layoutId="activeBG"
										></motion.div>
									) : null}
									<div className="select-none py-1 text-lg xs:text-xl">{data.icon}</div>
									{open && (
										<motion.p
											initial={{ x: -50, width: 0, opacity: 0 }}
											animate={{ x: 0, width: "100%", opacity: 1 }}
											className={`inline-block select-none font-fontSecondary text-xl uppercase`}
										>
											{data.name}
										</motion.p>
									)}
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

// export default Navbar;
