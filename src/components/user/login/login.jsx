import React from 'react';
import YFBrand from '../../../res/img/brand/youngfolks-logo.jpg';
import FaceBookLoginButton from '../login/facebook-login';
import VKLoginButton from '../login/vk-login';
import Redirector from '../login/redirector';

export default class LoginView extends React.Component {
	render() {
		return (
			<div className="login-form">
				<img src={YFBrand} className="login-profile-img"/>
				<div className="profile-container">
					<Redirector />
					<VKLoginButton/>
					<FaceBookLoginButton/>
				</div>
			</div>
		)
	}
}
