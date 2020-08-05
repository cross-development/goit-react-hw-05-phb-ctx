//Core
import React from 'react';
import PropTypes from 'prop-types';
//HOC
import withTheme from '../../hoc/withTheme';
//Styles
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = ({ ctxTheme }) => {
	const { theme, onToggleTheme } = ctxTheme;

	return (
		<div className={styles.themeSelector}>
			<span className={styles.label}>Theme: {theme}</span>
			<label className={styles.switch}>
				<input type="checkbox" checked={theme === 'dark'} onChange={onToggleTheme} />
				<span className={styles.slider}></span>
			</label>
		</div>
	);
};

ThemeSwitcher.propTypes = {
	ctxTheme: PropTypes.shape({
		onToggleTheme: PropTypes.func.isRequired,
		theme: PropTypes.string.isRequired,
		themeStyle: PropTypes.shape({
			dark: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
			light: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
		}).isRequired,
	}).isRequired,
};

export default withTheme(ThemeSwitcher);
