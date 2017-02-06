import React from 'react'
import {connect} from 'react-redux'
import {fetchPostPictures} from "./single-post-actions"

@connect((store) => {
	return {
		singlePost: store.singlePost,
		singlePostFethced: store.singlePost.fetched

	}
})
export default class SinglePost extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchPostPictures(this.props.params.postId));
	}


	render() {
		if (this.props.singlePostFethced === false) {
			return <div></div>;
		}

		return (
			<div>
				{renderLargePics(this.props.singlePost.post.largePics)}
			</div>
		)
	}
}

function renderLargePics(largePics) {
	return largePics.map(pic => <img key={pic} src={pic}/>)
}

