import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let Data = {
	'dialogs': [
		{ id: 1, name: 'Kostya' },
		{ id: 2, name: 'Valera' },
		{ id: 3, name: 'Lika' },
		{ id: 4, name: 'Dima' },
		{ id: 5, name: 'Andrey' },
		{ id: 6, name: 'Maks' },
	],
	'message': [
		{ id: 1, mess: "Hi" },
		{ id: 2, mess: "What's app bro? How are you?" },
		{ id: 3, mess: "I'm good thanks! and you?" },
		{ id: 4, mess: "I'm too!" }
	],
	'posts': [
		{ id: 1, message: "Hello, My name Kostya", likesCount: 23 },
		{ id: 1, message: "I wont education! I learn React", likesCount: 20 }
	]
};


root.render(
	<React.StrictMode>
		<App dialogs={Data.dialogs} message={Data.message} posts={Data.posts} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
