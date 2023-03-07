
let store = {

	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hello, My name Kostya", likesCount: 23 },
				{ id: 2, message: "I wont education! I learn React", likesCount: 20 }
			],
			newPostText: ''
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
					{ id: 1, mess: "YOYOYO PRIVET", own: "my" },
					{ id: 2, mess: "What is PRIVET?", own: "enemy" },
					{ id: 3, mess: "azazaza", own: "my" },
					{ id: 4, mess: "I'm don't understand ou", own: "enemy" },
					{ id: 5, mess: "eto prikolno", own: "enemy" },
					{ id: 5, mess: "Net, ne prikolno", own: "my" }
				],
				Lika: [
					{ id: 1, mess: "Hi", own: "my" },
					{ id: 2, mess: "What's app bro? How are you?", own: "enemy" },
					{ id: 3, mess: "I'm good thanks! and you?", own: "my" },
					{ id: 4, mess: "I'm too!", own: "enemy" },
					{ id: 5, mess: "Go in my home!", own: "enemy" },
					{ id: 5, mess: "Of cours! I'll be there in 10 minutes", own: "my" }
				]
			},
			newMessage: 'new Message'
		},
		sidebar: [
			{ id: 1, name: 'Kostya', img: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" },
			{ id: 2, name: 'Valera', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-UhQcg5cpN6U22buS434_oeKDCJLiCFQDIrdu20OfiDckf2_mkuMOIXrCIZvLn-shyE&usqp=CAU" },
			{ id: 3, name: 'Lika', img: "https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk" },
		]

	},
	getState() {
		return this._state;
	},
	_rerenderEntireTree() { },
	addPost() {
		let newPost = {
			id: 3,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._rerenderEntireTree(this._state);
	},
	addMessage() {
		let newMess = {
			id: 6,
			mess: this._state.dialogsPage.newMessage,
			own: "my"
		};
		this._state.dialogsPage.message.Kostya.push(newMess);
		this._state.dialogsPage.newMessage = '';
		this._rerenderEntireTree(this._state);

	},
	funcNewPostText(text) {
		this._state.profilePage.newPostText = text;
		this._rerenderEntireTree(this._state);
	},
	funcNewMessage(text) {
		this._state.dialogsPage.newMessage = text;
		this._rerenderEntireTree(this._state);
	},
	subscribe(observer) {
		this._rerenderEntireTree = observer;
	}

}

export default store;