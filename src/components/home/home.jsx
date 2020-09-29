import React,{ useState, useEffect } from 'react';
import Loading from '../loading/loading.jsx';
import axios from 'axios';
import Infobox from '../infobox/infobox.jsx';
import style from './home.module.css';

function Home({lang}) {

	const [itsLoading, setItsLoading] = useState(true)
	const [resume,setResume] = useState({
		data : []
	});

	useEffect(
		() => {
			setItsLoading(true);
			axios.get(`http://localhost:3000/api/lang/?query=${lang}`)
			.then(res => {
				setResume(res.data);
				setItsLoading(false);
			})
			.catch(err => {
				console.log('Algo salió mal : ', err)
			})
		},
		[lang]
	)
	

	return (
		<div className={style.containerResume}>
		{
			itsLoading &&
			<Loading />
		}
		{	
			resume.data.map((e,i) => {
				return (<Infobox key={e.id} color={e.id} subtitle={e.subtitle} text={e.text}/>)
			})

		}
		</div>
	)
}

export default Home;