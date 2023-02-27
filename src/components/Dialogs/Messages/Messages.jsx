import React from "react";
import s from "./Messages.module.css"


const Messages = (props) => {
	return <div className={s.dialogs__message}>{props.mess}</div>
};

export default Messages;