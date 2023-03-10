const ADD_MESSAGE = 'ADD-MESSAGE'
const FUNC_NEW_MESSAGE = 'FUNC-NEW-MESSAGE'


let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE:
			let newMess = {
				id: 6,
				mess: state.newMessage,
				own: "my"
			};
			state.message.Kostya.push(newMess);
			state.newMessage = '';
			return state;
		case FUNC_NEW_MESSAGE:
			state.newMessage = action.text;
			return state;
		default:
			return state;
	}
}

export const funcNewMessageActionCreator = (text) => {
	return {
		type: FUNC_NEW_MESSAGE,
		text: text
	}
}
export const addMessageActionCreator = () => {
	return {
		type: ADD_MESSAGE
	}
}


export default dialogsReducer;