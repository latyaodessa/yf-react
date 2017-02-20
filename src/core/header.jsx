import React from 'react'
import {Link, IndexLink} from 'react-router'
import MobileMenu from '../core/mobile-menu'
import MainMenu from '../core/main-menu'


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
