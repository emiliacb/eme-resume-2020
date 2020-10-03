import React,{ useState, useEffect } from 'react';
import Loading from '../loading/loading.jsx';
import axios from 'axios';
import Infobox from '../infobox/infobox.jsx';
import style from './home.module.css';
import qr from '../../media/qr-code.svg'

const URL = process.env.REACT_APP_URL;

function Home({lang}) {

	const [itsLoading, setItsLoading] = useState(true);
	const [resume,setResume] = useState([]);
	//const [__cache,setCache] = useState({});

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
		<section>
			{
				itsLoading &&
				<Loading />
			}
			<div className={style.containerResume}>
				<div className={style.column}>
					{
						resume.data &&
						resume.data.map( e => {
							if (e.side === 'left')	return <Infobox color={e.id} subtitle={e.subtitle} text={e.text} />
						})
					}
				</div>
				<div className={style.column} >
					<div className={style.pixel} alt={lang === 'EN' ? 'pixelart selfportrait' : 'retrato en pixelart'}> </div>
					{
						resume.data &&
						resume.data.map( e => {
							if (e.side === 'right')	return <Infobox color={'Right'} subtitle={e.subtitle} text={e.text} />
						})
					}
					<img className={style.qr} src={qr} alt='QR code' />
					<i className={style.webVersion}>{ lang === 'EN' ? ' Web Version' : ' Versión Web'}</i>
				</div>
			</div>
		</section>
		)
	
}

export default Home;