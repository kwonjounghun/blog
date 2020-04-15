import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from  './PostFooter.module.scss';

const PostFooter = ({ data }) => {
	return (
		<div className={cx(styles.postFooter)}>
			<div className={cx(styles.postFooterAuthor)}>
				<div className={cx(styles.postFooterAuthorThumbnail)}>
					<div
						className={cx(styles.postFooterAuthorThumbnailImage)}
						style={{
							backgroundImage: 'url("https://hydra-wp.ecko.me/wp-content/uploads/2017/10/harveys-100x100.jpg")',
						}}
					>
					</div>
				</div>
				<div className={cx(styles.postFooterAuthorInfo)}>
					<div className={cx(styles.postFooterAuthorInfoName)}>Harvey Specter</div>
					<div className={cx(styles.postFooterAuthorInfoSNS)}>@eckothemes</div>
				</div>
			</div>
		</div>
	)
}

PostFooter.propTypes = {
	data: PropTypes.object
}

export default PostFooter
