import axios from "axios"

import {GET_SAVED_POSTS_REJECTED, GET_SAVED_POSTS_FULFILLED, SAVE_POST_TO_DASHBOARD_FULFILLED, SAVE_POST_TO_DASHBOARD_REJECTED} from "../../constants/user/user-constants"
import {SAVE_POST_TO_DASHBOARD, GET_SAVED_POSTS} from '../../constants/user-rest-clinet'


export function getSavedPosts(userId, from, to) {
	return function (dispatch) {
		axios.get([GET_SAVED_POSTS,userId,from,to].join("/"))
			.then((res) => {
				dispatch({type: GET_SAVED_POSTS_FULFILLED, payload: res.data});
			})
			.catch((err)=> {
				dispatch({type: GET_SAVED_POSTS_REJECTED, payload: err})
			})
	}
}

export function savePostToDashboard(postId, userId) {
	var req = {
		post_id: postId,
		user_id: userId
	}

	return function (dispatch) {
		axios.post(SAVE_POST_TO_DASHBOARD, req)
			.then((res) => {
				dispatch({type: SAVE_POST_TO_DASHBOARD_FULFILLED, payload: res});
			})
			.catch((err)=> {
				dispatch({type: SAVE_POST_TO_DASHBOARD_REJECTED, payload: err})
			})
	}
}
