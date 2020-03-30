import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './PostMain.module.scss';

const PostMain = ({ category }) => {
	return (
		<div className={cx(styles.postMain)}>
			<div className={cx(styles.guide)}>
				<div className={cx(styles.guideInner)}>
					<div className={cx(styles.guideTitle)}>
						<span></span> Average Manager vs. Great Manager
					</div>
					<div className={cx(styles.guideMeta)}>
						Posted
						<span className={cx(styles.guideMetaDate)}>
							<time dateTime="2018-09-22">on 22nd September 2018</time>
						</span>
						<span className={cx(styles.guideMetaAuthor)}>by Harvey Specter</span>
					</div>
				</div>
			</div>
			<div className={cx(styles.postInner)}>
				<div className={cx(styles.postContents)}></div>
			</div>
		</div>
	)
}

PostMain.propTypes = {
	category: PropTypes.string,
}

export default PostMain
