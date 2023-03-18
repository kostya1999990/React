import React from "react";
import { connect } from "react-redux";
import { addMusicActionCreator, removeMusicActionCreator, setMusicActionCreator } from "../../redux/music-reducer";
import Music from "./Music";




let mapStateToProps = (state) => {
	return {
		musics: state.music.musics
	}
};
let mapDispatchToProps = (dispatch) => ({
	addMusic: (musicId) => {
		dispatch(addMusicActionCreator(musicId));
	},
	removeMusic: (musicId) => {
		dispatch(removeMusicActionCreator(musicId));
	},
	setMusic: (musics) => {
		dispatch(setMusicActionCreator(musics));
	}

});

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export default MusicContainer;