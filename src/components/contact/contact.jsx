import React, { useState } from 'react';
import Infobox from '../infobox/infobox.jsx';
import style from './contact.module.css'

const Contact = ({lang}) => {

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
				<h2 className={style.h2Contact}>
					{lang == 'ES' && 'Contacto '}
					{lang == 'EN' && 'Contact  '}
				 {contacto === 'closed' && <i>↑</i>}</h2>
				{
					contacto === 'open' &&
					<div className={style.containerContacto}>
						<Infobox subtitle={'Title'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum dapibus ultricies. Suspendisse potenti.'} />
						<form action="#" className={style.form}>
							<input type="text" 
										className={style.name} 
										name="" 
										id="" />
							<textarea className={style.text} 
												name="" id="" />
							<input 
										className={style.submit}
										type="submit" />
						</form>
					</div>
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