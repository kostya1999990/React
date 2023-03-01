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
			<MyPosts posts={props.posts} />
		</div >
	)
}

export default Profile;