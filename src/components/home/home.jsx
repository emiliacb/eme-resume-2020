import React,{ useState, useEffect } from 'react';
import Loading from '../loading/loading.jsx';
import axios from 'axios';
import Infobox from '../infobox/infobox.jsx';
import style from './home.module.css';
import qrCode from '../../media/qrCode.svg';
import photo from '../../media/foto.png';

const URL = process.env.REACT_APP_URL;
function Home({lang}) {

	const [itsLoading, setItsLoading] = useState(true)
	const [resume,setResume] = useState({
		data : []
	});

	//This is not the best practice, its unnecesary do a api serverless to translate the text,
	//but I do it in this wat for demostrative pruposes.

	useEffect(
		() => {
			setItsLoading(true);
			axios.get(`${URL}/api/lang/?query=${lang}`)
			.then(res => {
				setResume(res.data);
				setItsLoading(false);
			})
			.catch(err => {
				console.log('Something was grong : ', err)
			})
		},
		[lang]
	)
	

	return (
		<div className={style.containerResume}>
		<div className={style.decorationprint}></div>
		<div className={style.printable}>
			<Infobox key='printable' color={1} />
			<div className={style.table}>
				<div className={style.column}>
					<ul>
						<li><h2>Eme</h2></li>
						<li>Cosa</li>
						<li>Cosa</li>
						<li>Cosa</li>
					</ul>
				</div>	
				<div className={style.column}>
					<img src={photo} className={style.photo} alt="Mi foto" />
					<div className={style.qrContainer}><img src={qrCode} className={style.qr} alt={"Código QR"} /></div>
				</div>	
			</div> 
		</div>

		{
			itsLoading &&
			<Loading />
		}
		{	
			resume.data.map((e,i) => {
				return (<Infobox key={e.id} color={e.id + 1} subtitle={e.subtitle} text={e.text}/>)
			})
		}
		</div>
	)
}

export default Home;