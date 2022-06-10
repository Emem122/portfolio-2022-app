import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

import { PageTitle } from "@/components/common";

import { AboutCategory } from "@/components/about";
import { aboutProfileData, aboutSchoolData, aboutWorkData } from "@/data/aboutData";
import { pageTransitionVariants } from "@/utils/pageTransitionVariants";

const about = () => {
	return (
		<motion.div variants={pageTransitionVariants} initial="hidden" animate="visible" exit="hidden">
			<Head>
				<title>About - EN Portfolio</title>
			</Head>
			<div className="container">
				<PageTitle title="about me" path="/skills" text="Skills" />
				<div className="flex flex-col gap-2 lg:flex-row">
					<AboutCategory data={aboutWorkData} />
					<div className="flex flex-col gap-2">
						<AboutCategory data={aboutProfileData} />
						<AboutCategory data={aboutSchoolData} />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default about;
