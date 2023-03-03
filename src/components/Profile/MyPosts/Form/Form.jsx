import React from "react";
import s from "./Form.module.css";







function Form(props) {
	let newPostElement = React.createRef();
	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text)
	}
	return (
		<form className={s.main__form} action="#" method="get">
			<textarea ref={newPostElement} className={s.form__textarea} type="text" placeholder="your news..." />
			<div className={s.button__body}>
				<button className={`${s.form__button} button`} type="submit" onClick={addPost}>Send</button>
			</div>
		</form>
	)
}

export default Form;