const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const CHANGE_IS_FETCHING = "CHANGE_IS_FETCHING"

const initialState = {
	users: [],
	pageSize: 5,
	countUserOnPage: 10,
	totalUserCount: 0,
	currentPage: 1,
	isFeatching: false
}

let findUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return ({
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return ({ ...u, followed: true })
					}
					return u;
				})
			})
		case UNFOLLOW:
			return ({
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return ({ ...u, followed: false })
					}
					return u;
				})
			})
		case SET_USERS:
			return ({ ...state, users: action.users, totalUserCount: action.totalCount })
		case CHANGE_CURRENT_PAGE:
			return ({ ...state, currentPage: action.currentPage })
		case CHANGE_IS_FETCHING:
			return ({
				...state,
				isFeatching: action.isFeatching
			})
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
export const setUsersActionCreator = (users, totalCount) => ({
	type: SET_USERS,
	users: users,
	totalCount: totalCount
})
export const changePageActionCreator = (currentPage) => ({
	type: CHANGE_CURRENT_PAGE,
	currentPage: currentPage
})
export const isFeachingActionCreator = (isFeatching) => ({
	type: CHANGE_IS_FETCHING,
	isFeatching: isFeatching
})

export default findUsersReducer;