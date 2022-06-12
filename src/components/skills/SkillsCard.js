import React from "react";

export const SkillsCard = ({ data }) => {
	return (
		<>
			{data.languages.map((lang, index) => {
				return (
					<li
						key={index}
						className="flex w-full items-start gap-2 rounded-lg bg-clrBgLight p-2 shadow-sm lg:w-[calc(50%-1rem)]"
					>
						<div className="mt-1 text-3xl" style={{ color: lang.color }}>
							{lang.icon}
						</div>
						<div>
							<h4 className="font-semibold text-clrText sm:text-lg">{lang.name}</h4>
							<ul>
								{lang.details.map((detail, index) => {
									return (
										<li
											key={index}
											className="mb-1 pr-5 pl-[1em] indent-[-1.2em] text-xs text-clrPrimary last-of-type:mb-0 md:text-sm"
										>
											ー {detail}
										</li>
									);
								})}
							</ul>
						</div>
					</li>
				);
			})}
		</>
	);
};
