import React from 'react'
import {Link, IndexLink} from 'react-router'
import LoginLogoutButton from '../core/menu-components/login-logout-button'

export default class MainMenu extends React.Component {
	render() {
		return (
			<ul className="navigation">
				<li>
					<IndexLink to="/" activeClassName="active">Home</IndexLink>
				</li>
				{/*<li>*/}
					<LoginLogoutButton />
				{/*</li>*/}
			</ul>
		);
	}
};
