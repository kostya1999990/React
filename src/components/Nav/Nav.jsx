import React from "react";
import s from './Nav.module.css';
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";


function Nav(props) {
	let sidebarElements = props.sidebar.map(sb => <Sidebar id={sb.id} name={sb.name} img={sb.img} />)
	return (
		<div className={s.nav}>
			<ul className={s.menu}>
				<NavLink to="/profile" className={navData => navData.isActive ? s.active : s.menu}>Profile</NavLink>
				<NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.menu} >Messages</NavLink>
				<NavLink to="/news" className={navData => navData.isActive ? s.active : s.menu} >News</NavLink>
				<NavLink to="/music" className={navData => navData.isActive ? s.active : s.menu} >Music</NavLink>
				<NavLink to="/find" className={navData => navData.isActive ? s.active : s.menu}>Find users</NavLink>
				<NavLink to="/settings" className={navData => navData.isActive ? s.active : s.menu} >Settings</NavLink>
			</ul>
			<div className={s.sidebar}>
				<div className={s.sidebar__title}>Friends</div>
				<div className={s.sidebar__items}>
					{sidebarElements}
				</div>
			</div>
		</div >
	)
}

export default Nav;



