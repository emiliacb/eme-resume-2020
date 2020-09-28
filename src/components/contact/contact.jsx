import React, { useState, useEffect } from 'react';
import Infobox from '../infobox/infobox.jsx';
import style from './contact.module.css'

const Contact = () => {

	const [contacto, setContacto] = useState('closed');
	
	const handleClickOpen = e => {
		e.preventDefault();
		setContacto(contacto === 'closed' ? 'open' : 'open');
		document.documentElement.style.overflow = 'hidden';
	}

	const handleClickClose = e => {
		e.preventDefault();
		setContacto(contacto === 'open' ? 'closed' : 'closed');
		document.documentElement.style.overflow = 'auto';
	}

	return (
		<section>
			<div 
					className = {`${style.contact} ${style[contacto]}`}
					onClick = {handleClickOpen}
			>	
				<h2 className={style.h2Contact}>Contacto {contacto === 'closed' && <i>↑</i>}</h2>
				{
					contacto === 'open' &&
					<Infobox subtitle={'Datos'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi exercitationem ratione facilis, soluta aperiam sit est nam doloribus dolorem ullam tenetur aliquid, voluptatum accusantium incidunt deserunt placeat suscipit, ipsam nemo?'} />
				}
			</div>
			{ 
				contacto === 'open' &&
				<button 
								className = {style.btnClose}
								onClick = {handleClickClose}
								value = 'coso'
				>
				</button>
			}
		</section>
		)

}

export default Contact;