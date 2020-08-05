//Core
import React, { Component, createContext } from 'react';

const Context = createContext();

const themeConfig = {
	light: {
		backgroundColor: '#ffffff',
		color: '#000000',
	},

	dark: {
		backgroundColor: '#212121',
		color: '#ffffff',
		border: '1px solid #ffffff',
	},
};

export default class ThemeContext extends Component {
	static Consumer = Context.Consumer;

	componentDidMount() {
		const existTheme = localStorage.getItem('theme');

		if (existTheme) {
			this.setState({ theme: JSON.parse(existTheme) });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.theme !== this.state.theme) {
			localStorage.setItem('theme', JSON.stringify(this.state.theme));
		}
	}

	toggleTheme = () => this.setState({ theme: this.state.theme === 'dark' ? 'light' : 'dark' });

	state = {
		theme: 'light',
		themeStyle: themeConfig,
		onToggleTheme: this.toggleTheme,
	};

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}
