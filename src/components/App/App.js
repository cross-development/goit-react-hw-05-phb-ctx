//Core
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
//Components
import Filter from '../Filter';
import Heading from '../Heading';
import Section from '../Section';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Notification from '../Notification';
import ThemeSwitcher from '../ThemeSwitcher';
//Utils
import { v4 as uuid } from 'uuid';
//Styles
import fadeFilter from 'animation/fadeFilter.module.css';
import fadeHeading from 'animation/fadeHeading.module.css';
import fadeNotification from 'animation/fadeNotification.module.css';

export class App extends Component {
	state = {
		filter: '',
		contacts: [],
		isNotice: false,
	};

	componentDidMount() {
		const existContact = localStorage.getItem('contacts');

		if (existContact) {
			this.setState({ contacts: JSON.parse(existContact) });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.contacts !== this.state.contacts) {
			localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
		}
	}

	addContact = (name, number) => {
		const isContactExists = this.state.contacts.find(
			contact => contact.name.toLowerCase() === name.toLowerCase(),
		);

		if (isContactExists) {
			this.setState({ isNotice: true });
			return this.setNotificationTimeout(2000);
		}

		const contact = {
			id: uuid(),
			name,
			number,
		};

		this.setState(prevState => ({ contacts: [...prevState.contacts, contact] }));
	};

	setNotificationTimeout = delay => {
		setTimeout(() => this.setState({ isNotice: false }), delay);
	};

	getVisibleContacts = () => {
		const { contacts, filter } = this.state;

		return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
	};

	removeContactById = contactId => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(({ id }) => id !== contactId),
			filter: '',
		}));
	};

	handleChangeFilter = filter => this.setState({ filter });

	render() {
		const { contacts, filter, isNotice } = this.state;

		const visibleContacts = this.getVisibleContacts();

		return (
			<Section>
				<ThemeSwitcher />

				<CSSTransition in={true} classNames={fadeHeading} timeout={500} appear unmountOnExit>
					<Heading />
				</CSSTransition>

				<CSSTransition in={isNotice} classNames={fadeNotification} timeout={250} unmountOnExit>
					<Notification />
				</CSSTransition>

				<ContactForm onAddContact={this.addContact} />

				<CSSTransition in={contacts.length > 1} classNames={fadeFilter} timeout={250} unmountOnExit>
					<Filter value={filter} onChangeFilter={this.handleChangeFilter} />
				</CSSTransition>

				{contacts.length > 0 && (
					<ContactList contacts={visibleContacts} onRemoveContact={this.removeContactById} />
				)}
			</Section>
		);
	}
}

export default App;
