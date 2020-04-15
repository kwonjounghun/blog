import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import Proptypes from 'prop-types';

import styles from './PostCard.module.scss';

const PostCard = ({ title, category, date, Thumbnail, path = '/', discription = '', isActivePost }) => {
	return (
		<article className={cx(styles.postCard, { [styles.isActivePost]: isActivePost })}>
			<Link className={cx(styles.postInner)} to={path}>
				<div className={cx(styles.postThumbnail)}>
					<div
						className={cx(styles.postImage)}
						style={{
							backgroundImage: `url("${Thumbnail}")`,
						}}
					></div>
				</div>
				<div className={cx(styles.postCardContent)}>
					<div className={cx(styles.postCategory)}>
						<span></span>
						{category}
					</div>
					<h3 className={cx(styles.postTitle)}>{title}</h3>
					<p className={cx(styles.postExcerpt)}>
						{discription}
					</p>
					<p className={cx(styles.postMeta)}>
						<span className={cx(styles.postSticky)}></span>
						Posted
						<span className={cx(styles.postMetaDate)}><time dateTime={date}>on 22nd September 2018</time></span>
						<span className={cx(styles.postMetaAuthor)}>by Harvey Specter</span>
					</p>
				</div>
			</Link>
		</article>
	);
};

PostCard.propTypes = {
	title: Proptypes.string,
	category: Proptypes.string,
	date: Proptypes.string,
	Thumbnail: Proptypes.string,
	discription: Proptypes.string,
	path: Proptypes.string,
	isActivePost: Proptypes.bool,
};

export default PostCard;
