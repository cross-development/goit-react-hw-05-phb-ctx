//Core
import React from 'react';
//Context
import ThemeContext from '../context/ThemeContext';

const withTheme = WrappedComponent => {
	return function WithTheme(props) {
		return (
			<ThemeContext.Consumer>
				{ctx => <WrappedComponent {...props} ctxTheme={ctx} />}
			</ThemeContext.Consumer>
		);
	};
};

export default withTheme;
