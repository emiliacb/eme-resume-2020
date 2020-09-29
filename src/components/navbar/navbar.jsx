import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DarkMode from '../../utils/darkMode.jsx';
import style from './navbar.module.css';

const Navbar = ({darkMode}) => {

	const [dark,setDark] = useState('darkOff')
	const [currentLang, setCurrentLang] = useState('')

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
			<label  htmlFor="darkmode" className={`${style.darkmode} ${style[dark]}`} >
			</label>
			<input type="checkbox" id="darkmode" className={style.input} onInput={handleDark}/>
			<div className={style.linkContainer}>
				<Link to="/en_US" className={style.link}>Eng</Link>
				<Link to="/es_AR" className={style.link}>Esp</Link>
			</div>
		</div>
		</nav>
		)
}

export default Navbar;