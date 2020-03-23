import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from 'prop-types';

import { ContentWrapper } from '../commons';

import styles from './Header.module.scss';

const Header = ({ navigationList = [], siteTitle }) => {

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
                    <img src={src}/>
                    {siteTitle}
                    {navigationList.map(item => {
                        return (<Link to={`/${item}`}>{item}</Link>);
                    })}
                </div>
            </ContentWrapper>
        </header>
    )
}

Header.propTypes = {

}

export default Header
