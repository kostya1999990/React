import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, funcNewMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";




let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		newMessage: state.dialogsPage.newMessage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addMessageElement: () => {
			dispatch(addMessageActionCreator());
		},
		funcNewMessage: (text) => {
			dispatch(funcNewMessageActionCreator(text));
		}
	}
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default SuperDialogsContainer;