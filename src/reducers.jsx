import {combineReducers} from "redux"
import native from './reducers/post/native-post-reducer'
import art from './reducers/post/art-post-reducer'
import sets from './reducers/post/sets-post-reducer'
import single from './reducers/post/single-post-reducer'
import topNative from './reducers/post/top-native-reducer'
import topSets from './reducers/post/top-sets-reducer'
import window from './reducers/window-reducer'
import loginLogout from './reducers/core/login-logout-reducer'
import facebook from './reducers/user/facebook-login-reducer'
import user from './reducers/user/user-reducer'
import vk from './reducers/user/vk-reducer'
import savedPosts from './reducers/user/dashboard/saved-posts-reducer'
import savedPhotos from './reducers/user/dashboard/saved-photos-reducer'
import savePost from './reducers/user/dashboard/save-post-to-dashboard-reducer'

export default combineReducers({
	native,
	sets,
	art,
	single,
	topNative,
	topSets,
	window,
	loginLogout,
	user,
	facebook,
	vk,
	savedPosts,
	savedPhotos,
	savePost
})
