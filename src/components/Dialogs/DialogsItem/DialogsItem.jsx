import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogsItem.module.css"
const DialogsItem = (props) => {
	return (
		<div className={s.dialogs__item}>
			<NavLink to={`/dialogs/${props.name}`} className={navData => navData.isActive ? s.active : s.dialogs__item}>{props.name}</NavLink>
		</div>
	)
};
export default DialogsItem;