import React from "react";
import s from "./ProfileDescription.module.css";

const ProfileDescription = (props) => {
	return (
		<div className={`${s.profile__description} ${s.description}`}>
			<span className={s.description__name}>{props.myName}</span>
			<span className={s.description__date}>Date of Birthday: {props.myDate}</span>
			<span className={s.description__city}>City: {props.myCity}</span>
			<span className={s.description__education}>Education: {props.myEducation}</span>
			<span className={s.description__site}>Site: {props.mySite}</span>
		</div>
	)
}

export default ProfileDescription;