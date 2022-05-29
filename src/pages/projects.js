import { motion } from "framer-motion";
import Head from "next/head";
// import Link from "next/link";
// import { FiExternalLink } from "react-icons/fi";

import { PageTitle } from "@/components/common";

import { ProjectCard } from "@/components/projects";
// import { projectsData } from "@/data/projectsData";
import { pageTransitionVariants } from "@/utils/pageTransitionVariants";

const projects = () => {
	console.log("rendering projects");

	return (
		<motion.div variants={pageTransitionVariants} initial="hidden" animate="visible" exit="hidden">
			<Head>
				<title>Projects - EN Portfolio</title>
			</Head>
			<div className="container flex h-full flex-col">
				<PageTitle title="projects" path="/projects" text="Projects" />
				<div className="flex flex-wrap justify-center gap-y-3 rounded-normalRound bg-clrBgComponent py-8 px-6 sm:justify-between">
					<ProjectCard />
					{/* {projectsData.map((data) => {
						return (
							<div
								key={data.id}
								className="box-border w-full max-w-xs  overflow-hidden rounded-2xl bg-clrBgLight sm:w-[calc(100%/2-0.5rem)] lg:w-[calc(100%/3-0.5rem)]"
							>
								<div className="h-[150px] w-full bg-gray-500">{data.image}</div>
								<div className="py-2 px-4">
									<h3 className="mb-1 font-fontSecondary text-xl font-semibold">{data.title}</h3>
									<ul className="mb-2 flex flex-wrap">
										{data.tags.map((tag, index) => {
											return (
												<li key={index} className="flex items-center text-clrPrimary">
													<p className="text-medium whitespace-nowrap text-sm">{tag}</p>
													{tag !== data.tags[data.tags.length - 1] && (
														<span className="px-1 text-xs text-clrGray">/</span>
													)}
												</li>
											);
										})}
									</ul>
									<Link href={data.url}>
										<a
											target="_blank"
											className="ml-auto flex w-fit items-center justify-end gap-1 text-sm text-slate-600 hover:text-clrAccent dark:text-slate-400 dark:hover:text-clrAccent"
										>
											{data.url}
											<FiExternalLink />
										</a>
									</Link>
								</div>
							</div>
						);
					})} */}
				</div>
			</div>
		</motion.div>
	);
};

export default projects;
