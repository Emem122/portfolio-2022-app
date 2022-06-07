import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import { projectsData } from "@/data/projectsData";

export const ProjectCard = () => {
	return (
		<>
			{projectsData.map((data) => {
				return (
					<div
						key={data.id}
						className="box-border w-full max-w-xs px-1 sm:mb-2 sm:w-[calc(100%/2-0.5rem)] md:px-2 lg:w-[calc(100%/3)]"
					>
						<div className="flex h-full flex-col overflow-hidden rounded-2xl bg-clrBgLight shadow-md">
							<Link href={data.url}>
								<a target="_blank" className="group relative">
									<div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-slate-50 bg-opacity-95 font-bold text-clrAccent opacity-0 transition-opacity group-hover:opacity-100">
										サイトを見る
									</div>
									<div className="relative h-[150px] w-full">
										<Image
											src={`/images/${data.image}.png`}
											layout="fill"
											objectFit="cover"
											alt=""
										/>
									</div>
								</a>
							</Link>
							<div className="flex h-full flex-col py-2 px-4">
								<h3 className="font-fontSecondary text-lg font-semibold">{data.title}</h3>
								<ul className="mb-2 flex flex-wrap gap-1">
									{data.tags.map((tag, index) => {
										return (
											// <li key={index} className="flex items-center text-clrPrimary">
											// 	<p className="text-medium whitespace-nowrap text-sm">{tag}</p>
											// 	{tag !== data.tags[data.tags.length - 1] && (
											// 		<span className="px-1 text-xs text-clrGray">/</span>
											// 	)}
											// </li>
											<li key={index} className="flex items-center text-clrPrimary">
												<p className="text-medium whitespace-nowrap rounded-md bg-clrWhiteDark px-2 text-sm">
													{tag}
												</p>
											</li>
										);
									})}
								</ul>

								<div className="mt-auto flex w-full items-center justify-between pt-2">
									<Link href={data.github}>
										<a
											target="_blank"
											className="flex w-fit items-center justify-end gap-1 text-sm text-gray-400 hover:text-clrAccent dark:text-slate-400 dark:hover:text-clrAccent"
										>
											<AiFillGithub />
											<span>github</span>
										</a>
									</Link>
									<Link href={data.url}>
										<a
											target="_blank"
											className="flex w-fit items-center justify-end gap-1 text-sm text-gray-400 transition-colors hover:text-clrAccent"
										>
											<span>go to site</span>
											<FiExternalLink />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
