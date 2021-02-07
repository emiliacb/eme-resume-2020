import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DarkMode from '../../utils/darkMode.jsx';
import style from './navbar.module.css';
import print from '../../media/print.svg'

const Navbar = ({darkMode}) => {

	const [dark,setDark] = useState('darkOff')
	
	const handleDark = e => {
		setDark(dark === 'darkOff' ? 'darkOn' : 'darkOff')
	}

	const handleClickPrint = e => {
		e.preventDefault();
		window.print();
	}

	useEffect(() => {
		DarkMode(dark)
	},[dark])

	return (
		<nav className={style.navbar}>
		<header>
			<Link to="/">
				<h1 className={style.title}>Fullstack Developer</h1>
			</Link>
		</header>
		<div className={style.darkmodeContainer}>
			<label  htmlFor="darkmode" className={`${style.darkmode} ${style[dark]}`} >
			</label>
			<input type="checkbox" id="darkmode" className={style.input} onInput={handleDark}/>
			<button 
							className={style.btnPrint}
							onClick={handleClickPrint} >
					<img className={style.printLogo} src={print} alt={"Imprimir"} />
			</button>
			<div className={style.linkContainer}>
				<Link to="/en_US" className={style.link}>Eng</Link>
				<Link to="/es_AR" className={style.link}>Esp</Link>
			</div>
		</div>
		</nav>
		)
}

export default Navbar;