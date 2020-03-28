import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';

import styles from './PostCard.module.scss';

const PostCard = () => {
	return (
		<article className={cx(styles.postCard)}>
			<Link className={cx(styles.postInner)} to="/">
				<div className={cx(styles.postThumbnail)}>
					<div
						className={cx(styles.postImage)}
						style={{
							backgroundImage: 'url("https://hydra-wp.ecko.me/wp-content/uploads/2017/10/martin-ceralde-40407-680x847.jpg")',
						}}
					></div>
				</div>
				<div className={cx(styles.postCardContent)}>
					<div className={cx(styles.postCategory)}>
						<span></span>
						category
					</div>
					<h3 className={cx(styles.postTitle)}>Average Manager vs. Great Manager</h3>
					<p className={cx(styles.postExcerpt)}>
					A manager is a person who manages or is in charge of something. Managers can control departments in companies, or guide the people who work for them.
					</p>
					<p className={cx(styles.postMeta)}>
						<span className={cx(styles.postSticky)}></span>
						Posted
						<span className={cx(styles.postMetaDate)}><time dateTime="2018-09-22">on 22nd September 2018</time></span>
						<span className={cx(styles.postMetaAuthor)}>by Harvey Specter</span>
					</p>
				</div>
			</Link>
		</article>
	);
};

PostCard.propTypes = {

};

export default PostCard;
