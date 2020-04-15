import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Cover.module.scss';

const Cover = ({ category }) => {
	return (
		<div className={cx(styles.cover)}>
			<div
				className={cx(styles.coverBackgorund)}
				style={{
					backgroundImage: 'url("https://hydra-wp.ecko.me/wp-content/uploads/2017/10/martin-ceralde-40407.jpg")',
				}}
			>
			</div>
			<div className={cx(styles.coverGradient)}></div>
			<div className={cx(styles.coverMouse)}>
				<span></span>
			</div>
			<div className={cx(styles.coverContent)}>
				<div className={cx(styles.coverCategory)}>
					<span></span>
					lifestyle
				</div>
				<h1 className={cx(styles.coverTitle)}>
					Average Manager vs. Great Manager
				</h1>
				<p className={cx(styles.coverExcerpt)}>
				A manager is a person who manages or is in charge of something. Managers can control departments in companies, or guide the people who work for them.
				</p>
				<hr className={cx(styles.coverDivider)}/>
				<div className={cx(styles.coverAuthor)}>
					<div className={cx(styles.coverAuthorThumbnail)}>
						<div
							className={cx(styles.coverAuthorThumbnailImage)}
							style={{
								backgroundImage: 'url("https://hydra-wp.ecko.me/wp-content/uploads/2017/10/harveys-100x100.jpg")',
							}}
						>
						</div>
					</div>
					<div className={cx(styles.coverAuthorInfo)}>
						<div className={cx(styles.coverAuthorInfoName)}>Harvey Specter</div>
						<div className={cx(styles.coverAuthorInfoSNS)}>@eckothemes</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Cover.propTypes = {
	category: PropTypes.string,
}

export default Cover
