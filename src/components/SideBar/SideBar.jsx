import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './SideBar.module.scss';

const SideBar = ({ children }) => {
	return (
		<div className={cx(styles.content)}>
			{children}
		</div>
	)
}

SideBar.propTypes = {
	children: PropTypes.node.children,
}

export default SideBar
