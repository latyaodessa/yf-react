import axios from "axios"
import {FIND_POST_BY_ID} from '../../posts/post-rest-client'
import {FETCH_SINGLE_POST_FULFILLED,FETCH_SINGLE_POST_REJECTED} from '../posts-constants';

export function fetchPostPictures(postId) {
	return function (dispatch) {
		axios.get(FIND_POST_BY_ID + postId)
			.then((res) => {
				dispatch({type: FETCH_SINGLE_POST_FULFILLED, payload: res.data})
			})
			.catch((err)=> {
				dispatch({type: FETCH_SINGLE_POST_REJECTED, payload: err})
			})
	}
}
