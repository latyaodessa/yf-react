import React  from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';


@connect((store) => {
	return {
		registered_user: store.user,
		vk_user: store.vk,
		fb_user: store.facebook
	}
})
export default class Redirector extends React.Component {

	isRegisteredUser(nextProps) {
		return nextProps.registered_user.user && nextProps.registered_user.fetched;
	}

	isVkUserCreated(nextProps) {
		return nextProps.vk_user.user && nextProps.vk_user.fetched;
	}

	isFbUserCreated(nextProps) {
		return nextProps.fb_user.user && nextProps.fb_user.fetched;
	}

	componentDidMount() {
		if(localStorage.getItem('user_id')){
			browserHistory.push('/dashboard')
		}
	}
	componentWillReceiveProps(nextProps) {

		if (this.isRegisteredUser(nextProps) || this.isVkUserCreated(nextProps) || this.isFbUserCreated(nextProps)) {
			browserHistory.push('/dashboard')
		}
	}

	render() {
		return null;
	}
}
