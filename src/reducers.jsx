import {combineReducers} from "redux"
import native from './posts/native-post-reducer'
import sets from './posts/sets-post-reducer'
import single from './posts/single/single-post-reducer'

export default combineReducers({
	native,
	sets,
	single
})
