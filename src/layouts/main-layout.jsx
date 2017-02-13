import React from 'react'
import {Link} from 'react-router'
import Header from "../core/header"
import Footer from "../core/footer"

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
						<div className="sidebar">
							<h2>Page sidebar</h2>
							<p>&larr; Fixed Width &rarr;</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
