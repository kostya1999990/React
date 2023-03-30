import React from 'react';
import './App.css';
import NavContainer from './components/Nav/NavContainer';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import MusicContainer from './components/Music/MusicContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';




function App(props) {
	return (
		<div className="wrapper" >
			<HeaderContainer />
			<NavContainer />
			<main className="main">
				<Routes>
					<Route path='/profile/:userId?' element={<ProfileContainer />} />
					<Route path='/dialogs/:userId?' element={<DialogsContainer />} />
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