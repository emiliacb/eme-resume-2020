import React from 'react';
import Infobox from '../infobox/infobox.jsx';
import resume from '../../fakeDb/resume.json';
import style from './home.module.css';

function Home() {
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