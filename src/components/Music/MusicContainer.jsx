import React from "react";
import { connect } from "react-redux";
import { addMusicActionCreator, removeMusicActionCreator, setMusicActionCreator } from "../../redux/music-reducer";
import Music from "./Music";




let mapStateToProps = (state) => {
	return {
		musics: state.music.musics
	}
};
let mapDispatchToProps = {
	addMusic: addMusicActionCreator,
	removeMusic: removeMusicActionCreator,
	setMusic: setMusicActionCreator
};


export default connect(mapStateToProps, mapDispatchToProps)(Music);