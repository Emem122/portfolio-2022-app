import Link from "next/link";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

export const SpBottomNextButton = ({ text, path }) => {
	return (
		<div className="flex justify-center md:hidden">
			<Link href={path}>
				<a className="mt-3 mb-2 flex items-center justify-center gap-1 rounded-md bg-clrAccent py-1 px-4 text-sm font-semibold text-clrWhite shadow-md">
					{text}
					<MdOutlineNavigateNext />
				</a>
			</Link>
		</div>
	);
};
