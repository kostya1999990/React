import React from "react";
import s from "./Messages.module.css"


const Messages = (props) => {
	while (props.mess) {
		if (props.own == "my") {
			return (
				<div className={s.dialogs__message__body}>
					<div className={`${s.dialogs__message} ${s.my}`}>{props.mess}</div>
				</div>
			)
		} else {
			return (
				<div className={s.dialogs__message__body}>
					<div className={`${s.dialogs__message} ${s.enemy}`}>{props.mess}</div>
				</div>
			)
		}
	}
};

export default Messages;