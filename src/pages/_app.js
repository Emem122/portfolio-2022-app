import { AnimatePresence } from "framer-motion";

import Layout from "@/components/layout";

import "@/styles/nprogress.css";
import "@/styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
