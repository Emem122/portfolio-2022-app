import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

export const PageTitle = ({ title, path, text }) => {
	const router = useRouter();
	const currentPath = router.pathname;
	const [isButtonHover, setIsButtonHover] = useState(false);

	const handleMouseOver = () => {
		setIsButtonHover(true);
	};
	const handleMouseLeave = () => {
		setIsButtonHover(false);
	};

	const arrowVariants = {
		hidden: {
			x: 0,
		},
		visible: {
			x: 5,
		},
	};

	return (
		<div className="mb-3 flex items-center justify-between">
			<h2 className="font-fontSecondary text-3xl font-black uppercase text-clrPrimary md:text-5xl">
				{title}
			</h2>
			{/* next button */}
			{currentPath !== "/projects" && (
				<div className="hidden xs:block">
					<Link href={path}>
						<motion.a
							className="flex cursor-pointer items-center rounded-md bg-clrAccent px-3 py-1 pl-4 font-fontSecondary font-bold text-white md:text-xl"
							onMouseOver={handleMouseOver}
							onMouseLeave={handleMouseLeave}
						>
							{text}
							<motion.div
								className="text-2xl text-white"
								variants={arrowVariants}
								animate={isButtonHover ? "visible" : "hidden"}
							>
								<MdOutlineNavigateNext />
							</motion.div>
						</motion.a>
					</Link>
				</div>
			)}
		</div>
	);
};

// export default PageTitle;
