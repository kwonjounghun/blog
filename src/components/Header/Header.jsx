import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import { useStaticQuery, graphql } from "gatsby";

import { ContentWrapper } from '../commons';

import styles from './Header.module.scss';

const Header = ({
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
		</header>
	)
}

Header.propTypes = {
	navigationList: PropTypes.array,
	siteTitle: PropTypes.string,
}

export default Header
