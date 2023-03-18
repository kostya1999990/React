import React from "react";
import s from "./Music.module.css"


const Music = (props) => {
	return (
		<div className={s.main__music}>
			{props.musics.map(m => {
				return (
					<div className={s.music}>
						<div className={s.music__img}>
							<button type="submit"><img src={m.img} alt="" /></button>
						</div>
						<div className={s.music__info}>
							<div className={s.music__name}>{m.name}</div>
							<div className={s.music__executor}>{m.executor}</div>
						</div>
						<div className={s.buttons}>
							{m.sub ? <button onClick={() => props.removeMusic(m.id)} className={s.button__remove}>-</button> : <button onClick={() => props.addMusic(m.id)} className={s.button__add}>+</button>}
						</div>
						<div className={s.music_time}>
							<span>{m.time}</span>
						</div>
					</div>
				)
			})}
		</div>
	)
}


export default Music;