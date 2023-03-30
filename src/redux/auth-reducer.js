import React from "react";
const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
	data: {
		id: null,
		login: null,
		email: null,
		isAuth: false,
		isFeatching: false
	}
}


const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				data: { ...action.data },
				isAuth: action.isAuth
			}


		default:
			return state
	}
}

export const setUser = (data) => {
	return {
		type: SET_USER_DATA,
		data: data,
		isAuth: true
	}
}

export default authReducer