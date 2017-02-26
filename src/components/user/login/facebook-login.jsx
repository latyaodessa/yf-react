import React from 'react';
import {connect} from 'react-redux';
import {getUserByID, createFBUser} from '../../../actions/user/user-actions';
import FBWhite from '../../../res/img/social/white/fb.png';


@connect((store) => {
	return {
		user: store.user,
		fb_user: store.facebook.fb_user
	}
})
export default class FaceBookLoginButton extends React.Component {

	constructor(props) {
		super(props);
		this.me = this.me.bind(this);
		this.login = this.login.bind(this);
		this.state = {user_auth: ""};
	}
	componentDidMount() {
		window.fbAsyncInit = function() {
			FB.init({
				appId      : '195832684171840',
				cookie     : true,
				xfbml      : true,
				version    : 'v2.8'
			});
			FB.AppEvents.logPageView();
		};

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}
	componentWillReceiveProps(nextProps) {
		if(!nextProps.user.user && nextProps.user.fetched && !nextProps.fb_user){
			  this.props.dispatch(createFBUser(this.state.user_auth));
		}

		this.redirectUser(nextProps);


	}

	redirectUser(nextProps){
		console.log(nextProps);
		if(nextProps.user.user && nextProps.user.fetched){
			console.log('redirect current',nextProps);
		}
		if(nextProps.fb_user && nextProps.fb_user.fetched){
			console.log("redirect new user");
		}
	}
	me(){
		let FB_REQUESTED_FIELDS = ['id','first_name','last_name','gender','birthday',
			'email','hometown','languages','locale','location',
			'website','picture.height(200).width(200)'];

		FB.api('/me?fields=' + FB_REQUESTED_FIELDS.join(','), function(res) {
			this.setState({user_auth : res});
			this.handleLocalStorage(res);
			this.getUserById(res.id);
		}.bind(this));
	}
	login(){
		FB.login(function(response) {
			this.me();
		}.bind(this));
	}
	getUserById(userId){
		this.props.dispatch(getUserByID(userId));
	}
	handleLocalStorage(res){
		localStorage.clear();
		localStorage.setItem('user_id', res.id);
		localStorage.setItem('user_type',"fb");
		localStorage.setItem('user_first_name', res.first_name);
		localStorage.setItem('user_last_name', res.last_name);
		localStorage.setItem('user_thumbnail', res.picture.data.url);
	}
	render() {
		return (
			<div>
				<a className="button fb" onClick={this.login} role="button">
						<span>Войти через FB</span>
						<div className="icon">
							<img src={FBWhite}/>
						</div>
					</a>
				</div>
		)
	}
}
