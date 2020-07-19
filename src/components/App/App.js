//Core
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
//Components
import Filter from '../Filter/Filter';
import Heading from '../Heading/Heading';
import Section from '../Section/Section';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import Notification from '../Notification/Notification';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
//Context
import ThemeContext from '../../context/ThemeContext';
//Utils
import { v4 as uuid } from 'uuid';
//Styles
import './App.module.css';
import '../../animation/fadeFilter.css';
import '../../animation/fadeHeading.css';
import '../../animation/fadeNotification.css';

export class App extends Component {
	state = {
		contacts: [],
		filter: '',
		showNotification: false,
	};

	componentDidMount() {
		const existContact = localStorage.getItem('contacts');

		if (existContact) {
			this.setState({ contacts: JSON.parse(existContact) });
		}
	}

	componentDidUpdate(prevState) {
		if (prevState.contacts !== this.state.contacts) {
			localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
		}
	}

	addContact = (name, number) => {
		const { contacts } = this.state;

		const isContactExists = contacts.find(
			contact => contact.name.toLowerCase() === name.toLowerCase(),
		);

		if (isContactExists) {
			this.setState({ showNotification: true });
			return this.setNotificationTimeout(2000);
		}

		const contact = {
			id: uuid(),
			name,
			number,
		};

		this.setState(prevState => {
			return {
				contacts: [...prevState.contacts, contact],
			};
		});
	};

	setNotificationTimeout = delay => {
		setTimeout(() => {
			this.setState({ showNotification: false });
		}, delay);
	};

	getVisibleContacts = () => {
		const { contacts, filter } = this.state;

		return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
	};

	removeContact = contactId => {
		this.setState(prevState => {
			return {
				contacts: prevState.contacts.filter(({ id }) => id !== contactId),
			};
		});
	};

	handleChangeFilter = filter => {
		this.setState({ filter });
	};

	render() {
		const { contacts, filter, showNotification } = this.state;

		const visibleContact = this.getVisibleContacts();

		return (
			<>
				<ThemeContext>
					<Section>
						<ThemeSwitcher />

						<CSSTransition in={true} classNames="Heading-fade" timeout={500} appear unmountOnExit>
							<Heading title="Phonebook" />
						</CSSTransition>

						<CSSTransition
							in={showNotification}
							classNames="Notification-fade"
							timeout={250}
							unmountOnExit
						>
							<Notification title="Contact already exists!" />
						</CSSTransition>

						<ContactForm onAddContact={this.addContact} />

						<CSSTransition
							in={contacts.length > 1}
							classNames="Filter-fade"
							timeout={250}
							unmountOnExit
						>
							<Filter
								title="Find contacts by name"
								value={filter}
								onChangeFilter={this.handleChangeFilter}
							/>
						</CSSTransition>

						{contacts.length > 0 && (
							<ContactList contacts={visibleContact} onRemoveContact={this.removeContact} />
						)}
					</Section>
				</ThemeContext>
			</>
		);
	}
}

export default App;
