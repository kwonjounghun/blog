/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';

import Header from './Header';
import { ContentWrapper } from './commons';
import SideBar from './SideBar';

import '../styles/reset.scss';
import styles from './layout.module.scss';

const Layout = ({
  navigationList,
  isSideBar,
  children
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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} navigationList={navigationList} />
      <ContentWrapper>
        <div>
          <main className={cx(styles.mainContentWrapper, { [styles.useSideBar]: isSideBar })}>{children}</main>
          <div className={cx(styles.sideBar)}>
            <SideBar />
          </div>
          <footer>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </ContentWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
