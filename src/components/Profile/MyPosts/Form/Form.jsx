import React from "react";
import s from "./Form.module.css";
import { addPostActionCreator, funcNewPostTextActionCreator } from "../../../../redux/profile-reducer";


function Form(props) {
	let addPost = () => {
		props.dispatch(addPostActionCreator());
		// props.funcNewPostText('');  в state зануление
	}

	let OnPostChange = (e) => {
		let text = e.target.value;
		props.dispatch(funcNewPostTextActionCreator(text))
	}


	return (
		<div className={s.main__form} action="#" method="get">
			<textarea className={s.form__textarea} type="text" placeholder="your news..." value={props.newPostText} onChange={OnPostChange} />
			<div className={s.button__body}>
				<button className={`${s.form__button} button`} type="submit" onClick={addPost}>Send</button>
			</div>
		</div>
	)
}

export default Form;