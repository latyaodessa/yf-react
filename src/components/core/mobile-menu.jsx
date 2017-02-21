import React from 'react'
import {Link, IndexLink} from 'react-router'


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
			<span className="burger"></span>
			<span className="burger"></span>
			<span className="burger"></span>
		</button>
	}

	getMobileMenu() {
		return <div className="menu-expanded">
			<nav>
				<ul>
					<li onClick={this.changeToggleState.bind(this)}><IndexLink to="/" activeClassName="active">Home</IndexLink>
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
