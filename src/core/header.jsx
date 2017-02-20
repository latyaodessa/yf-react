import React from 'react'
import {Link, IndexLink} from 'react-router'
import MobileMenu from '../core/mobile-menu'
import MainMenu from '../core/main-menu'


export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth,
			mobileViewSize: 768
		};
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
	}

	updateDimensions(){
		this.setState({
			width: window.innerWidth
		})
	}
	
	render() {
		var mobileMenu = this.state.width <= this.state.mobileViewSize ? 	<MobileMenu/>:'';
		var mainMenu = this.state.width > this.state.mobileViewSize ? 	<MainMenu/>:'';
		return (
			<div>
				{mobileMenu}
				{mainMenu}
			</div>
		);
	}
};
