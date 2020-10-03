import React from 'react';
import { Markup } from 'interweave';
import style from './infobox.module.css';

function Infobox({color,subtitle,text}) {
	return (
				<section className={style.container}>
					<div className={`${style.divisionBar} bgColor${color} `}></div>
						<div>
							<h2 className={style.subtitle}>{subtitle}</h2> 
							<div className={style.content}>
								<div className={style.text}>
									<Markup content={text} />{}
								</div>
					  		</div>
				  		</div>
			      
				</section>
	)
}

export default Infobox;