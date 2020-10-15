//Core
import React from 'react';
import PropTypes from 'prop-types';
//HOC
import withTheme from 'hoc/withTheme';
//Styles
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onRemove, ctxTheme }) => {
	const { theme, themeStyle } = ctxTheme;
	const mainThemeStyle = theme === 'dark' ? themeStyle.dark : themeStyle.light;

	return (
		<li className={styles.listItem} style={mainThemeStyle}>
			<p className={styles.contact}>
				<span>{name}:</span> {number}
			</p>
			<button type="button" className={styles.button} onClick={onRemove}>
				&#10006;
			</button>
		</li>
	);
};

ContactListItem.propTypes = {
	name: PropTypes.string.isRequired,

	number: PropTypes.string.isRequired,

	onRemove: PropTypes.func.isRequired,

	ctxTheme: PropTypes.shape({
		onToggleTheme: PropTypes.func.isRequired,
		theme: PropTypes.string.isRequired,
		themeStyle: PropTypes.shape({
			dark: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
			light: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
		}).isRequired,
	}).isRequired,
};

export default withTheme(ContactListItem);
