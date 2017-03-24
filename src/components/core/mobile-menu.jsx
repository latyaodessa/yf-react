import React from 'react'
import {Link, IndexLink} from 'react-router'
import MobileLoginLogoutButton from '../core/menu-components/login-log-out-mobile'
import SearchIcon from '../../res/img/64/search-icon.png'


export default class MobileMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMobileMenu: false,
			toggle: 'hamburger'
		};
	}

	render() {
		var mobileMenu = this.state.showMobileMenu ? this.getMobileMenu() : '';
		return (
			<div className="mobile-menu">
				{this.getButton()}
				{mobileMenu}
			</div>
		)
	}

	getButton() {
		return <button onClick={this.changeToggleState.bind(this)} className={this.state.toggle}>
			<span className="burger"/>
			<span className="burger"/>
			<span className="burger"/>
		</button>
	}

	getMobileMenu() {
		return <div className="menu-expanded">
			<nav>
				<ul>
					<li onClick={this.changeToggleState.bind(this)}>
						<IndexLink to="/" activeClassName="active">Главная</IndexLink>
					</li>
					<li onClick={this.changeToggleState.bind(this)}>
						<Link to="/native" activeClassName="active">Наши</Link>
					</li>
					<li onClick={this.changeToggleState.bind(this)}>
						<Link to="/sets" activeClassName="active">Зарубежные</Link>
					</li>
					<li onClick={this.changeToggleState.bind(this)}>
						<Link to="/art" activeClassName="active">Art</Link>
					</li>
					<li>
						<div className="search-icon">
							<Link to="/search"> <img src={SearchIcon}/> </Link>
						</div>
					</li>
					<li className="last-li" onClick={this.changeToggleState.bind(this)}>
						<MobileLoginLogoutButton/>
					</li>
				</ul>
			</nav>
		</div>
	}

	changeToggleState() {
		this.setState({
			showMobileMenu: !this.state.showMobileMenu,
			toggle: !this.state.showMobileMenu == false ? 'hamburger' : 'hamburger focus'
		});
	}
}
