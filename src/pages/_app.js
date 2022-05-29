import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

import { Layout } from "@/components/Layout";

import "@/styles/nprogress.css";
import "@/styles/globals.css";

function MyApp({ Component, pageProps, router }) {
	console.log("rendering _app");
	return (
		<ThemeProvider attribute="class" defaultTheme="light">
			<Layout>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
