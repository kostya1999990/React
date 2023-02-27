import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import ProfileImg from "./ProfileImg/ProfileImg";

function ProfileInfo() {
	return (
		<div className={`${s.main__profile} ${s.profile}`}>
			<ProfileImg />
			<ProfileDescription myName="Kostya T." myDate="2 jun" myCity="Tumen" myEducation="College" mySite="http://sezoni4.ru" />
		</div>
	)
}

export default ProfileInfo;