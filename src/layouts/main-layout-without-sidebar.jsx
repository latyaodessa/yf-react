import React from 'react'
import {Link} from 'react-router'
import Header from '../components/core/header'
import Footer from '../components/core/footer'
import Sidebar from '../components/core/sidebar'

export default class MainLayoutWithoutSidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth,
			mobileViewSize: 850
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
		return (
			<div>
				<Header width={this.state.width} mobileViewSize={this.state.mobileViewSize}/>
						{this.props.children}
				<Footer />
			</div>
		)
	}
}
