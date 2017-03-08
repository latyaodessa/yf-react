import React from 'react'
import {connect} from 'react-redux'
import {fetchPostPictures} from "../../../actions/post/single-post-actions"
import PicsRenderer from "./components/pics-renderer-component"
import Header from "./components/header-component"

@connect((store) => {
	return {
		post: store.single.post,
		singlePostFethced: store.single.fetched
	}
})
export default class SinglePost extends React.Component {

	constructor(props) {
		super(props);
		this.props.dispatch(fetchPostPictures(this.props.params.postId));
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div>
				{this.props.singlePostFethced ?
					<div className="single-post-content">
						<Header post={this.props.post}/>
						<PicsRenderer largePics={this.props.post.largePics}/>
					</div>
					: null}
			</div>
		)
	}
}



