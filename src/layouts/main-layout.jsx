import React from 'react'
import {Link} from 'react-router'
import Header from '../core/header'
import Footer from '../core/footer'
import Sidebar from '../core/sidebar'

export default class MainLayout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="child-container">
					<div className="wrapper">
						<div className="content-wrapper">
							<div className="content">
								{this.props.children}
							</div>
						</div>
						<Sidebar/>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
