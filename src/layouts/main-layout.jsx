import React from 'react'
import {Link} from 'react-router'
import Header from '../core/header'
import Footer from '../core/footer'
import Sidebar from '../core/sidebar'

export default class MainLayout extends React.Component {
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
				<div className="child-container">
					<div className="wrapper">
						<div className="content-wrapper">
							<div className="content">
								{this.props.children}
							</div>
						</div>
						<Sidebar width={this.state.width} mobileViewSize={this.state.mobileViewSize}/>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
