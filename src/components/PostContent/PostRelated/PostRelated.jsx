import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'gatsby';

import styles from './PostRelated.module.scss';

const PostRelated = ({ data }) => {
	return (
		<div className={cx(styles.postRelated)}>
			<h3 className={cx(styles.postRelatedTitle)}>Related Articles</h3>
			<div className={cx(styles.postRelatedContainer)}>
				<div className={cx(styles.postRelatedItem)}>
					<Link to="/">
						<div className={cx(styles.postRelatedItemThumbnail)}>
							<div className={cx(styles.postRelatedItemImage)} style={{ backgroundImage: 'url("https://hydra-wp.ecko.me/wp-content/uploads/2017/10/antoine-bussy-388724-500x623.jpg")', }}></div>
						</div>
						<div className={cx(styles.postRelatedItemCategory)}>
							<div className="category">
								<span></span>Startups
							</div>
						</div>
						<h4 className={cx(styles.postRelatedItemTitle)}>
						300 Awesome Free Tools & Services for Startup Entrepreneurs
						</h4>
						<p className={cx(styles.postRelatedItemExcerpt)}>
						He was full of speculation that night about the condition of Mars, and scoffed at the vulgar idea of its having inhabitants who were signalling us. His idea was that meteorites...
						</p>
						<div className={cx(styles.postRelatedItemMeta)}>
						Posted on <time dateTime="2017-09-25">25th September 2017</time> by Harvey Specter
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

PostRelated.propTypes = {
	data: PropTypes.object
}

export default PostRelated
