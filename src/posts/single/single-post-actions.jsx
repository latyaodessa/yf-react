import axios from "axios"

export function fetchPostPictures(postId) {
	return function (dispatch) {
		axios.get("http://194.1.239.223:8080/yf-services/rest/post/yf-photo-sets/photo/" + postId)
			.then((res) => {
				dispatch({type: "FETCH_POSTS_FULFILLED", payload: res.data})
			})
			.catch((err)=> {
				dispatch({type: "FETCH_POSTS_REJECTED", payload: err})
			})
	}
}
