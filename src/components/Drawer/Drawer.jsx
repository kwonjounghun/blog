import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './Drawer.module.scss';

const Drawer = ({ navigationList, navigationActive, onCloseDrawer }) => {
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
						return (
							<li key={index}>
								<Link className={cx(styles.navigationLink)} to={`/${item}`}>
									<h4>
										{item}
									</h4>
									<span className={cx(styles.discription)}>
										asdfasdf
									</span>
								</Link>
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
								<Link className={cx(styles.categortLink)} to={`/${item}`}>
									<span className={cx(styles.category)}></span>
									{item}
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

export default Drawer
