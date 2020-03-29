import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import PostCard from '../PostCard';
import PostListHeader from '../PostListHeader';

import styles from './PostList.module.scss';

const PostList = () => {
	return (
		<div className={cx(styles.postList)}>
			<PostListHeader />
			<PostCard />
		</div>
	)
}

PostList.propTypes = {

};

export default PostList;
