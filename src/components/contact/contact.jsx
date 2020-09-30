import React, { useState } from 'react';
import axios from 'axios';
import Infobox from '../infobox/infobox.jsx';
import style from './contact.module.css';


const Contact = ({lang}) => {

	const [contacto, setContacto] = useState('closed');
	const [message, setMessage] = useState({
		name: '',
		email: '',
		message: '',
		honeypot: '',
	})
	
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

	const handleSubmit = e => {
		console.log('A form was submitted: ' + e);
		    axios.post('https:\//your-node-server-here.com/api/endpoint')
	}	

	return (
		<section>
			<div 
					className = {`${style.contact} ${style[contacto]}`}
					onClick = {handleClickOpen}
			>	
				<h2 className={style.h2Contact}>
					{lang === 'ES' && 'Contacto '}
					{lang === 'EN' && 'Contact  '}
				 {contacto === 'closed' && <i>↑</i>}</h2>
				{
					contacto === 'open' &&
					<div className={style.containerContacto}>
						<Infobox subtitle={'Title'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum dapibus ultricies. Suspendisse potenti.'} />
						
						<form 
									className={`${style.form} gform`}
									onSubmit={handleSubmit}
									>
							<input 
										type="text" 
										className={style.name} 
										name="name" 
										placeholder={lang === 'EN' ? "Your name" : "Tu nombre"}
										id="name" />
							<input 
										type="text" 
										className={style.name} 
										name="email" 
										placeholder={lang === 'EN' ? "Your email address" : "Tu email"}
										id="email" />
							<textarea 
										className={style.text} 
										name="message" 
										placeholder={lang === 'EN' ? "Your message" : "Tu mensaje"}
										id="message" />
							<input 
										className={style.submit}
										type="submit"
										/>
							<input 
										className={style.submit}
										type="submit"
										style={{display: 'none'}}
										/>
						</form>
						<div style={{display:'none'}} className="thankyou_message">
							<h2><em>Thanks</em> for contacting us! We will get back to you soon!</h2>
						</div>
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