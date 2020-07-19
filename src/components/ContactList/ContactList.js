//Core
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//Components
import ContactListItem from '../ContactListItem/ContactListItem';
//Styles
import styles from './ContactList.module.css';
import '../../animation/fadeContactList.css';

const ContactList = ({ contacts, onRemoveContact }) => {
	return (
		<TransitionGroup component="ul" className={styles.contactList}>
			{contacts.map(({ id, name, number }) => (
				<CSSTransition key={id} timeout={250} classNames="ContactList-item-fade">
					<ContactListItem name={name} number={number} onRemove={() => onRemoveContact(id)} />
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
