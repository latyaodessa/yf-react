import React from 'react'

export default class UserDashboard extends React.Component {
	render() {
		return (
			<div className="dashboard-container">
				<div className="dashboard-header">
					<div>
						<img className="dashboard-img" src={localStorage.getItem('user_thumbnail')}/>
					</div>
				</div>
			</div>
		)
	}
}
