import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory} from 'react-router'
import {AppContainer} from 'react-hot-loader'
import {Provider} from "react-redux"
import store from "./store"
import App from './app.jsx'
import SinglePost from './posts/single-post.jsx'

render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}/>
			<Route path="/post/:postId" component={SinglePost}/>
		</Router>
	</Provider>
), document.getElementById('app'))
