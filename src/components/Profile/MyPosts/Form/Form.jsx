import React from "react";
import s from "./Form.module.css";


function Form(props) {

	let OnPostChange = (e) => {
		let text = e.target.value;
		props.funcNewPostText(text);
	}


	return (
		<div className={s.main__form} action="#" method="get">
			<textarea className={s.form__textarea} type="text" placeholder="your news..." value={props.newPostText} onChange={OnPostChange} />
			<div className={s.button__body}>
				<button className={`${s.form__button} button`} type="submit" onClick={() => props.addPost()}>Send</button>
			</div>
		</div>
	)
}

export default Form;