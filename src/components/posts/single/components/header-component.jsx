import SavePostButton from '../components/save-post-button';
import HeaderText from '../components/header-text-component';

import React from 'react'

export default class Header extends React.Component {
	render() {
		return (
			<div className="single-post-header">
				<HeaderText post={this.props.post}/>
				<SavePostButton post={this.props.post}/>
			</div>
		)
	}
}
