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

const Dialogs = () => {
	return (

		<div className={s.main__dialogs}>
			<div className={s.dialogs__items}>
				<DialogsItem id={dialogsData[0].id} name={dialogsData[0].name} />
				<DialogsItem id={dialogsData[1].id} name={dialogsData[1].name} />
				<DialogsItem id={dialogsData[2].id} name={dialogsData[2].name} />
				<DialogsItem id={dialogsData[3].id} name={dialogsData[3].name} />
				<DialogsItem id={dialogsData[4].id} name={dialogsData[4].name} />
				<DialogsItem id={dialogsData[5].id} name={dialogsData[5].name} />
			</div>
			<div className={s.dialogs__messages}>
				<Messages id={dialogMessageData[0].id} mess={dialogMessageData[0].mess} />
				<Messages id={dialogMessageData[1].id} mess={dialogMessageData[1].mess} />
				<Messages id={dialogMessageData[2].id} mess={dialogMessageData[2].mess} />
				<Messages id={dialogMessageData[3].id} mess={dialogMessageData[3].mess} />
			</div>
		</div>

	)
};

export default Dialogs;