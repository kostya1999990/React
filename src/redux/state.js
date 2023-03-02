let state = {
	profilePage: {
		posts: [
			{ id: 1, message: "Hello, My name Kostya", likesCount: 23 },
			{ id: 1, message: "I wont education! I learn React", likesCount: 20 }
		]
	},

	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Kostya' },
			{ id: 2, name: 'Valera' },
			{ id: 3, name: 'Lika' },
			{ id: 4, name: 'Dima' },
			{ id: 5, name: 'Andrey' },
			{ id: 6, name: 'Maks' },
		],
		message: {
			Kostya: [
				{ id: 1, mess: "Hi", own: "my" },
				{ id: 2, mess: "What's app bro? How are you?", own: "enemy" },
				{ id: 3, mess: "I'm good thanks! and you?", own: "my" },
				{ id: 4, mess: "I'm too!", own: "enemy" },
				{ id: 5, mess: "Go in my home!", own: "enemy" },
				{ id: 5, mess: "Of cours! I'll be there in 10 minutes", own: "my" }
			],
			Valera: [
				{ id: 1, mess: "Hi", own: "my" },
				{ id: 2, mess: "What's app bro? How are you?", own: "enemy" },
				{ id: 3, mess: "I'm good thanks! and you?", own: "my" },
				{ id: 4, mess: "I'm too!", own: "enemy" },
				{ id: 5, mess: "Go in my home!", own: "enemy" },
				{ id: 5, mess: "Of cours! I'll be there in 10 minutes", own: "my" }
			],
			Lika: [
				{ id: 1, mess: "Hi", own: "my" },
				{ id: 2, mess: "What's app bro? How are you?", own: "enemy" },
				{ id: 3, mess: "I'm good thanks! and you?", own: "my" },
				{ id: 4, mess: "I'm too!", own: "enemy" },
				{ id: 5, mess: "Go in my home!", own: "enemy" },
				{ id: 5, mess: "Of cours! I'll be there in 10 minutes", own: "my" }
			]
		}
	},
	sidebar: [
		{ id: 1, name: 'Kostya', img: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" },
		{ id: 2, name: 'Valera', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-UhQcg5cpN6U22buS434_oeKDCJLiCFQDIrdu20OfiDckf2_mkuMOIXrCIZvLn-shyE&usqp=CAU" },
		{ id: 3, name: 'Lika', img: "https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk" },
	],

};
export default state;