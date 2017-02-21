import React from 'react';
import Grid from '../main/components/grid-pictures'
import Sidebar from '../core/sidebar'
import Slider from '../main/components/slider'

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth,
			mobileViewSize: 850
		};
	}

	componentWillMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="child-container">
				<Slider/>
				<div className="wrapper">
					<div className="content-wrapper">
						<div className="content">
							<Grid/>
						</div>
					</div>
					<Sidebar width={this.state.width} mobileViewSize={this.state.mobileViewSize}/>
				</div>
			</div>
		)
	}
}

