//Core
import React from 'react';
import PropTypes from 'prop-types';
//HOC
import withTheme from '../../hoc/withTheme';
//Styles
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onRemove, ctxTheme }) => {
	const { theme, themeStyle } = ctxTheme;

	return (
		<li className={styles.listItem} style={theme === 'dark' ? themeStyle.dark : themeStyle.light}>
			<p className={styles.contact}>
				<span>{name}:</span> {number}
			</p>
			<div className={styles.contactAction}>
				<button type="button" className={styles.contactListButton} onClick={onRemove}>
					&#10006;
				</button>
			</div>
		</li>
	);
};

ContactListItem.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onRemove: PropTypes.func.isRequired,
	ctxTheme: PropTypes.object.isRequired,
};

export default withTheme(ContactListItem);
