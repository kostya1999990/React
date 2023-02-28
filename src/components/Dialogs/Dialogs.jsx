import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

let dialogsData = [
	{ id: 1, name: 'Kostya' },
	{ id: 2, name: 'Valera' },
	{ id: 3, name: 'Lika' },
	{ id: 4, name: 'Dima' },
	{ id: 5, name: 'Andrey' },
	{ id: 6, name: 'Maks' },
]

let dialogMessageData = [
	{ id: 1, mess: "Hi" },
	{ id: 2, mess: "What's app bro? How are you?" },
	{ id: 3, mess: "I'm good thanks! and you?" },
	{ id: 4, mess: "I'm too!" }
]

let dialogsElements = dialogsData.map(dialog => <DialogsItem id={dialog.id} name={dialog.name} />)
let messagesElements = dialogMessageData.map(message => <Messages id={message.id} mess={message.mess} />)

const Dialogs = () => {
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