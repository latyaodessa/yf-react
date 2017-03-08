import React from 'react';
import {connect} from 'react-redux';
import {savePostToDashboard} from "../../../../actions/user/dashboard-actions";
import SavePostIcon from "../../../../res/img/64/save_post.png";
import PostSavedIcon from "../../../../res/img/64/post_saved.png";

@connect((store) => {
	return {
		savedPost: store.savePost
	}
})
export default class SavePostButton extends React.Component {

	render() {
		return (
			<div className="icon">
				<img src={SavePostIcon} onClick={this.savePost.bind(this)}/>
			</div>
		)
	}

	savePost() {
		this.props.dispatch(savePostToDashboard(this.props.post.id, localStorage.getItem("user_id")));
	}
}
