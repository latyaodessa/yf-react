import React from 'react'
import {Link, IndexLink} from 'react-router'


const Header = () => {
	return (
		<div>
			<h2 className="menu-toggle" onClick={toggle}>toggle</h2>
		<ul className="navigation">
			<li>
				<IndexLink to="/" activeClassName="active">Home</IndexLink>
			</li>
			<li>
				<Link to="/cats" activeClassName="active">Cats</Link>
			</li>
		</ul>
		</div>
	);
};

function toggle() {
	console.log("menu");
}

export default Header;
