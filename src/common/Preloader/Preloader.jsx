import React from 'react'
import loading from '../../assets/img/loading.gif'
import s from './Preloader.module.css'

let Preloader = (props) => {
	return <div className={s.loading__img}>
		<img src={loading} />
	</div>
}

export default Preloader