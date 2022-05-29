import React, { useState, useEffect } from "react";

export const useHandleNavSize = () => {
	const [open, setOpen] = useState(true);

	const toggleOpen = () => setOpen(!open);

	const spToggleClose = () => {
		if (window.matchMedia("(min-width: 768px)").matches) return;
		setOpen(false);
	};

	const closeWithClickOutSideMethod = () => {
		if (window.matchMedia("(min-width: 768px)").matches) {
			return;
		} else {
			setOpen(false);
		}
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = () => {
				if (window.matchMedia("(min-width: 768px)").matches) return;
				setOpen(false);
			};

			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
		} else {
			return;
		}
	}, []);

	return [open, { toggleOpen, spToggleClose, closeWithClickOutSideMethod }];
};
