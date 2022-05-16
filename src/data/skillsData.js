import { DiCss3, DiHtml5, DiJqueryLogo, DiReact } from "react-icons/di";
import { SiGreensock, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { v4 as uuidv4 } from "uuid";

export const skillsData = [
  {
    id: uuidv4(),
    title: "仕事で使用経験のある言語",
    languages: [
      {
        name: "HTML",
        icon: <DiHtml5 />,
        details: ["how to used", "when I used..."],
        color: "#D84924",
        // style={{ color: "#D84924" }}
      },
      {
        name: "CSS",
        icon: <DiCss3 />,
        details: ["how to used", "when I used..."],
        color: "#318EE7",
      },
      {
        name: "jQuery",
        icon: <DiJqueryLogo />,
        details: ["how to used", "when I used..."],
        color: "#2063A3",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "個人で学習している言語・技術",
    languages: [
      {
        name: "React",
        icon: <DiReact />,
        color: "#5CCFEE",
        details: ["how to used", "when I used..."],
      },
      {
        name: "GSAP",
        icon: <SiGreensock strokeWidth="0.5px" />,
        color: "#80C301",
        details: ["how to used", "when I used..."],
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        color: "#38ADC9",
        details: ["how to used", "when I used..."],
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "#000000",
        details: ["how to used", "when I used..."],
      },
    ],
  },
];
