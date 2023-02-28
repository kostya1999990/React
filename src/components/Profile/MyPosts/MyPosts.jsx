import React from "react";
import Form from "./Form/Form";
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";

let PostData = [
	{ id: 1, message: "Hello, My name Kostya", likesCount: 23 },
	{ id: 1, message: "I wont education! I learn React", likesCount: 20 }
]

let postElements = PostData.map(post => <MyPost id={post.id} message={post.message} likesCount={post.likesCount} />)

function MyPosts() {
	return (
		<div className={s.main__posts}>
			<div className={s.main__title}>My posts</div>
			<Form />
			{postElements}
		</div>
	)
}

export default MyPosts;