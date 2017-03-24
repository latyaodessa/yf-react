import axios from "axios"
import {
	FIND_NATIVE_FROM_TO,
	FIND_SETS_FROM_TO,
	FIND_TOP_NATIVE_FROM_TO,
	FIND_TOP_SETS_FROM_TO,
	FIND_ART_FROM_TO,
	SEARCH_POSTS
} from '../../constants/post-rest-client'
import {
	FETCH_NATIVE_POSTS_REJECTED, FETCH_NATIVE_POSTS_FULFILLED, FETCH_SETS_POSTS_FULFILLED, FETCH_SETS_POSTS_REJECTED,
	FETCH_TOP_SETS_FULFILLED, FETCH_TOP_SETS_REJECTED, FETCH_TOP_NATIVE_FULFILLED, FETCH_TOP_NATIVE_REJECTED,
	FETCH_ART_POSTS_FULFILLED, FETCH_ART_POSTS_REJECTED,
	SEARCH_POST_FULFILLED, SEARCH_POST_REJECTED
} from '../../constants/post/posts-constants'

export function fetchNativePosts(from, to) {
	return function (dispatch) {
		axios.get([FIND_NATIVE_FROM_TO, from, to].join("/"))
			.then((res) => {
				dispatch({type: FETCH_NATIVE_POSTS_FULFILLED, payload: res.data})
			})
			.catch((err)=> {
				dispatch({type: FETCH_NATIVE_POSTS_REJECTED, payload: err})
			})
	}
}

export function fetchArtPosts(from, to) {
	return function (dispatch) {
		axios.get([FIND_ART_FROM_TO, from, to].join("/"))
			.then((res) => {
				dispatch({type: FETCH_ART_POSTS_FULFILLED, payload: res.data})
			})
			.catch((err)=> {
				dispatch({type: FETCH_ART_POSTS_REJECTED, payload: err})
			})
	}
}

export function fetchSetsPosts(from, to) {
	return function (dispatch) {
		axios.get([FIND_SETS_FROM_TO, from, to].join("/"))
			.then((res) => {
				dispatch({type: FETCH_SETS_POSTS_FULFILLED, payload: res.data})
			})
			.catch((err)=> {
				dispatch({type: FETCH_SETS_POSTS_REJECTED, payload: err})
			})
	}
}

export function fetchTopSets(from, to) {
	return function (dispatch) {
		axios.get([FIND_TOP_SETS_FROM_TO, from, to].join("/"))
			.then((res) => {
				dispatch({type: FETCH_TOP_SETS_FULFILLED, payload: res.data})
			})
			.catch((err)=> {
				dispatch({type: FETCH_TOP_SETS_REJECTED, payload: err})
			})
	}
}

export function fetchTopNative(from, to) {
	return function (dispatch) {
		axios.get([FIND_TOP_NATIVE_FROM_TO, from, to].join("/"))
			.then((res) => {
				dispatch({type: FETCH_TOP_NATIVE_FULFILLED, payload: res.data})
			})
			.catch((err)=> {
				dispatch({type: FETCH_TOP_NATIVE_REJECTED, payload: err})
			})
	}
}

export function searchPosts(query) {
	return function (dispatch) {
		axios.get(SEARCH_POSTS + "?query=" + query)
			.then((res) => {
				dispatch({type: SEARCH_POST_FULFILLED, payload: res.data});
			})
			.catch((err)=> {
				dispatch({type: SEARCH_POST_REJECTED, payload: err})
			})
	}
}
