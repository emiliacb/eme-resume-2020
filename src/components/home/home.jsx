import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Infobox from '../infobox/infobox.jsx';
import style from './home.module.css';

function Home() {

	const [resume,setResume] = useState({
		data : []
	});

	useEffect(
		() => {
			axios.get(`http://localhost:3000/api/lang/ES`)
			.then(res => {
			setResume(res.data);
			console.log(resume)
			})
		},
		[]
	)
	

	return (
		<div className={style.containerResume}>
		{	
			resume.data.map((e,i) => {
				return (<Infobox key={e.id} color={e.id} subtitle={e.subtitle} text={e.text}/>)
			})
		}
		</div>
	)
}

export default Home;