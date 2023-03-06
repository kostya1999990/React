import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileMainImage from "./ProfileMainImage/ProfileMainImage";

function Profile(props) {
	return (
		<div>
			<ProfileMainImage />
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} funcNewPostText={props.funcNewPostText} />
		</div >
	)
}

export default Profile;