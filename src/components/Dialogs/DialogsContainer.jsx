import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, funcNewMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		newMessage: state.dialogsPage.newMessage
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addMessageElement: () => {
			dispatch(addMessageActionCreator());
		},
		funcNewMessage: (text) => {
			dispatch(funcNewMessageActionCreator(text));
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;