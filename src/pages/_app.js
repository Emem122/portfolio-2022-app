import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

import { Layout } from "@/components/Layout";

import "@/styles/nprogress.css";
import "@/styles/globals.css";

function MyApp({ Component, pageProps, router }) {
	console.log("rendering _app");

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/images/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<ThemeProvider attribute="class" defaultTheme="light">
				<Layout>
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.route} />
					</AnimatePresence>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
