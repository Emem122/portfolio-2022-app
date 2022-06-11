import { motion } from "framer-motion";
import React from "react";

export const CheckBlock = ({ data }) => {
	return (
		<>
			<div>
				{data.lists.map((list, index) => {
					return (
						<div key={index} className="mb-2 last-of-type:mb-0">
							{list?.listDate && (
								<p className="font-fontSecondary text-xs font-semibold tracking-wider text-clrAccent">
									{list.listDate}
								</p>
							)}
							<div className="flex items-start gap-2">
								<div className="relative mt-1 h-[15px] w-[15px] shrink-0 rounded-sm border-[1px] border-clrText md:h-[20px] md:w-[20px]">
									{list?.checked && (
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
												transition={{ duration: 0.4, delay: 0.5 * index }}
											/>
										</svg>
									)}
								</div>
								<h4 className="mb-1 text-sm md:text-base">{list.listTitle}</h4>
							</div>
							<ul>
								{list?.listDetail?.map((detail, index) => {
									return (
										<li
											key={index}
											className="mb-1 ml-2 flex text-sm leading-relaxed text-clrPrimary sm:ml-7"
										>
											<div className="mr-2 mt-2 h-[5px] w-[5px] shrink-0 rounded-full bg-clrPrimary"></div>
											<p className="text-xs md:text-sm">{detail}</p>
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
