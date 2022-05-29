import { motion } from "framer-motion";
import React from "react";

export const CheckBlock = ({ data }) => {
	return (
		<>
			<div>
				{data.lists.map((list, index) => {
					return (
						<div key={index} className="mb-2 last-of-type:mb-0">
							<div className="flex items-start gap-2">
								<div className="relative mt-1 h-[15px] w-[15px] shrink-0 rounded-sm border-[1px] border-clrText md:h-[20px] md:w-[20px]">
									{list.checked && (
										<svg
											className="absolute bottom-[2px] h-[15px] w-[20px] md:h-[19px] md:w-[24px]"
											viewBox="0 0 24 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<motion.path
												d="M1.5 10.5L8.5 16.5L22.5 1.5"
												stroke="#3FC1C9"
												strokeWidth="3"
												initial={{ opacity: 0, pathLength: 0 }}
												animate={{ opacity: 1, pathLength: 1 }}
												transition={{ duration: 0.5, delay: 0.8 * index }}
											/>
										</svg>
									)}
								</div>
								<div className="flex items-center">
									<h4 className="md:text-lg">{list.listTitle}</h4>
									{!list.checked && (
										<div className="ml-2 h-fit rounded-md bg-clrAccent px-2 text-sm text-white">
											next goal
										</div>
									)}
								</div>
							</div>
							<ul>
								{list.listDetail.map((detail, index) => {
									return (
										<li key={index} className="ml-7 flex text-sm leading-relaxed text-clrPrimary">
											<div className="mr-2 mt-2 h-[5px] w-[5px] shrink-0 rounded-full bg-clrPrimary"></div>
											<p>{detail}</p>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</>
	);
};
