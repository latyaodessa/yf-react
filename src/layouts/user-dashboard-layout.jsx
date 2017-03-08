import React from 'react'
import {Link} from 'react-router'
import Header from '../components/core/header'
import Footer from '../components/core/footer'

export default class UserDashboardLayoutWithoutSidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth,
			mobileViewSize: 850
		};
		this.updateDimensions = this.updateDimensions.bind(this);

	}
	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
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
				<div className="child-container-dashboard">
								{this.props.children}
							</div>
				<Footer />
			</div>
		)
	}
}
