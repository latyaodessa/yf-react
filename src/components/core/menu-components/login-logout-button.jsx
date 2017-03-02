import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router'
import {browserHistory} from 'react-router';
import {logout} from '../../../actions/core/login-logout-actions';

@connect((store) => {
	return {
		loginLogout: store.loginLogout
	}
})
export default class LoginLogoutButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isUserLoggedIn: localStorage.getItem('user_id') ? true : false,
			showDropDownMenu: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.loginLogout.executed) {
			this.state = {
				isUserLoggedIn: nextProps.loginLogout.isLogin ? true : false
			};
		}
	}

	logOut() {
		localStorage.clear();
		this.props.dispatch(logout());
		browserHistory.push('/')
	}

	render() {
		if (!this.state.isUserLoggedIn) {
			return (
				<li>{this.getLoginButton()}</li>
			)
		} else {
			return (
				<li>{this.getLogoutButton()}</li>
			)
		}
	}

	getLoginButton() {
		return <Link to="/login">Login</Link>;
	}

	getLogoutButton() {
		return <div onMouseOver={this.showDropDownMenu.bind(this)} onMouseLeave={this.hideDropDownMenu.bind(this)}
								className="login-menu-container">
			<Link to="/dashboard">
				<img src={localStorage.getItem('user_thumbnail')}/>
			</Link>
			{ this.state.showDropDownMenu ?
				<div id="menu">
					<ul>
						<li><Link to="/dashboard">Профайл</Link></li>
						<li><a onClick={this.logOut.bind(this)}>Выйти</a></li>
					</ul>
				</div>
				: null}
		</div>
	}

	showDropDownMenu() {
		this.setState({
			showDropDownMenu: true
		})
	}

	hideDropDownMenu() {
		this.setState({
			showDropDownMenu: false
		})
	}


}


