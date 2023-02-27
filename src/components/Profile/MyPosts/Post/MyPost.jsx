import React from "react";
import s from "./MyPost.module.css";
function MyPost(props) {
	return (
		<div className={s.main__post}>
			<div className={s.post__text}>{props.message} <br />like = {props.like}</div>
		</div>
	)
}

export default MyPost;