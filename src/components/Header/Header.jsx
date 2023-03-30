import s from './Header.module.css';
import React from "react";
import Auth from './Auth/Auth';
import { NavLink } from 'react-router-dom';

function Header(props) {
	debugger
	return (
		<header className={s.header}>
			<img src="https://upload.wikimedia.org/wikipedia/ru/thumb/3/35/Starbucks_Coffee_Logo.svg/2048px-Starbucks_Coffee_Logo.svg.png" alt="" />
			{!props.data.id ? <NavLink to="/login">Login</NavLink> : <Auth data={props.data} />}

		</header>
	)
}

export default Header;