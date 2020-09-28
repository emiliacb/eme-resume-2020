import React from 'react';
import style from './infobox.module.css';

function Infobox({color,subtitle,text}) {
	return (
				<section className={style.container}>
					<div className={`${style.divisionBar} bgColor${color} `}></div>
					<h2 className={style.subtitle}>{subtitle}</h2>
					<div className={style.content}>
					<p className={style.text}>{text}</p>
			        </div>
				</section>
	)
}

export default Infobox;