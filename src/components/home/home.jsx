import React from 'react';
import Grid from '../home/components/grid-pictures'

export default class Home extends React.Component {

	constructor(props){
		super(props);
		window.scrollTo(0, 0);
		document.title = "Young Folks - Модели и фотографы со всего мира";
	}

	render() {
		return (
			<div className="child-container">
				<Grid width={this.props.width} mobileViewSize={this.props.mobileViewSize}/>
			</div>
		)
	}
}

