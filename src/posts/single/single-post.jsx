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

		let post = this.props.singlePost.post;

		return (
			<div className="single-post-content">
				<div className="top-text">
					{post.md ? <div><h1>Md: {post.md}</h1></div> : null}
					{post.ph ? <div><h1>Ph: {post.ph}</h1></div> : null}
					{!post.ph && !post.md ? <div><h1>Art: {post.text}</h1></div> : null}
				</div>
				<div className="pics-content">
					{renderLargePics(post.largePics)}
				</div>
			</div>

		)
	}
}

function renderLargePics(largePics) {
	return largePics.map(pic => <div key={pic} className="img-container"><img className="single-img"  src={pic}/></div>)
}

