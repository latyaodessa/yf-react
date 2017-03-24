import React from 'react';
import NativeGrid from './native-grid-component'
import SetsGrid from './sets-grid-component'
import TopNativeSlider from '../../../components/posts/lists/top-native-slider'
import TopSetsSlider from '../../../components/posts/lists/top-sets-slider'


export default class Grid extends React.Component {

	render() {
		return (
			<div>
				{/*<TopNativeSlider/>*/}
				<NativeGrid width={this.props.width} mobileViewSize={this.props.mobileViewSize}/>
				{/*<TopSetsSlider/>*/}
				<SetsGrid width={this.props.width} mobileViewSize={this.props.mobileViewSize}/>
			</div>
		)
	}
}
