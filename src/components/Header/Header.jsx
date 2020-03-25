import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import { useStaticQuery, graphql } from "gatsby";

import styles from './Header.module.scss';

const Header = ({
	navigationActive,
	navigationList = [],
	siteTitle,
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
					<a href="https://hydra-wp.ecko.me/">
						<img src="https://hydra-wp.ecko.me/wp-content/uploads/2017/10/eckologo.png" className="retina" alt="EckoThemes" />
					</a>
				</h1>
			</div>

			<div className={cx(styles.headerNavigation)}>
				<span className={cx(styles.headerNavigationText)}>Navigation</span>
				<div className={cx(styles.headerNavigationIcon)}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			{/* </header>
			<header className={cx(styles.header)}>
				<ContentWrapper>
					<div className={cx(styles.content)}>
						<img src={src} />
						{siteTitle}
						{navigationList.map((item, index) => {
							return (<Link key={index} to={`/${item}`}>{item}</Link>);
						})}
					</div>
				</ContentWrapper>
			</header> */}
		</header>
	)
}

Header.propTypes = {
	navigationList: PropTypes.array,
	siteTitle: PropTypes.string,
	navigationActive: PropTypes.bool,
}

export default Header
