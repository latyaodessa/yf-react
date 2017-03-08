import React from 'react'
import {Link} from 'react-router'
import Header from '../../components/core/header'
import Footer from '../../components/core/footer'
import Sidebar from '../../components/core/sidebar'

export default class SetsListLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth,
			mobileViewSize: 850,
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
