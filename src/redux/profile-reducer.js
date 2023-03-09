const ADD_POST = 'ADD-POST'
const FUNC_NEW_POST_TEXT = 'FUNC-NEW-POST-TEXT'

const profileReducer = (state, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case FUNC_NEW_POST_TEXT:
			state.newPostText = action.text;
			return state;
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