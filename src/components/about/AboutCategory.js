import ExportedImage from "next-image-export-optimizer";
import React from "react";

import { CheckBlock } from "./CheckBlock";

export const AboutCategory = ({ data }) => {
	return (
		<>
			<div className="rounded-xl bg-clrBgComponent py-3 px-4 md:py-4 md:px-6">
				<h3 className="mb-2 text-xl font-bold text-clrPrimary md:text-2xl">{data.title}</h3>
				<div className={`${data.img && "flex flex-col gap-3 sm:flex-row"}`}>
					{data.img && (
						<div className="relative h-[130px] w-[130px] flex-shrink-0">
							<ExportedImage
								src={`/images/${data.img}.jpg`}
								layout="fill"
								objectFit="cover"
								alt=""
							/>
						</div>
					)}
					<CheckBlock data={data} />
				</div>
			</div>
		</>
	);
};
