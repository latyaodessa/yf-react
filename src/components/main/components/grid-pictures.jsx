import React from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {fetchNativePosts, fetchSetsPosts} from '../../../actions/post/post-actions'
import LoadMoreImg from '../../../res/img/64/load-more.png'


@connect((store) => {
	return {
		native: store.native,
		nativePostFetched: store.native.fetched,
		sets: store.sets,
		setsPostFetched: store.sets.fetched

	}
})
export default class Grid extends React.Component {

	INCREMENT_SIZE = 6;
	INIT_SIZE = 0;
	NATIVE_TAG = 'native';
	SETS_TAG = 'sets';

	from_native = this.INIT_SIZE;
	to_native = this.INCREMENT_SIZE;
	from_sets = this.INIT_SIZE;
	to_sets = this.INCREMENT_SIZE;

	componentWillMount() {
		this.props.dispatch(fetchNativePosts(this.from_native, this.to_native));
		this.props.dispatch(fetchSetsPosts(this.from_sets, this.to_sets));
		window.scrollTo(0, 0);
	}

	 renderPics(posts) {
		 return posts.map(post => <div key={post.id}
																	 className="pure-u-1-2 pure-u-sm-1-2 pure-u-md-1-3 grig-img-container hovereffect">
			 <img className="grig-img" src={post.thumbnail}/>
			 <Link to={ '/post/' + post.id }>
				 <div className="overlay">
					 <div className="ul-main-list">
						 {post.md ? <ul className="md-white">
							 <li>{post.md}</li>
						 </ul> : null}
						 {post.ph ? <ul className="ph-white">
							 <li>{post.ph}</li>
						 </ul> : null}
					 </div>
				 </div>
			 </Link>
		 </div>)
	 }

	fetchMorePosts(type) {
		if (type == this.NATIVE_TAG) {
			this.to_native += this.INCREMENT_SIZE;
			this.props.dispatch(fetchNativePosts(this.INIT_SIZE, this.to_native));
		}
		if (type == this.SETS_TAG) {
			this.to_sets += this.INCREMENT_SIZE;
			this.props.dispatch(fetchSetsPosts(this.INIT_SIZE, this.to_sets));
		}
	}


	render() {

		if (this.props.nativePostFetched === false || this.props.setsPostFetched === false) {
			return <div></div>;
		}

		let nativePosts = this.props.native.post;
		let setsPosts = this.props.sets.post;

		return (


			<div>
				<div className="page-title"><h1>Наши</h1></div>
				<div className="pure-g">
					{this.renderPics(nativePosts)}
				</div>
				<div className="under-button">
					<a onClick={() => this.fetchMorePosts(this.NATIVE_TAG)}> <img src={LoadMoreImg}/></a>
				</div>

				<div className="page-title"><h1>Зарубежные</h1></div>
				<div className="pure-g">
					{this.renderPics(setsPosts)}
				</div>
				<div className="under-button">
					<a onClick={() => this.fetchMorePosts(this.SETS_TAG)}> <img src={LoadMoreImg}/></a>
				</div>
			</div>
		)
	}
}
