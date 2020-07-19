//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Notification.module.css';

const Notification = ({ title }) => {
	return (
		<div className={styles.notificationWrapper}>
			<p className={styles.notificationText}>{title}</p>
		</div>
	);
};

Notification.defaultProps = {
	title: 'Ooops! Something went wrong...',
};

Notification.propTypes = {
	title: PropTypes.string,
};

export default Notification;
