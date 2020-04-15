import React from 'react';
import cx from 'classnames';
import Proptypes from 'prop-types';

import Cover from './Cover';
import PostMain from './PostMain';
import PostFooter from './PostFooter';
// import Comments from './Comments';
import PostRelated from './PostRelated';

import styles from './PostContent.module.scss';

const PostContent = ({ postData }) => {
	return (
		<article className={cx(styles.postContent)}>
			<Cover/>
			<PostMain/>
			<PostFooter/>
			{/* <Comments/> */}
			<PostRelated/>
		</article>
	);
};

PostContent.propTypes = {
	postData: Proptypes.object,
};

PostContent.defaultProps = {
	postData: {},
}

export default PostContent;
