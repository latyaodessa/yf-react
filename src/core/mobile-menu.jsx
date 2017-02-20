import React from 'react'
import {Link, IndexLink} from 'react-router'


export default class MobileMenu extends React.Component {

	componentWillMount() {

	}

	 active = false;


	render() {

		{console.log(this.active)}


		if(this.active){
			return (
				<div className="mobile-menu">
					{this.getButton()}

					<h1>togle</h1>
					</div>
			)
		} else {
			return (
				<div className="mobile-menu">
					{this.getButton()}

					<h1>not</h1>
				</div>
			)
		}
	}

	getButton(){
		return <div className="hamburger-slim"></div>
	}
	toggleMenu(active){
		this.active = active;
	}

}


//
// {/*<nav className="main-nav" role="navigation">*/}
// 	{/*<ul>*/}
// 		{/*<li><a href=""><span>My Account</span></a></li>*/}
// 		{/*<li><a href=""><span>Billing Information</span></a></li>*/}
// 		{/*<li><a href=""><span>Order Tracker</span></a></li>*/}
// 		{/*<li><a href=""><span>Change Password</span></a></li>*/}
// 		{/*<li><a href=""><span>Log Out</span></a></li>*/}
// 	{/*</ul>*/}
// {/*</nav>*/}
