import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator, funcNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}
let mapDispatchToProps = {
	addPost: addPostActionCreator,
	funcNewPostText: funcNewPostTextActionCreator
}



export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);









