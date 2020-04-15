import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './PostListHeader.module.scss';

const PostListHeader = ({
	useFillter,
	setUseFillter,
}) => {
	const [useSearch, setUseSearch] = useState(false);

	return (
		<div className={cx(
			styles.postListHeader,
			{
				[styles.useSearch]: useSearch,
				[styles.useFillter]: useFillter
			}
		)}>
			<button onClick={() => setUseFillter(!useFillter)}>
				<h2 className={cx(styles.postListHeaderTitle)}>
					Latest Articles
					<div className={cx(styles.postListHeaderTitleIcon)}>open</div>
				</h2>
			</button>
			<div className={cx(styles.postListHeaderSearch)}>
				<button onClick={() => setUseSearch(true)} className={cx(styles.postListHeaderSearchIcon)}>icon</button>
				<form className={cx(styles.postListHeaderSearchForm)}>
					<input className={cx(styles.postListHeaderSearchInput)} placeholder="Search the blog..." />
				</form>
				<button onClick={() => setUseSearch(false)} className={cx(styles.postListHeaderSearchIcon)}>close</button>
			</div>
		</div>
	)
}

PostListHeader.propTypes = {
	useFillter: PropTypes.bool,
	setUseFillter: PropTypes.func,
};

export default PostListHeader;
