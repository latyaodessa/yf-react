import {FETCH_POSTS_FULFILLED, FETCH_POSTS_REJECTED} from "../posts-costants"

export default function reducer(state =
																{
																	fetched: false,
																	error: null
																}
	, action) {

	switch (action.type) {
		case FETCH_POSTS_REJECTED: {
			return {...state, fetching: false, error: action.payload}
		}
		case FETCH_POSTS_FULFILLED: {
			return {
				...state,
				fetching: false,
				fetched: true,
				post: action.payload
			}
		}
		default: {
			return {...state}
		}
	}
}
