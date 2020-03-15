import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './ContentWrapper.module.scss';

const ContentWrapper = ({ children }) => {
    return (
        <div className={styles.contentWrapper}>
            {children}
        </div>
    )
}

ContentWrapper.propTypes = {

}

export default ContentWrapper
