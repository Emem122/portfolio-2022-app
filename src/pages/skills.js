import { motion } from "framer-motion";
import Head from "next/head";

import PageTitle from "@/components/PageTitle";
import { skillsData } from "@/data/skillsData";
import { pageTransitionVariants } from "@/utils/pageTransitionVariants";

const skills = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Head>
        <title>Skills - EN Portfolio</title>
      </Head>
      <div className="container flex h-full flex-col">
        <PageTitle title="skills" path="/projects" text="Projects" />

        <div className="rounded-normalRound bg-white py-3 px-4 md:py-4 md:px-6">
          {skillsData.map((data) => {
            return (
              <div key={data.id} className="mb-5 last-of-type:mb-0">
                <h3 className="mb-2 text-lg font-bold text-clrPrimary sm:text-2xl md:mb-3">
                  {data.title}
                </h3>
                <ul className="flex w-full flex-wrap gap-3 md:gap-4">
                  {data.languages.map((lang, index) => {
                    return (
                      <li
                        key={index}
                        className="flex w-full items-start gap-2 rounded-lg bg-clrWhiteLight p-2 lg:w-[calc(50%-1rem)]"
                      >
                        <div
                          className="mt-1 text-3xl"
                          style={{ color: lang.color }}
                        >
                          {lang.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-clrBlack sm:text-lg">
                            {lang.name}
                          </h4>
                          <ul>
                            {lang.details.map((detail, index) => {
                              return (
                                <li
                                  key={index}
                                  className="text-sm text-clrPrimary"
                                >
                                  ー {detail}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default skills;
