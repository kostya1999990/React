import React from "react";
import Form from "./Form/Form";
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";



function MyPosts(props) {
	let postElements = props.posts.map(p => <MyPost id={p.id} message={p.message} likesCount={p.likesCount} />)
	return (
		<div className={s.main__posts}>
			<div className={s.main__title}>My posts</div>
			<Form addPost={props.addPost} />
			{postElements}
		</div>
	)
}

export default MyPosts;