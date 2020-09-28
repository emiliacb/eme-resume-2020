import React, { useState, useEffect } from 'react';
import DarkMode from '../../utils/darkMode.jsx';
import style from './navbar.module.css';

const Navbar = ({darkMode}) => {

	const [dark,setDark] = useState('darkOff')

	const handleDark = e => {
		setDark(dark === 'darkOff' ? 'darkOn' : 'darkOff')
	}

	useEffect(() => {
		DarkMode(dark)
	},[dark])


	return (
		<nav className={style.navbar}>
		<header><h1 className={style.title}>Fullstack Developer</h1></header>
		<div className={style.darkmodeContainer}>
			<div className={style.eclipse}></div>
			<label  htmlFor="darkmode" className={`${style.darkmode} ${style[dark]}`} >
			</label>
			<input type="checkbox" id="darkmode" className={style.input} onInput={handleDark}/>
		</div>
		</nav>
		)
}

export default Navbar;