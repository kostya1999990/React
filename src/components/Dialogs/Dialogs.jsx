import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";



const Dialogs = (props) => {

	let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogsItem id={d.id} name={d.name} state={props.state} />)
	let messagesElements = props.state.dialogsPage.message.Kostya.map(m => <Messages id={m.id} mess={m.mess} own={m.own} />)
	let messElement = React.createRef();

	let addMessageElement = () => {
		let mess = messElement.current.value;
		props.addMessage(mess);
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
							<textarea ref={messElement} className={s.form__textarea} type="text" placeholder="your text..." />
							<div className={s.button__body}>
								<button className={`${s.form__button} button`} onClick={addMessageElement} type="submit">Send</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
};

export default Dialogs;