import React from 'react'
import {Link, IndexLink} from 'react-router'
import MobileMenu from '../core/mobile-menu'


const Header = () => {
	return (
		<div>
		<MobileMenu/>
			<ul className="navigation">
			<li>
				<IndexLink to="/" activeClassName="active">Home</IndexLink>
			</li>
		</ul>
		</div>
	);
};

function toggle() {
	console.log("menu");
}

export default Header;
