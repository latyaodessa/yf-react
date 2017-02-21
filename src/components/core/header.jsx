import React from 'react'
import MobileMenu from './mobile-menu'
import MainMenu from './main-menu'


export default class Header extends React.Component {
	render() {
		var mobileMenu = this.props.width <= this.props.mobileViewSize ? 	<MobileMenu/>:'';
		var mainMenu = this.props.width > this.props.mobileViewSize ? 	<MainMenu/>:'';
		return (
			<div>
				{mobileMenu}
				{mainMenu}
			</div>
		);
	}
};
