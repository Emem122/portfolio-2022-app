import { motion } from "framer-motion";
import Head from "next/head";

import { PageTitle } from "@/components/common";

import { ProjectCard } from "@/components/projects";
import { pageTransitionVariants } from "@/utils/pageTransitionVariants";

const projects = () => {
	console.log("rendering projects");

	return (
		<motion.div variants={pageTransitionVariants} initial="hidden" animate="visible" exit="hidden">
			<Head>
				<title>Projects - EN Portfolio</title>
			</Head>
			<div className="container flex h-full flex-col">
				<PageTitle title="demo projects" path="/projects" text="Projects" />
				<div className="flex flex-wrap justify-center gap-y-3 rounded-normalRound bg-clrBgComponent py-3 px-2 xs:py-5 xs:px-3 sm:py-8 sm:px-6">
					<ProjectCard />
				</div>
			</div>
		</motion.div>
	);
};

export default projects;
