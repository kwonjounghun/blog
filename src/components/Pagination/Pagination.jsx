import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Pagination.module.scss';

const Pagination = ({
	isNext,
	isLast,
	isFirst,
}) => {
	return (
		<>
			{(!isNext && !isFirst) && (
				<div className={cx(styles.pagination)} style={{display: 'flex',}}>
					<div className={cx(styles.paginationLoader)}></div>
					<div className={cx(styles.paginationMessage)}>
				Loading More Articles...
					</div>
				</div>
			)}
			{(isNext && !isLast) && (
				<div className={cx(styles.pagination)} style={{display: 'flex',}}>
					<div className={cx(styles.paginationLoader)}></div>
					<div className={cx(styles.paginationMessage)}>
				Loading More Articles...
					</div>
				</div>
			)}
			{
				isLast && (
					<div className={cx(styles.pagination, styles.noResults)}>
						<div>NO</div>
						<div className="pagination-message">
					No More Articles
						</div>
					</div>
				)
			}
		</>
	)
}

Pagination.propTypes = {
	isNext: PropTypes.bool,
	isLast: PropTypes.bool,
	isFirst: PropTypes.bool,
}

export default Pagination
