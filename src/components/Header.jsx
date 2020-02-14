import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ navigationList = [], siteTitle }) => {
    return (
        <header>
            {siteTitle}
            {navigationList.map(item => {
                return (<Link to={`/${item}`}>{item}</Link>);
            })}
        </header>
    )
}

Header.propTypes = {

}

export default Header
