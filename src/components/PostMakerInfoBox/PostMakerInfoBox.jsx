import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ProfileImage } from '../commons';

import styles from './PostMakerInfoBox.module.scss';

const PostMakerInfoBox = ({ makerName, date, collection, category, isAbsolute }) => {
    return (
        <div className={cx(styles.postMakerInfoBox, { [styles.absolute]: isAbsolute })}>
            <ProfileImage className={cx(styles.profile)} size="large"/>
            <div className={cx(styles.infoBox)}>
                <p className={cx(styles.makerName)}>{makerName}</p>
                <ul>
                    <li>{date}</li>
                    <li>{collection}</li>
                    <li>{category}</li>
                </ul>
            </div>
        </div>
    );
};

PostMakerInfoBox.propTypes = {
    makerName: PropTypes.string,
    date: PropTypes.string,
    collection: PropTypes.string,
    category: PropTypes.string,
    isAbsolute: PropTypes.bool,
};

export default PostMakerInfoBox;
