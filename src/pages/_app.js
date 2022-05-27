import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

import Layout from "@/components/layout";

import "@/styles/nprogress.css";
import "@/styles/globals.css";

function MyApp({ Component, pageProps, router }) {
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
