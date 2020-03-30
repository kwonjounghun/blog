import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'gatsby';

import styles from './PostListSearchFillter.module.scss';

const PostListSearchFillter = ({
	useFillter,
	setUseFillter,
}) => {
	return (
		<div className={cx(styles.PostListSearchFillter, { [styles.useFillter]: useFillter})}>
			searchFillter
			<button onClick={() => setUseFillter(false)} className={cx(styles.PostListSearchFillterClose)}>close</button>
			<div className={styles.PostListSearchFillterCategory}>
				<p className={styles.PostListSearchFillterTitle}>Filter by Category</p>
				<ul className={cx(styles.PostListSearchFillterList)}>
					<li className={cx(styles.PostListSearchFillterListItem)}>
						<Link className={cx(styles.PostListSearchFillterListItemLink)} to="/">
							<span className={cx(styles.PostListSearchFillterListItemCategory)}></span>
							lifestyle
							<span className={cx(styles.PostListSearchFillterCount)}>(3)</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

PostListSearchFillter.propTypes = {
	useFillter: PropTypes.bool,
	setUseFillter: PropTypes.func,
};

export default PostListSearchFillter;
