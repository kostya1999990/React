import React from "react";
import s from "./Form.module.css";

function Form() {
	return (
		<form className={s.main__form} action="#" method="get">
			<textarea className={s.form__textarea} type="text" placeholder="your news..." />
			<div className={s.button__body}>
				<button className={`${s.form__button} button`} type="submit">Send</button>
			</div>
		</form>
	)
}

export default Form;