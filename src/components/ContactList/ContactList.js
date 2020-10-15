//Core
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//Components
import ContactListItem from '../ContactListItem';
//Styles
import styles from './ContactList.module.css';
import fade from 'animation/fadeContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
	<TransitionGroup component="ul" className={styles.contactList}>
		{contacts.map(({ id, name, number }) => (
			<CSSTransition key={id} timeout={250} classNames={fade}>
				<ContactListItem name={name} number={number} onRemove={() => onRemoveContact(id)} />
			</CSSTransition>
		))}
	</TransitionGroup>
);

ContactList.propTypes = {
	onRemoveContact: PropTypes.func.isRequired,

	contacts: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

export default ContactList;
