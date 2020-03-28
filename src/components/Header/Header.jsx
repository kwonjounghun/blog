import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import { useStaticQuery, graphql } from "gatsby";

import styles from './Header.module.scss';

const Header = ({
	navigationActive,
	onHandleDrawer,
}) => {

	const data = useStaticQuery(graphql`
		query {
			file(relativePath: {eq: "logo.jpg"}) {
				childImageSharp {
					fixed(width: 60) {
						src
					}
				}
			}
		}
	`);

	const {
		file: {
			childImageSharp: {
				fixed: {
					src
				},
			}
		}
	} = data;

	return (
		<header className={cx(styles.header, { [styles.navigationActive]: navigationActive })}>
			<div className={cx(styles.headerTitle)}>
				<h1 className={cx(styles.headerTitleLogo)}>
					<Link href="/">
						<img src={src} className="retina" alt="EckoThemes" />
					</Link>
				</h1>
			</div>

			<button onClick={() => onHandleDrawer(!navigationActive)} className={cx(styles.headerNavigation)}>
				<span className={cx(styles.headerNavigationText)}>Navigation</span>
				<div className={cx(styles.headerNavigationIcon)}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>
		</header>
	)
}

Header.propTypes = {
	navigationActive: PropTypes.bool,
	onHandleDrawer: PropTypes.func,
}

export default Header
