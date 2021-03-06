/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';

import Header from './Header';
import { ContentWrapper } from './commons';
import SideBar from './SideBar';
import PostList from './PostList';
import Drawer from './Drawer';
import PostContent from './PostContent';

import '../styles/reset.scss';
import styles from './layout.module.scss';

const Layout = ({
	navigationList,
	PostListData,
}) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
	`)
	
	const [isActive, setIsActive] = useState(false);

	const handleDrawer = (bool) => {
		setIsActive(bool);
	}

	return (
		<div className={cx(styles.layout)}>
			<SideBar>
				<Header
					siteTitle={data.site.siteMetadata.title}
					onHandleDrawer={handleDrawer}
					navigationActive={isActive}
				/>
				<Drawer navigationList={navigationList} navigationActive={isActive} onCloseDrawer={() => handleDrawer(false)}/>
				<PostList PostListData={PostListData}/>
			</SideBar>
			<ContentWrapper>
				<PostContent />
			</ContentWrapper>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	navigationList: PropTypes.array,
	isSideBar: PropTypes.bool,
	PostListData: PropTypes.array,
}

export default Layout
