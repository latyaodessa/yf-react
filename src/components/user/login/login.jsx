import React from 'react';
import YFBrand from '../../../res/img/brand/youngfolks-logo.jpg';
import VKWhite from '../../../res/img/social/white/vk.png';
import FaceBookLoginButton from '../login/facebook-login';

export default class LoginView extends React.Component {
	onFacebookResponse(data, user_data) {
		console.log(data);
		console.log(user_data);
	}

	render() {
		return (
			<div className="login-form">
				<img src={YFBrand} className="login-profile-img"/>
				<div className="profile-container">
					<a className="button vk" href="#" role="button">
						<span>Войти через VK</span>
						<div className="icon">
							<img src={VKWhite}/>
						</div>
					</a>
					<FaceBookLoginButton/>
				</div>
			</div>
		)
	}
}
