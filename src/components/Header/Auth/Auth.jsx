import s from './Auth.module.css';
import React from "react";
import { NavLink } from 'react-router-dom';

function Auth(props) {
	debugger
	return (
		<NavLink to="/profile" className={s.header__auth}>
			<div className={s.auth__image}>
				<img src="https://media.istockphoto.com/id/519078727/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D1%81%D0%B8%D0%BB%D1%83%D1%8D%D1%82-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8.jpg?s=170667a&w=0&k=20&c=WF7Rw6VoF5N-L019Z2cNquDeLTG4tVPrGPQ1o-xNYzY=" alt="" />
			</div>
			<div className={s.auth__name}>
				<span>{props.data.login}</span>
			</div>
		</NavLink>
	)
}

export default Auth;

// {!props.avatar ? props.avatar = "https://media.istockphoto.com/id/519078727/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D1%81%D0%B8%D0%BB%D1%83%D1%8D%D1%82-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8.jpg?s=170667a&w=0&k=20&c=WF7Rw6VoF5N-L019Z2cNquDeLTG4tVPrGPQ1o-xNYzY=" : props.avatar}


//{!props.data.login ? props.data.login = "authorize" : props.data.login}