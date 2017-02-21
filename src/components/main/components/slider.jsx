import React from 'react'
import {connect} from 'react-redux'
import Swiper from 'react-id-swiper'
import {fetchTopSets, fetchTopNative} from '../../../actions/post/post-actions'

@connect((store) => {
	return {
		topNative: store.topNative.post,
		topNativePostFetched: store.topNative.fetched,
		topSets: store.topSets.post,
		topSetsPostFetched: store.topSets.fetched
	}
})
export default class Slider extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchTopSets(0, 5));
		this.props.dispatch(fetchTopNative(0, 5));
	}


	render() {

		if (this.props.topNativePostFetched === false || this.props.topSetsPostFetched === false) {
			return <div></div>;
		}

		console.log(this.props.topSets.post);

		const params = {
			pagination: '.swiper-pagination',
			slidesPerView: 4,
			centeredSlides: true,
			paginationClickable: true,
			spaceBetween: 30,
			grabCursor: true,
			mousewheelControl: true
		};

		return (<Swiper {...params}>
			{this.getTopSetsSlides(this.props.topSets)}
		</Swiper>
		);
	}

	getTopSetsSlides(posts){
		return posts.map(post => <div className="grig-img-container" key={post.id}><img className="grig-img" src={post.thumbnail}/></div>)
	}

}
