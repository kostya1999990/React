import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileMainImage from "./ProfileMainImage/ProfileMainImage";

function Profile() {
	return (
		<div>
			<ProfileMainImage />
			<ProfileInfo />
			<MyPosts />
		</div >
	)
}

export default Profile;