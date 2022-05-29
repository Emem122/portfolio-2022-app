import React from "react";

import { SkillsCard } from "./SkillsCard";

export const SkillsCategory = ({ data }) => {
	return (
		<>
			<div key={data.id} className="mb-5 last-of-type:mb-0">
				<h3 className="mb-2 text-lg font-bold text-clrPrimary sm:text-2xl md:mb-3">{data.title}</h3>
				<ul className="flex w-full flex-wrap gap-3 md:gap-4">
					<SkillsCard data={data} />
				</ul>
			</div>
		</>
	);
};
