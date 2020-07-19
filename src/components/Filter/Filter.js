//Core
import React from 'react';
import PropTypes from 'prop-types';
//HOC
import withTheme from '../../hoc/withTheme';
//Styles
import styles from './Filter.module.css';

const Filter = ({ title, value, ctxTheme, onChangeFilter }) => {
	const { theme, themeStyle } = ctxTheme;

	return (
		<div className={styles.filter} style={theme === 'dark' ? themeStyle.dark : themeStyle.light}>
			<label>
				{title}
				<input
					className={styles.phonebookInput}
					type="text"
					autoComplete="off"
					value={value}
					onChange={e => onChangeFilter(e.target.value)}
				/>
			</label>
		</div>
	);
};

Filter.defaultProps = {
	title: '',
};

Filter.propTypes = {
	title: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
	ctxTheme: PropTypes.object.isRequired,
};

export default withTheme(Filter);
