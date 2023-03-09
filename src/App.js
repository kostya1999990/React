import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';




function App(props) {
	return (
		<div className="wrapper" >
			<Header />
			<Nav state={props.state} />
			<main className="main">
				<Routes>
					<Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
					<Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
					<Route path='/news' element={<News />} />
					<Route path='/music' element={<Music />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
				{/* <Profile /> */}
			</main>
			<Footer />
		</div >
	);
}




export default App;