//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Heading.module.css';

const Heading = ({ title }) => {
	return <h1 className={styles.heading}>{title}</h1>;
};

Heading.defaultProps = {
	title: '',
};

Heading.propTypes = {
	title: PropTypes.string,
};

export default Heading;
