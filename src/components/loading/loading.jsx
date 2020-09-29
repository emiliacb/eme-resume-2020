import React from 'react';
import style from './loading.module.css'

const Loading = (props) => {
	return(
			<div className={style.loadingContainer}>
				<div className={style.loadingCircle}></div>
			</div>
		)
}

export default Loading;