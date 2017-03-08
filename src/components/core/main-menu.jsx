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
				<li>
					<Link to="/native" activeClassName="active">Наши</Link>
				</li>
				<li>
					<Link to="/sets" activeClassName="active">Зарубежные</Link>
				</li>
				<li>
					<Link to="/art" activeClassName="active">Art</Link>
				</li>
					<LoginLogoutButton />
			</ul>
		);
	}
};
