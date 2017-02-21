import React from 'react'
import {connect} from 'react-redux'
import {fetchPostPictures} from "../../../actions/post/single-post-actions"

@connect((store) => {
	return {
		singlePost: store.single,
		singlePostFethced: store.single.fetched

	}
})
export default class SinglePost extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchPostPictures(this.props.params.postId));
		window.scrollTo(0, 0);
	}

	render() {
		if (this.props.singlePostFethced === false) {
			return <div></div>;
		}

		let post = this.props.singlePost.post;

		return (
			<div className="single-post-content">
				<div className="top-text">
					{post.md ? <ul className="ph"><li>{post.md}</li></ul> : null}
					{post.ph ? <ul className="md"><li>{post.ph}</li></ul> : null}
					{!post.ph && !post.md ? <ul className="art"><li>Art: {post.text}</li></ul> : null}
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

