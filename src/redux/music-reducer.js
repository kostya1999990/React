const ADD_MUSIC = "ADD_MUSIC";
const REMOVE_MUSIC = "REMOVE_MUSIC";
const SET_MUSIC = "SET_MUSIC";


const initialState = {
	musics: [
		{ id: 1, sub: true, img: "https://www.iguides.ru/upload/iblock/3a0/3a0569a7237bbfb5406580deed8a9958.jpg", name: "А мы гуляем", executor: "Archi", time: "1:06" },
		{ id: 2, sub: false, img: "https://www.iguides.ru/upload/iblock/3a0/3a0569a7237bbfb5406580deed8a9958.jpg", name: "Smash", executor: "Nebezao", time: "3:40" },
		{ id: 3, sub: false, img: "https://www.iguides.ru/upload/iblock/3a0/3a0569a7237bbfb5406580deed8a9958.jpg", name: "Кукла", executor: "Jah Khalib", time: "2:58" },
		{ id: 4, sub: false, img: "https://www.iguides.ru/upload/iblock/3a0/3a0569a7237bbfb5406580deed8a9958.jpg", name: "Если тебе будет грустно", executor: "Rauf & Faik, NILETTO", time: "3:11" },
		{ id: 5, sub: true, img: "https://www.iguides.ru/upload/iblock/3a0/3a0569a7237bbfb5406580deed8a9958.jpg", name: "Диалоги тет-а-тет", executor: "ALEKS ATAMAN, FINIK", time: "3:00" }
	]
}

const musicReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MUSIC:
			return {
				...state,
				musics: state.musics.map(m => {
					if (m.id === action.musicId) {
						return ({ ...m, sub: true })
					}
					return m;
				})
			}
		case REMOVE_MUSIC:
			return {
				...state,
				musics: state.musics.map(m => {
					if (m.id === action.musicId) {
						return ({ ...m, sub: false })
					}
					return m;
				})
			}
		case SET_MUSIC:
			return { ...state, musics: [...state.musics, ...action.musics] }

		default:
			return state
	}
}

export const addMusicActionCreator = (musicId) => ({
	type: ADD_MUSIC,
	musicId: musicId

})
export const removeMusicActionCreator = (musicId) => ({
	type: REMOVE_MUSIC,
	musicId: musicId
})
export const setMusicActionCreator = (musics) => ({
	type: SET_MUSIC,
	musics: musics
})

export default musicReducer