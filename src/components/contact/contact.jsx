import React, { useState } from 'react';
import axios from 'axios';
import Infobox from '../infobox/infobox.jsx';
import style from './contact.module.css';


const Contact = ({lang}) => {

	const [contacto, setContacto] = useState('closed'); //visibility
	const [sending, setSending] = useState(false)
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
		if (sending) return;
		if (message.name.length <  1 || 
			message.name.length >  50 || 
			message.email.length < 1 || 
			message.email.length > 50 || 
			message.message.length < 1 ||
			message.message.length > 700 || 
			message.honeypot.length > 0
			) {
			setConfirm("exceeded")
			return
		}

		setSending(true)
		setConfirm('loading');
		const scriptUrl = 'https://script.google.com/macros/s/AKfycby5bQpyQnJEjOGqjMGJcNopE_4SRmI3lswBK9OWESehpEUTWRM/exec';
		const data = JSON.stringify(message);
		const config = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			}
		}
		setMessage({
			name: '',
			email: '',
			message: '',
			honeypot: '',
		})
	    axios.post(scriptUrl, data, config)
	    .then(res => {
	    	setConfirm(true)
	    	console.log(res.data)
	    }) 
	    .catch(err => {
	    	setConfirm(false)
	    	console.log(err)
	    })
	    setSending(false)
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
					rol = 'button'
					onFocus = {handleClickOpen}
					tabIndex='-1'
			>	
				<h2 className={style.h2Contact}>
					{lang === 'ES' && 'Contacto '}
					{lang === 'EN' && 'Contact  '}
				 {contacto === 'closed' && <i>↑</i>}</h2>
				{
					contacto === 'open' &&
					<div className={style.containerContacto}>
						{
						lang === 'ES' &&
						<Infobox subtitle={'Charlemos!'} text= {'Me encantaría hablar con vos.<br />Desde este formulario la página me envía un email directamente a mi correo.<br /> Podés ponerlo a prueba escribiéndome un mensajito para que te responda. '}/>
						}
						{
						lang === 'EN' &&
						<Infobox subtitle={'Let\'s talk!'} text= {'I would love to talk with you.<br />Through this form you can email-me.<br />You can test it sending to me a little message '}  />
						}
						<form 
									className={`${style.form}`}
									onSubmit={handleSubmit}
									>
							<input 
										type="text" 
										maxlength="50"
										className={style.name} 
										onChange= {handleChange}
										name="name" 
										value={message.name}
										placeholder={lang === 'EN' ? "Your name" : "Tu nombre"}
										id="name" 
										required
										/>
							<input 
										type="email" 
										maxlength="50"
										className={style.name} 
										name="email" 
										onChange= {handleChange}
										value={message.email}
										placeholder={lang === 'EN' ? "Your email address" : "Tu email"}
										id="email" 
										required
										/>
							<textarea 
										className={style.text} 
										maxlength="700"
										name="message" 
										onChange= {handleChange}
										value={message.message}
										placeholder={lang === 'EN' ? "Your message" : "Tu mensaje"}
										id="message" 
										required
										/>
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
								confirm === "exceeded" &&
								<div className={style.confirm}>
									{lang === 'EN' ? "Too many characters" : "Demasiados carácteres"}
								</div>
							}
							{
								confirm === "false" &&
								<div className={style.confirm}>
									"Server Error"
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