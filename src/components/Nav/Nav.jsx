import React from "react";
import s from './Nav.module.css';
import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<nav className={s.nav}>
			<ul className={s.menu}>
				<NavLink to="/profile" className={navData => navData.isActive ? s.active : s.menu}>Profile</NavLink>
				<NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.menu} >Messages</NavLink>
				<NavLink to="/news" className={navData => navData.isActive ? s.active : s.menu} >News</NavLink>
				<NavLink to="/music" className={navData => navData.isActive ? s.active : s.menu} >Music</NavLink>
				<NavLink to="/settings" className={navData => navData.isActive ? s.active : s.menu} >Settings</NavLink>
			</ul>
		</nav >
	)
}

export default Nav;