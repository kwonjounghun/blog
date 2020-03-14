import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './PostDetailContentWrapper.module.scss';

const PostDetailContentWrapper = ({ children }) => {
    return (
        <div className={styles.contentWrapper}>
            {children}
        </div>
    )
}

PostDetailContentWrapper.propTypes = {

}

export default PostDetailContentWrapper;
