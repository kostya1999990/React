import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavContainer from './components/Nav/NavContainer';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import MusicContainer from './components/Music/MusicContainer';




function App(props) {
	return (
		<div className="wrapper" >
			<Header />
			<NavContainer />
			<main className="main">
				<Routes>
					<Route path='/profile' element={<Profile store={props.store} dispatch={props.dispatch} />} />
					<Route path='/dialogs' element={<DialogsContainer store={props.store} dispatch={props.dispatch} />} />
					<Route path='/news' element={<News />} />
					<Route path='/music' element={<MusicContainer />} />
					<Route path='/find' element={<FindUsersContainer />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
				{/* <Profile /> */}
			</main>
			<Footer />
		</div >
	);
}




export default App;