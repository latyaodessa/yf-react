import React from 'react'
import {Link} from 'react-router'
import SidebarHeader from './components/sidebarheader'

export default class Sidebar extends React.Component {


	getSideBar() {
		return <div className="sidebar">
			<div className='profile'>
				<SidebarHeader/>
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
