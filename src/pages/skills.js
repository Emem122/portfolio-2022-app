import { motion } from "framer-motion";
import Head from "next/head";

import { PageTitle } from "@/components/common";

import { SkillsCategory } from "@/components/skills";
import { skillsWorkData, skillsLearningData } from "@/data/skillsData";
import { pageTransitionVariants } from "@/utils/pageTransitionVariants";

const skills = () => {
	console.log("rendering skills");

	return (
		<motion.div variants={pageTransitionVariants} initial="hidden" animate="visible" exit="hidden">
			<Head>
				<title>Skills - EN Portfolio</title>
			</Head>
			<div className="container flex h-full flex-col">
				<PageTitle title="skills" path="/projects" text="Projects" />

				<div className="rounded-normalRound bg-clrBgComponent py-3 px-4 md:py-4 md:px-6">
					<SkillsCategory data={skillsWorkData} />
					<SkillsCategory data={skillsLearningData} />
				</div>
			</div>
		</motion.div>
	);
};

export default skills;
