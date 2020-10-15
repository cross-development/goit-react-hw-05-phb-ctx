//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//HOC
import withTheme from 'hoc/withTheme';
//Styles
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
	static propTypes = {
		onAddContact: PropTypes.func.isRequired,
	};

	state = {
		name: '',
		number: '',
	};

	handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

	handleSubmit = e => {
		e.preventDefault();

		this.props.onAddContact(this.state.name, this.state.number);
		this.setState({ name: '', number: '' });
	};

	render() {
		const {
			state: { name, number },
			props: { ctxTheme },
		} = this;

		const { theme, themeStyle } = ctxTheme;

		const mainThemeStyle = theme === 'dark' ? themeStyle.dark : themeStyle.light;

		return (
			<form className={styles.form} onSubmit={this.handleSubmit} style={mainThemeStyle}>
				<label>
					Name
					<input
						autoFocus
						type="text"
						name="name"
						value={name}
						autoComplete="off"
						className={styles.input}
						onChange={this.handleChange}
					/>
				</label>

				<label>
					Number
					<input
						type="text"
						name="number"
						value={number}
						autoComplete="off"
						className={styles.input}
						onChange={this.handleChange}
					/>
				</label>

				<button className={styles.button} type="submit">
					Add contact
				</button>
			</form>
		);
	}
}

export default withTheme(ContactForm);
