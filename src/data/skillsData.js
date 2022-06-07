import { DiCss3, DiHtml5, DiJqueryLogo, DiReact } from "react-icons/di";
import { SiGreensock, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { v4 as uuidv4 } from "uuid";

// export const skillsData = [
// 	{
// 		id: uuidv4(),
// 		title: "仕事で使用経験のある言語",
// 		languages: [
// 			{
// 				name: "HTML",
// 				icon: <DiHtml5 />,
// 				details: ["how to used", "when I used..."],
// 				color: "#D84924",
// 				// style={{ color: "#D84924" }}
// 			},
// 			{
// 				name: "CSS",
// 				icon: <DiCss3 />,
// 				details: ["how to used", "when I used..."],
// 				color: "#318EE7",
// 			},
// 			{
// 				name: "jQuery",
// 				icon: <DiJqueryLogo />,
// 				details: ["how to used", "when I used..."],
// 				color: "#2063A3",
// 			},
// 		],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "個人で学習している言語・技術",
// 		languages: [
// 			{
// 				name: "React",
// 				icon: <DiReact />,
// 				color: "#5CCFEE",
// 				details: ["how to used", "when I used..."],
// 			},
// 			{
// 				name: "GSAP",
// 				icon: <SiGreensock strokeWidth="0.5px" />,
// 				color: "#80C301",
// 				details: ["how to used", "when I used..."],
// 			},
// 			{
// 				name: "Tailwind",
// 				icon: <SiTailwindcss />,
// 				color: "#38ADC9",
// 				details: ["how to used", "when I used..."],
// 			},
// 			{
// 				name: "Next.js",
// 				icon: <SiNextdotjs />,
// 				color: "#000000",
// 				details: ["how to used", "when I used..."],
// 			},
// 		],
// 	},
// ];

export const skillsWorkData = {
	id: uuidv4(),
	title: "仕事で使用経験のある言語",
	languages: [
		{
			name: "HTML",
			icon: <DiHtml5 />,
			details: ["SEOを考えた構成を意識", "更新を意識した簡潔なコードを心がけている"],
			color: "#D84924",
		},
		{
			name: "SCSS/CSS",
			icon: <DiCss3 />,
			details: [
				"BEMを使用した効率的な記述が可能",
				"変数などを使用し更新・変更時の効率アップを行う",
			],
			color: "#318EE7",
		},
		{
			name: "jQuery",
			icon: <DiJqueryLogo />,
			details: [
				"タブ・アコーディオン・ハンバーガーメニューなど基本的な要素の作成が可能",
				"レスポンシブでの切り替えなどでも使用",
			],
			color: "#2063A3",
		},
	],
};

export const skillsLearningData = {
	id: uuidv4(),
	title: "個人で学習している言語・技術",
	languages: [
		{
			name: "React",
			icon: <DiReact />,
			color: "#5CCFEE",
			details: [
				"styled-components・TailwindCSSなどでのスタイリングが可能",
				"framer-motionでのアニメーションも取り入れている",
				"bulletproof-reactを参考にディレクトリ構造を模索中",
			],
		},
		{
			name: "GSAP",
			icon: <SiGreensock strokeWidth="0.5px" />,
			color: "#80C301",
			details: [
				"主にHTML/CSS/JSで制作をする際に使用",
				"スクロールで表示させるアニメーションやタイムラインを用いたメインビジュアルのアニメーションなどが可能",
			],
		},
		{
			name: "Tailwind",
			icon: <SiTailwindcss />,
			color: "#38ADC9",
			details: [
				"当ポートフォリオのスタイリングで採用",
				"tailwindを用いたダークモードの設定を行なっている",
				"configでのカスタマイズが可能",
			],
		},
		{
			name: "Next.js",
			icon: <SiNextdotjs />,
			color: "#000000",
			details: ["当ポートフォリオにはNext.jsを採用", "公式推奨のCSS modulesやemotionの使用が可能"],
		},
	],
};
