import axios from "axios"

import {CREATE_FACEBOOK_USER_FULFILLED, CREATE_FACEBOOK_USER_REJECTED, GET_USER_REJECTED, GET_USER_FULFILLED} from "../../constants/user/user-constants"
import {CREATE_FB_USER, GET_USER_BY_ID} from '../../constants/user-rest-clinet'


export function getUserByID(userId) {
	return function (dispatch) {
		axios.get(GET_USER_BY_ID + userId)
			.then((res) => {
				dispatch({type: GET_USER_FULFILLED, payload: res.data})
			})
			.catch((err)=> {
				dispatch({type: GET_USER_REJECTED, payload: err})
			})
	}
}

export function createFBUser(fbUser) {
	return function (dispatch) {
		axios.post(CREATE_FB_USER, fbUser)
			.then((res) => {
				dispatch({type: CREATE_FACEBOOK_USER_FULFILLED, payload: res.data})
			})
			.catch((err)=> {
				dispatch({type: CREATE_FACEBOOK_USER_REJECTED, payload: err})
			})
	}
}
