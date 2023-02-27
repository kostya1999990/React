import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
	return (
		<div>
			<div className={s.main__image}>
				<img src="https://klike.net/uploads/posts/2019-07/1563795460_1.jpg" alt="" />
			</div>
			<div className={`${s.main__profile} ${s.profile}`}>
				<div className={s.profile__img}>
					<img src="https://media.istockphoto.com/id/519078727/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D1%81%D0%B8%D0%BB%D1%83%D1%8D%D1%82-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8.jpg?s=170667a&w=0&k=20&c=WF7Rw6VoF5N-L019Z2cNquDeLTG4tVPrGPQ1o-xNYzY=" alt="" />
				</div>
				<div className={`${s.profile__description} ${s.description}`}>
					<span className={s.description__name}>Kostya T.</span>
					<span className={s.description__date}>Date of Birthday: 2 jun</span>
					<span className={s.description__city}>City: Russia</span>
					<span className={s.description__education}>Education: BSU 11</span>
					<span className={s.description__site}>http://sezoni4.ru</span>
				</div>
			</div>
			<MyPosts />
		</div >
	)
}

export default Profile;