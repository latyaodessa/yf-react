import React from 'react'
import {Link, IndexLink} from 'react-router'


const Footer = () => {
	return (
		<ul className="navigation">
			<li>
				<IndexLink to="/" activeClassName="active">Главная</IndexLink>
			</li>
		</ul>
	);
};

export default Footer;
