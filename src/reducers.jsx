import {combineReducers} from "redux"
import native from './reducers/post/native-post-reducer'
import sets from './reducers/post/sets-post-reducer'
import single from './reducers/post/single-post-reducer'
import topNative from './reducers/post/top-native-reducer'
import topSets from './reducers/post/top-sets-reducer'
import window from './reducers/window-reducer'

export default combineReducers({
	native,
	sets,
	single,
	topNative,
	topSets,
	window
})
