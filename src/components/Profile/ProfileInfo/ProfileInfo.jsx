import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import ProfileImg from "./ProfileImg/ProfileImg";
import Preloader from "../../../common/Preloader/Preloader";

function ProfileInfo(props) {
	if (!props.profile) {
		return <Preloader />
	}
	debugger
	return (
		<div className={`${s.main__profile} ${s.profile}`}>
			<ProfileImg photo={props.profile.photos.large} />
			<ProfileDescription myName="Kostya T." myDate="2 jun" myCity="Tumen" myEducation="College" mySite="http://sezoni4.ru" />
		</div>
	)
}

export default ProfileInfo;