import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import PostCard from '../PostCard';
import PostListHeader from '../PostListHeader';
import PostListSearchFillter from '../PostListSearchFillter';

import styles from './PostList.module.scss';

const PostList = () => {
	const [useFillter, setUseFillter] = useState(false);

	return (
		<div className={cx(styles.postList)}>
			<PostListHeader useFillter={useFillter} setUseFillter={setUseFillter} />
			<PostListSearchFillter useFillter={useFillter} setUseFillter={setUseFillter} />
			<PostCard />
		</div>
	)
}

PostList.propTypes = {

};

export default PostList;
