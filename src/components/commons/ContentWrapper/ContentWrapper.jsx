import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './ContentWrapper.module.scss';

const ContentWrapper = ({ children }) => {
	return (
		<div className={cx(styles.contentWrapper)}>
			{children}
		</div>
	)
}

ContentWrapper.propTypes = {
	children: PropTypes.node.children,
}

export default ContentWrapper
