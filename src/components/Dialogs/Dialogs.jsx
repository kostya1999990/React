import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem id={d.id} name={d.name} />)
	let messagesElements = props.dialogsPage.message.Kostya.map(m => <Messages id={m.id} mess={m.mess} own={m.own} />)
	// let messagesElements1 = props.dialogsPage.message.Valera.map(m => <Messages id={m.id} mess={m.mess} own={m.own} />)

	let newMessageElement = () => {
		props.addMessageElement();
	}
	let newMessageText = (e) => {
		let text = e.currentTarget.value;
		props.funcNewMessage(text);
	}
	return (

		<div className={s.main__dialogs}>
			<div className={s.dialogs__items}>
				{dialogsElements}
			</div>
			<div className={s.dialogs__messages__body}>
				<div className={s.dialogs__messages}>
					{messagesElements}

					<div className={s.dialogs__but}>
						<div className={s.main__form} action="#" method="get">
							<textarea className={s.form__textarea} value={props.newMessage} onChange={newMessageText} type="text" placeholder="your text..." />
							<div className={s.button__body}>
								<button className={`${s.form__button} button`} onClick={newMessageElement} type="submit">Send</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
};

export default Dialogs;