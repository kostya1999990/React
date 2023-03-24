import React from "react";
import s from "./User.module.css"



const User = (props) => {
	return (
		<div className={s.user}>
			<div className={s.user__body}>
				<div className={s.user__photo}>
					<img src={props.avatar} alt="" />
					<div className={s.user__button__body}>
						{props.followed ? <button type="submit" onClick={() => props.unfollow(props.id)} className={`${s.user__button} button`}>Unfollow</button> : <button type="submit" onClick={() => props.follow(props.id)} className={`${s.user__button} button`}>Follow</button>}
					</div>
				</div>
				<div className={s.user__body__acc}>
					<div className={s.user__inf}>
						<div className={s.user__name}>{props.name} {props.surname}</div>
						<div className={s.user__status}>{props.status}</div>
					</div>
					<div className={s.user__city}>{props.contry}, <br /><br /> {props.city}</div>
				</div>
			</div>
		</div>
	)
}


export default User;