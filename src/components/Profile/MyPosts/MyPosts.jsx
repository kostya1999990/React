import React from "react";
import Form from "./Form/Form";
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";

function MyPosts() {
	return (
		<div className={s.main__posts}>
			<div className={s.main__title}>My posts</div>
			<Form />
			<MyPost message='Hello, My name Kostya' like='1' />
			<MyPost message='I wont education! I learn React' like='5' />
		</div>
	)
}

export default MyPosts;