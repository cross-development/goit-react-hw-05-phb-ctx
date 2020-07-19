//Core
import React from 'react';
import PropTypes from 'prop-types';
//HOC
import withTheme from '../../hoc/withTheme';
//Styles
import styles from './Section.module.css';

const Section = ({ children, ctxTheme }) => {
	const { theme, themeStyle } = ctxTheme;

	return (
		<section
			className={styles.section}
			style={theme === 'dark' ? themeStyle.dark : themeStyle.light}
		>
			{children}
		</section>
	);
};

Section.propTypes = {
	ctxTheme: PropTypes.object.isRequired,
	children: PropTypes.array.isRequired,
};

export default withTheme(Section);
