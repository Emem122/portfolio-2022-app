import { v4 as uuidv4 } from "uuid";

// export const aboutData = [
// 	{
// 		id: uuidv4(),
// 		title: "プロフィール",
// 		img: " ",
// 		lists: [
// 			{
// 				checked: true,
// 				listTitle: "プロフィールの一つ",
// 				listDetail: ["プロフィールの詳細", "プロフィールの詳細2"],
// 			},
// 			{
// 				checked: true,
// 				listTitle: "プロフィールの一つ",
// 				listDetail: ["プロフィールの詳細", "プロフィールの詳細2"],
// 			},
// 		],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "学生時代",
// 		lists: [
// 			{
// 				checked: true,
// 				listTitle: "学生時代の一つ",
// 				listDetail: ["学生時代の詳細", "学生時代の詳細2"],
// 			},
// 			{
// 				checked: true,
// 				listTitle: "学生時代の一つ",
// 				listDetail: ["学生時代の詳細", "学生時代の詳細2"],
// 			},
// 		],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "経歴",
// 		lists: [
// 			{
// 				checked: true,
// 				listTitle: "経歴の一つ",
// 				listDetail: ["経歴の詳細", "経歴の詳細2"],
// 			},
// 			{
// 				checked: true,
// 				listTitle: "経歴の一つ",
// 				listDetail: ["経歴の詳細", "経歴の詳細2"],
// 			},
// 			{
// 				checked: false,
// 				listTitle: "経歴の一つ",
// 				listDetail: ["経歴の詳細", "経歴の詳細2"],
// 			},
// 		],
// 	},
// ];

export const aboutProfileData = {
	id: uuidv4(),
	title: "プロフィール",
	img: " ",
	lists: [
		{
			checked: true,
			listTitle: "趣味は国内外の旅行",
			listDetail: ["海外ではカナダとオーストラリア、国内では岡山と北海道がお気に入り。"],
		},
		// {
		// 	checked: true,
		// 	listTitle: "海外ドラマと共に成長",
		// 	listDetail: [
		// 		"中学生の頃から様々な海外ドラマを視聴。",
		// 		"海外への興味や英語を学ぶきっかけとなった。",
		// 	],
		// },
	],
};

export const aboutSchoolData = {
	id: uuidv4(),
	title: "学生時代",
	lists: [
		{
			checked: true,
			listDate: "2016/04 ~ 2020/03",
			listTitle: "甲南大学・英語英米文学科へ入学",
			listDetail: [
				"基本的な英語力を身につけた。",
				"現代アメリカ文学を専攻し、卒業論文ではブローティガンの『西瓜糖の日々』をテーマとした。",
			],
		},
		{
			checked: true,
			listDate: "2018/04 ~ 2018/12",
			listTitle: "カナダ・ビクトリアへ留学",
			listDetail: [
				"様々な国からきた留学生と関わり、異文化への理解を深めた。",
				"第二言語で生活することにより、コミュニケーションの重要性を再認識した。",
				"現地の大学生と共に大学の授業を受講し英語力が向上。",
			],
		},
	],
};

export const aboutWorkData = {
	id: uuidv4(),
	title: "経歴",
	lists: [
		{
			checked: true,
			listDate: "2020/04 ~ 2020/10",
			listTitle: "新卒で特許事務所に事務として就職",
			listDetail: [
				"仕事内容は主に特許の期限管理や書類作成などを担当。",
				"本来の希望であった英語をあまり活かせていないと感じ、キャリアチェンジを考えた。",
			],
		},
		{
			checked: true,
			listDate: "2020/11 ~ 2021/04",
			listTitle: "職業訓練校のWEB制作科を受講",
			listDetail: [
				"転職を考えた結果、WEBデザインを学習し本格的にこの道へ進むため訓練校へ通うことを決断。",
				"デザイン（色彩やPhotoShop / Illustrator）とコーディング（HTML / CSS / jQuery）の基礎を学んだ。",
				"卒業制作では5ページのホテルデモサイトを作成。",
			],
		},
		{
			checked: true,
			listDate: "2021/06 ~ 現在",
			listTitle: "WEB制作会社にてECサイトコーダーとして勤務",
			listDetail: [
				"主な仕事内容はECサイトのページ更新や、新規ページの作成など。",
				"技術としてはHTML / SCSS / jQueryをメインに使用。",
				"ECサイト以外にも、他企業のキャンペーンページや新事業のLPなども担当。",
			],
		},
	],
};
