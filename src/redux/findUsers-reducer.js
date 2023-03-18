const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
	users: []
}

let findUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return ({
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return ({ ...u, sub: true })
					}
					return u;
				})
			})
		case UNFOLLOW:
			return ({
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return ({ ...u, sub: false })
					}
					return u;
				})
			})
		case SET_USERS:
			return ({ ...state, users: [...state.users, ...action.users] })
		default:
			return state
	}



}


export const followActionCreator = (userId) => ({
	type: FOLLOW,
	userId: userId
})
export const unfollowActionCreator = (userId) => ({
	type: UNFOLLOW,
	userId: userId
})
export const setUsersActionCreator = (users) => ({
	type: SET_USERS,
	users: users
})

export default findUsersReducer;