import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './ProfileImage.module.scss';

const ProfileImage = ({ imageSrc, square, size, className }) => {
    return (
        <div
            className={cx(
                styles.profileImage,
                {
                    [styles.square]: square,
                    [styles.small]: size === 'small',
                    [styles.middle]: size === 'middle',
                    [styles.large]: size === 'large',
                },
                className,
            )}
        >
            Profile
            <div
                className={cx(styles.image)}
                style={{
                    backgroundImage: `url(${imageSrc})` || ''
                }}
            ></div>
        </div>
    );
};

ProfileImage.propTypes = {
    imageSrc: PropTypes.string,
    square: PropTypes.bool,
    size: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

ProfileImage.defaultProps = {
    imageSrc: '',
    square: false,
    size: 'small',
    className: '',
}

export default ProfileImage;
