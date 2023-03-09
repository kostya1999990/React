const ADD_MESSAGE = 'ADD-MESSAGE'
const FUNC_NEW_MESSAGE = 'FUNC-NEW-MESSAGE'

const dialogsReducer = (state, action) => {


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