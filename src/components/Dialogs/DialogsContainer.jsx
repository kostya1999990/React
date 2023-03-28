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
let mapDispatchToProps = {
	addMessageElement: addMessageActionCreator,
	funcNewMessage: funcNewMessageActionCreator
}


export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);