import React from "react";
import Form from "./Form/Form";
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";

let PostData = [
	{ id: 1, message: "Hello, My name Kostya", likesCount: 23 },
	{ id: 1, message: "I wont education! I learn React", likesCount: 20 }
]

function MyPosts() {
	return (
		<div className={s.main__posts}>
			<div className={s.main__title}>My posts</div>
			<Form />
			<MyPost id={PostData[0].id} message={PostData[0].message} likesCount={PostData[0].likesCount} />
			<MyPost id={PostData[1].id} message={PostData[1].message} likesCount={PostData[1].likesCount} />
		</div>
	)
}

export default MyPosts;