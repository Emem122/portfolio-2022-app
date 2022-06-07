// import { AnimatePresence } from "framer-motion";
import { Router, useRouter } from "next/router";
import NProgress from "nprogress";
import { useState, useEffect } from "react";

import { Navbar, Header } from "@/components/common";

import { useHandleNavSize } from "@/hooks";

export const Layout = ({ children }) => {
	// navのカスタムHooks
	const [open, { toggleOpen, spToggleClose, closeWithClickOutSideMethod }] = useHandleNavSize();

	// scroll top when page changed
	const { pathname } = useRouter();
	useEffect(() => {
		main.scrollTo(0, 0);
	}, [pathname]);

	// loader
	Router.events.on("routeChangeStart", () => NProgress.start());
	Router.events.on("routeChangeComplete", () => NProgress.done());
	Router.events.on("routeChangeError", () => NProgress.done());
	NProgress.configure({ parent: "#main" });

	// navigation
	// const [open, setOpen] = useState(true);

	// const toggleOpen = () => setOpen(!open);

	// const spToggleClose = () => {
	// 	if (window.matchMedia("(min-width: 768px)").matches) return;
	// 	setOpen(false);
	// };

	// const closeWithClickOutSideMethod = () => {
	// 	if (window.matchMedia("(min-width: 768px)").matches) {
	// 		return;
	// 	} else {
	// 		setOpen(false);
	// 	}
	// };

	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		const handleResize = () => {
	// 			if (window.matchMedia("(min-width: 768px)").matches) return;
	// 			setOpen(false);
	// 		};

	// 		window.addEventListener("resize", handleResize);
	// 		handleResize();
	// 		return () => window.removeEventListener("resize", handleResize);
	// 	} else {
	// 		return;
	// 	}
	// }, []);

	return (
		<div className="bg-gradient h-screen w-full p-1 py-3 md:p-6 xl:px-7">
			<div className="relative mx-auto flex h-full max-w-[1280px] rounded-xl bg-clrBg p-3 pl-0 pr-1 shadow-lg md:p-5">
				<Navbar toggleOpen={toggleOpen} spToggleClose={spToggleClose} open={open} />
				<div className="flex w-full flex-col pl-12 sm:pl-14 md:pl-0">
					<Header />
					<main
						id="main"
						className="h-full overflow-y-auto pt-2"
						onClick={() => closeWithClickOutSideMethod()}
					>
						{children}
					</main>
				</div>
			</div>
		</div>
	);
};

// export default Layout;
