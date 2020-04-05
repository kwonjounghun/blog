import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import PostCard from '../PostCard';
import PostListHeader from '../PostListHeader';
import PostListSearchFillter from '../PostListSearchFillter';
import Pagination from '../Pagination';

import styles from './PostList.module.scss';

const PostList = ({ PostListData, activePost }) => {
	const [useFillter, setUseFillter] = useState(false);

	return (
		<div className={cx(styles.postList)}>
			<PostListHeader useFillter={useFillter} setUseFillter={setUseFillter} />
			<PostListSearchFillter useFillter={useFillter} setUseFillter={setUseFillter} />
			<div className={cx(styles.postListInner)}>
				{
					activePost && (
						<PostCard isActivePost {...activePost}/>
					)
				}
				{
					PostListData.map((item, index) => {
						return (<PostCard key={`postCard-${index}`} {...item.node.frontmatter} discription={item.node.excerpt} />);
					})
				}
				<Pagination isNext />
			</div>
		</div>
	)
}

PostList.propTypes = {
	PostListData: PropTypes.array,
	activePost: PropTypes.object,
};

export default PostList;
