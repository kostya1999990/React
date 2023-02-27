import s from './Header.module.css';
import React from "react";

function Header() {
	return (
		<header className={s.header}>
			<img src="https://upload.wikimedia.org/wikipedia/ru/thumb/3/35/Starbucks_Coffee_Logo.svg/2048px-Starbucks_Coffee_Logo.svg.png" alt="" />
		</header>
	)
}

export default Header;