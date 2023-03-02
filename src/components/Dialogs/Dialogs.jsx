import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {

	let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogsItem id={d.id} name={d.name} state={props.state} />)
	let messagesElements = props.state.dialogsPage.message.Kostya.map(m => <Messages id={m.id} mess={m.mess} own={m.own} />)

	return (

		<div className={s.main__dialogs}>
			<div className={s.dialogs__items}>
				{dialogsElements}
			</div>
			<div className={s.dialogs__messages}>
				{messagesElements}
			</div>
		</div>

	)
};

export default Dialogs;