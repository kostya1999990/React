import axios from "axios";
import React from "react";
import s from "./FindUsers.module.css"
import User from "./User/User";
import boy from "../../assets/img/boy.png"



class FindUsers extends React.Component {
	constructor(props) {
		super(props);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.usersCount}&page=${this.page}`).then(response => {
			debugger
			return this.props.setUsers(response.data.items)
		});
	}
	usersCount = 15;
	page = 2;

	render() {
		return (
			<div className={s.main__findUsers}>
				<div className={s.findUsers__title}>Users</div>
				{
					this.props.users.map(e => <User
						id={e.id}
						name={e.name}
						surname={e.surname}
						avatar={e.photos.small != null ? e.photos.small : boy}
						contry={e.contry}
						city={e.city}
						status={e.status}
						followed={e.followed}
						follow={this.props.follow}
						unfollow={this.props.unfollow}
						setUsers={this.props.setUsers}
					/>)
				}
			</div>
		)
	}

}


export default FindUsers;