import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './Drawer.module.scss';

const Drawer = ({ navigationList, navigationActive, onCloseDrawer }) => {
	const [openSubMenu, setOpenSubMenu] = useState('');

	useEffect(() => {
		if (!navigationActive) {
			setOpenSubMenu('');
		}
	}, [navigationActive]);
	return (
		<aside className={cx(styles.drawer, { [styles.active]: navigationActive })}>
			<button onClick={onCloseDrawer} className={cx(styles.drawerClose)}>
				<div className={cx(styles.svgIcon, styles.svgIconStroke, styles.drawerCloseIcon)}>
					x
				</div>
			</button>
			<section className={cx(styles.widget, styles.navigation)}>
				<h3 className={cx(styles.widgetTitle)}>Navigation</h3>
				<ul>
					{navigationList.map((item, index) => {
						const isSubMenu = item.category.length > 0;
						const Element = isSubMenu ? 'button' : Link;
						return (
							<li key={index} className={cx({ [styles.openSubMenu]: openSubMenu === item.name })}>
								<Element
									className={cx(styles.navigationLink)}
									to={`/${item.name}`}
									onClick={() => setOpenSubMenu(openSubMenu === item.name ? '' : item.name)}
								>
									<h4>
										{item.name}
									</h4>
									<span className={cx(styles.discription)}>
										{item.discription}
									</span>
									{isSubMenu && (<div
										className={cx(styles.subMenuOpenBtn)}
									>
										open
									</div>)}
								</Element>
								{
									isSubMenu && (
										<ul className={cx(styles.subMenu)}>
											{item.category.map((subMenu, subIndex) => {
												return (
													<li key={`subMenu-${subIndex}`}>
														<Link to={`/${subMenu}`}>{subMenu}</Link>
													</li>
												);
											})}
										</ul>
									)
								}
							</li>
						);
					})}
				</ul>
			</section>
			<section className={cx(styles.widget, styles.categories)}>
				<h3 className={cx(styles.widgetTitle)}>categories</h3>
				<ul>
					{navigationList.map((item, index) => {
						return (
							<li key={index}>
								<Link className={cx(styles.categortLink)} to={`/${item.name}`}>
									<span className={cx(styles.category)}></span>
									{item.name}
									<span className={cx(styles.count)}>(3)</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</aside >
	)
}

Drawer.propTypes = {
	navigationList: PropTypes.array,
	navigationActive: PropTypes.bool,
	onCloseDrawer: PropTypes.func,
}

Drawer.defaultProps = {
	navigationList: [{
		category: []
	}]
}

export default Drawer
