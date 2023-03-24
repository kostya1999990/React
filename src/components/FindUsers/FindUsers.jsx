import React from "react";
import s from "./FindUsers.module.css"
import User from "./User/User";
import boy from "../../assets/img/boy.png"



let FindUsers = (props) => {
	debugger
	let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) pages.push(i);
	return (
		<div className={s.main__findUsers}>
			<div className={s.findUsers__title}>Users</div>
			<div className={s.pages}>
				{pages.map(p => {
					if (p <= 10) {
						return <span onClick={(e) => props.changeCurrentPageOnCLick(p)} className={props.currentPage == p ? `${s.selectedPage} ${s.page}` : s.page}>{p}</span>
					}
				})}
			</div>
			{
				props.users.map(e => <User
					id={e.id}
					name={e.name}
					surname={e.surname}
					avatar={e.photos.small != null ? e.photos.small : boy}
					contry={e.contry}
					city={e.city}
					status={e.status}
					followed={e.followed}
					follow={props.follow}
					unfollow={props.unfollow}
					setUsers={props.setUsers}
				/>)
			}
		</div>
	)
}


export default FindUsers;