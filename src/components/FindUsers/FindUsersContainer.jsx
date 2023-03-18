import React from "react";
import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/findUsers-reducer";
import FindUsers from "./FindUsers";

let mapStateToProps = (state) => {
	return { users: state.findUsers.users }
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			return dispatch(followActionCreator(userId));
		},
		unfollow: (userId) => {
			return dispatch(unfollowActionCreator(userId));
		},
		setUsers: (users) => {
			return dispatch(setUsersActionCreator(users));
		}
	}
}


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);


export default FindUsersContainer;