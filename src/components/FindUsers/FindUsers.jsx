import React from "react";
import s from "./FindUsers.module.css"
import User from "./User/User";


const FindUsers = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				name: "Kostya",
				surname: "Timofeev",
				age: 23,
				avatar: "https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-20.jpg",
				contry: "Russia",
				city: "Tumen",
				status: "I'll work in a good company",
				sub: true
			},
			{
				id: 2,
				name: "Valera",
				surname: "Timofeev",
				age: 23,
				avatar: "https://avatars.mds.yandex.net/i?id=613489cb8981a8a832525d461618085db4b72b45-8186070-images-thumbs&n=13",
				contry: "Russia",
				city: "Tumen",
				status: "I'm cool",
				sub: false,
			},
			{
				id: 3,
				name: "Anjelika",
				surname: "Timofeeva",
				age: 20,
				avatar: "https://avatars.mds.yandex.net/i?id=e33155526a93d0677f36b9b62312e097e9644bdd-8399918-images-thumbs&n=13",
				contry: "Russia",
				city: "Tumen",
				status: "I love world!",
				sub: true,
			},
			{
				id: 4,
				name: "Lika",
				surname: "Tima",
				age: 20,
				avatar: "https://sun9-26.userapi.com/s/v1/if1/GTJRH37wKIC_h6RaWSZf8AURGOuxQ93z3YgWfT3hrwyxjNtd53k4ywIgApT2lGQNuPwKVA.jpg?size=200x200&quality=96&crop=0,0,224,224&ava=1",
				contry: "Russia",
				city: "Tumen",
				status: "Fake",
				sub: true,
			}
		])
	}

	let UsersElements = props.users.map(e => <User
		id={e.id}
		name={e.name}
		surname={e.surname}
		avatar={e.avatar}
		contry={e.contry}
		city={e.city}
		status={e.status}
		sub={e.sub}
		follow={props.follow}
		unfollow={props.unfollow}
		setUsers={props.setUsers}
	/>)

	return (
		<div className={s.main__findUsers}>
			<div className={s.findUsers__title}>Users</div>
			{UsersElements}
		</div>
	)
}



export default FindUsers;