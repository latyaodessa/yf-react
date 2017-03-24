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
export default class MobileLoginLogoutButton extends React.Component {
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
		browserHistory.push('/login');
	}

	render() {
		if (!this.state.isUserLoggedIn) {
			return (
				<li>{this.getLoginButton()}</li>
			)
		} else {
			return (
				<ul>{this.getLogoutButtonMobile()}</ul>
			)
		}
	}

	getLoginButton() {
		return <Link to="/login">
			Войти
		</Link>;
	}

	getLogoutButtonMobile() {
		return <div className="login-menu-container">
			<Link to="/dashboard">
			<li>Профайл</li>
			</Link>
			<li><a onClick={this.logOut.bind(this)}>Выйти</a></li>

		</div>
	}



}


