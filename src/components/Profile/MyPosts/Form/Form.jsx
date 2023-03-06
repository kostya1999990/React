import React from "react";
import s from "./Form.module.css";



function Form(props) {
	let newPostElement = React.createRef();
	let addPost = () => {
		props.addPost();
		// props.funcNewPostText('');  в state зануление
	}

	let OnPostChange = () => {
		let text = newPostElement.current.value;
		props.funcNewPostText(text);
	}


	return (
		<div className={s.main__form} action="#" method="get">
			<textarea ref={newPostElement} className={s.form__textarea} type="text" placeholder="your news..." value={props.newPostText} onChange={OnPostChange} />
			<div className={s.button__body}>
				<button className={`${s.form__button} button`} type="submit" onClick={addPost}>Send</button>
			</div>
		</div>
	)
}

export default Form;