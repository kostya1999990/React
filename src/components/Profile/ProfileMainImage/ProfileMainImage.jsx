import React from "react";
import s from "./ProfileMainImage.module.css";

function ProfileMainImage(props) {
	return (
		<div className={s.main__image}>
			{props.image == null ? <img src="https://klike.net/uploads/posts/2019-07/1563795460_1.jpg" alt="" /> : <img src={props.image} alt="" />}
		</div>
	)
}

export default ProfileMainImage;