//Core
import React from 'react';
import PropTypes from 'prop-types';
//HOC
import withTheme from 'hoc/withTheme';
//Styles
import styles from './Filter.module.css';

const Filter = ({ value, ctxTheme, onChangeFilter }) => {
	const { theme, themeStyle } = ctxTheme;
	const mainThemeStyle = theme === 'dark' ? themeStyle.dark : themeStyle.light;

	return (
		<div className={styles.filter} style={mainThemeStyle}>
			<label>
				Find contacts by name
				<input
					type="text"
					value={value}
					autoComplete="off"
					className={styles.input}
					onChange={e => onChangeFilter(e.target.value)}
				/>
			</label>
		</div>
	);
};

Filter.propTypes = {
	value: PropTypes.string.isRequired,

	onChangeFilter: PropTypes.func.isRequired,

	ctxTheme: PropTypes.shape({
		onToggleTheme: PropTypes.func.isRequired,
		theme: PropTypes.string.isRequired,
		themeStyle: PropTypes.shape({
			dark: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
			light: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
		}).isRequired,
	}).isRequired,
};

export default withTheme(Filter);
