import React from 'react'
import {Link, IndexLink} from 'react-router'
import LoginLogoutButton from '../core/menu-components/login-logout-button'
import SearchIcon from '../../res/img/64/search-icon.png'

export default class MainMenu extends React.Component {
	render() {
		return (
			<ul className="navigation">
				<li>
					<IndexLink to="/" activeClassName="active">Главная</IndexLink>
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
				<li className="prev-last-li">
					<div className="search-icon">
						<Link to="/search"> <img src={SearchIcon}/> </Link>
					</div>
				</li>
				<LoginLogoutButton />
			</ul>
		);
	}
};
