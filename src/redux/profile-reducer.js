const ADD_POST = 'ADD-POST'
const FUNC_NEW_POST_TEXT = 'FUNC-NEW-POST-TEXT'


let initialState = {
	posts: [
		{ id: 1, message: "Hello, My name Kostya", likesCount: 23 },
		{ id: 2, message: "I wont education! I learn React", likesCount: 20 }
	],
	newPostText: ''
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0
			};
			return {
				...state, //Копируем state (Путь stateCopy.state)
				newPostText: '',//Копируем newPostText (Путь stateCopy.newPostText)
				posts: [...state.posts, newPost],//Копируем массив posts и push'им newPost (типо создаем массив сразу с newPost) (Путь stateCopy.posts)
			}
		}
		case FUNC_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.text
			}
		}
		default:
			return state;
	}
}

export const addPostActionCreator = () => {

	return {
		type: ADD_POST,
	}
}
export const funcNewPostTextActionCreator = (text) => {
	return {
		type: FUNC_NEW_POST_TEXT,
		text: text
	}
}


export default profileReducer;