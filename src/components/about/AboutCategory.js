import React from "react";

import style from "@/styles/About.module.css";

import { CheckBlock } from "./CheckBlock";

export const AboutCategory = ({ data }) => {
	return (
		<>
			<div className={style.aboutGridContent}>
				<h3 className="mb-2 text-xl font-bold text-clrPrimary md:text-2xl">{data.title}</h3>
				<div className={`${data.img && "flex flex-col gap-3 sm:flex-row"}`}>
					{data.img && <div className="h-[150px] w-[150px] bg-gray-400">img</div>}
					<CheckBlock data={data} />
				</div>
			</div>
		</>
	);
};
