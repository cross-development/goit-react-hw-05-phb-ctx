//Core
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from './components/App';
//Context
import ThemeContext from './context/ThemeContext';
//Styles
import './index.css';

ReactDOM.render(
	<ThemeContext>
		<App />
	</ThemeContext>,
	document.getElementById('root'),
);
