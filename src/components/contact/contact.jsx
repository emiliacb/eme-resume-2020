import React, { useState } from 'react';
import axios from 'axios';
import Infobox from '../infobox/infobox.jsx';
import style from './contact.module.css';


const Contact = ({lang}) => {

	const [contacto, setContacto] = useState('closed'); //visibility
	const [message, setMessage] = useState({
		name: '',
		email: '',
		message: '',
		honeypot: '',
	})
	const [confirm, setConfirm] = useState(null)
	
	const handleClickOpen = e => {
		e.preventDefault();
		setContacto(contacto === 'closed' ? 'open' : 'open');
		document.documentElement.style.overflow = 'hidden';
	}

	const handleClickClose = e => {
		e.preventDefault();
		setContacto(contacto === 'open' ? 'closed' : 'closed');
		document.documentElement.style.overflow = 'auto';
		setConfirm(null)
	}

	const handleSubmit = e => {
		e.preventDefault();
		setConfirm('loading');
		const scriptUrl = 'https://script.google.com/macros/s/AKfycby5bQpyQnJEjOGqjMGJcNopE_4SRmI3lswBK9OWESehpEUTWRM/exec';
		const data = JSON.stringify(message);
		const config = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			}
		}
	    axios.post(scriptUrl, data, config)
	    .then(res => {
	    	setConfirm(true)
	    	console.log(res.data)
	    }) 
	    .catch(err => {
	    	setConfirm(true)
	    	console.log(err)
	    })
	}

	const handleChange = e =>{
		e.preventDefault();
		const keyState = e.target.name;
		const valueState = e.target.value;
    	setMessage({...message, [keyState]: valueState});
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
									className={`${style.form}`}
									onSubmit={handleSubmit}
									>
							<input 
										type="text" 
										className={style.name} 
										onChange= {handleChange}
										name="name" 
										value={message.text}
										placeholder={lang === 'EN' ? "Your name" : "Tu nombre"}
										id="name" />
							<input 
										type="text" 
										className={style.name} 
										name="email" 
										onChange= {handleChange}
										placeholder={lang === 'EN' ? "Your email address" : "Tu email"}
										id="email" />
							<textarea 
										className={style.text} 
										name="message" 
										onChange= {handleChange}
										placeholder={lang === 'EN' ? "Your message" : "Tu mensaje"}
										id="message" />
							<div className={style.btnContainer}>
							{
								confirm === 'loading' &&
								<div className={style.confirm}>
									{lang === 'EN' ? "Sending..." : "Enviando..."}
								</div>
							}
							{
								confirm === true &&
								<div className={style.confirm}>
									{lang === 'EN' ? "Thanks!" : "Gracias!"}
								</div>
							}
							{
								confirm === false &&
								<div className={style.confirm}>
									{lang === 'EN' ? "Something go wrong" : "Algo salió mal :("}
								</div>
							}
							<button 
							 				type = "submit"
							 				className={style.submit}
							 				onClick = 'submit()'
							 				>
							 	{lang === 'EN' ? "Submit" : "Enviar"}
							</button>
							</div>
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