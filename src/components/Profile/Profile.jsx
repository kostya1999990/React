import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileMainImage from "./ProfileMainImage/ProfileMainImage";

function Profile(props) {
	return (
		<div>
			<ProfileMainImage />
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</div >
	)
}

export default Profile;