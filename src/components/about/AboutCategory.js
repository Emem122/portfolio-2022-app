import React from "react";

import style from "@/styles/About.module.css";

import { CheckBlock } from "./CheckBlock";

export const AboutCategory = ({ data }) => {
	return (
		<>
			<div className="rounded-xl bg-clrBgComponent py-3 px-4 md:py-4 md:px-6">
				<h3 className="mb-2 text-xl font-bold text-clrPrimary md:text-2xl">{data.title}</h3>
				<div className={`${data.img && "flex flex-col gap-3 sm:flex-row"}`}>
					{data.img && <div className="h-[100px] w-[100px] flex-shrink-0 bg-gray-400">img</div>}
					<CheckBlock data={data} />
				</div>
			</div>
		</>
	);
};
