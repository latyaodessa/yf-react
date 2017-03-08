import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
import {getSavedPosts} from '../../../actions/user/dashboard-actions';
import LoadMoreImg from '../../../res/img/64/load-more.png';

@connect((store) => {
	return {
		savedPosts: store.savedPosts.savedPosts,
		savedPostsFetched: store.savedPosts.fetched}
})
export default class UserDashboard extends React.Component {

	state = {
		incrementSize: 12,
		initSizePhoto: 0,
		currentPhotosLoaded:12,
		userId: localStorage.getItem("user_id"),
		visibleHeight: document.documentElement.clientHeight,
		pageHeight: document.documentElement.scrollHeight,
		currentScroll: document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
	};

	constructor(props) {
		super(props);
		this.props.dispatch(getSavedPosts(this.state.userId, this.state.initSizePhoto, this.state.incrementSize));
		this.updateScroll = this.updateScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener("scroll", this.updateScroll);
	}
	componentWillUnmount(){
		window.removeEventListener("scroll", this.updateScroll);
	}

	updateScroll() {
		this.setState({
			visibleHeight: document.documentElement.clientHeight,
			pageHeight: document.documentElement.scrollHeight,
			currentScroll: document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
		})
		if(this.isLoadMore()){
			this.fetchMorePhotos();
		}
	}

	fetchMorePhotos() {
		let currentPhotoSize = this.state.currentPhotosLoaded+=this.state.incrementSize;
		this.setState({
			currentPhotosLoaded: currentPhotoSize
		})
		this.props.dispatch(getSavedPosts(this.state.userId, this.state.initSizePhoto, currentPhotoSize));
	}

	isLoadMore(){
		if(this.state.currentScroll>= this.state.pageHeight - this.state.visibleHeight){
			return true;
		}
	}
	renderPics(posts) {
		return posts.map(post => <div key={post.id}
																	className="pure-u-1-2 pure-u-sm-1-2 pure-u-md-1-3 grig-img-container hovereffect">
			<img className="grig-img" src={post.thumbnail}/>
			<Link to={ 'post/' + post.post_id }>
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

	render() {
		return (
			<div className="dashboard-container">
				<div className="dashboard-header">
					<div className="pure-g">
						<div className="pure-u-1 pure-u-md-1-2">
							<div className="inner-container">
								<img src={localStorage.getItem('user_thumbnail')}/>
							</div>
						</div>
						<div className="pure-u-1 pure-u-md-1-2">
							<div className="inner-container">
								bbb
							</div>
						</div>
					</div>
				</div>
				{this.props.savedPostsFetched ? <div className="pure-g">{this.renderPics(this.props.savedPosts)}</div> : null}

				{this.isLoadMore.bind(this)}

				<div className="under-button">
					<a onClick={this.fetchMorePhotos.bind(this)}> <img src={LoadMoreImg}/></a>
				</div>

			</div>
		)
	}
}
