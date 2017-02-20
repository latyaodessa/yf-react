import axios from "axios"
import {FIND_NATIVE_FROM_TO, FIND_SETS_FROM_TO} from '../posts/post-rest-client'
import {FETCH_NATIVE_POSTS_REJECTED, FETCH_NATIVE_POSTS_FULFILLED, FETCH_SETS_POSTS_FULFILLED, FETCH_SETS_POSTS_REJECTED} from '../posts/posts-constants'

export function fetchNativePosts(from, to) {
	return function (dispatch) {
		axios.get(FIND_NATIVE_FROM_TO + from  + "/" + to)
			.then((res) => {
				dispatch({type: FETCH_NATIVE_POSTS_FULFILLED, payload: res.data})
			})
			.catch((err)=> {
				dispatch({type: FETCH_NATIVE_POSTS_REJECTED, payload: err})
			})
	}
}

export function fetchSetsPosts(from, to) {
	return function (dispatch) {
		axios.get(FIND_SETS_FROM_TO +  from  + "/" + to)
			.then((res) => {
				dispatch({type: FETCH_SETS_POSTS_FULFILLED, payload: res.data})
			})
			.catch((err)=> {
				dispatch({type: FETCH_SETS_POSTS_REJECTED, payload: err})
			})
	}
}
