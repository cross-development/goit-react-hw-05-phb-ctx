//Core
import React from 'react';
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

export default withTheme(ThemeSwitcher);
