//Core
import React from 'react';
import PropTypes from 'prop-types';
//HOC
import withTheme from 'hoc/withTheme';
//Styles
import styles from './Section.module.css';

const Section = ({ children, ctxTheme }) => {
	const { theme, themeStyle } = ctxTheme;
	const mainThemeStyle = theme === 'dark' ? themeStyle.dark : themeStyle.light;

	return (
		<section className={styles.section} style={mainThemeStyle}>
			{children}
		</section>
	);
};

Section.propTypes = {
	children: PropTypes.node.isRequired,

	ctxTheme: PropTypes.shape({
		onToggleTheme: PropTypes.func.isRequired,
		theme: PropTypes.string.isRequired,
		themeStyle: PropTypes.shape({
			dark: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
			light: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
		}).isRequired,
	}).isRequired,
};

export default withTheme(Section);
