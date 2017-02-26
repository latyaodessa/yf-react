import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {resizeWindow} from '../../actions/winow-actions'


@connect((store) => {
	return {
		test: store.window
	}
})
export default class Sidebar extends React.Component {

	getUserThumbnail(){
		console.log('AAAA', this.props);
		console.log(localStorage.getItem('user_thumbnail'));
		return localStorage.getItem('user_thumbnail');
	}

	getSideBar() {
		return <div className="sidebar">
			<div className='profile'>
				<div className="sidebar-header">
					<img className='avatar' src={localStorage.getItem('user_thumbnail')}/>
					<div className="sidebar-header-text">
						<h1>Малышка</h1>
						<h1>Малышкина</h1>
					</div>
				</div>
				<div className='info'>
					links and stuff
				</div>
			</div>
		</div>
	}



	render() {
		var sidebar = this.props.width > this.props.mobileViewSize ? this.getSideBar() : '';

		return (
			<div>
				{sidebar}
			</div>
		)
	}
};
