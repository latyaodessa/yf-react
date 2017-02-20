import React from 'react'
import {Link} from 'react-router'


export default class Sidebar extends React.Component {

	getSideBar() {
		return <div className="sidebar">
			<div className='profile'>
				<div className="sidebar-header">
					<img className='avatar' src="https://pp.vk.me/c639331/v639331900/9deb/y4veOFz4V7c.jpg"/>
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
