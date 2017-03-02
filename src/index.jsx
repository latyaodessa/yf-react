import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory} from 'react-router'
import {AppContainer} from 'react-hot-loader'
import {Provider} from "react-redux"
import store from "./store"
import MainLayout from "./layouts/main-layout"
import MainLayoutWithoutSidebar from './layouts/main-layout-without-sidebar'
import UserDashboardLayoutWithoutSidebar from './layouts/user-dashboard-layout'
import Home from './components/main/home.jsx'
import SinglePost from './components/posts/single/single-post.jsx'
import Login from './components/user/login/login'
import UserDashboard from './components/user/dashboard/user-dashboard'

render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route component={MainLayoutWithoutSidebar}>
				<Route path="/login" component={Login}/>
			</Route>
			<Route component={UserDashboardLayoutWithoutSidebar}>
				<Route path="/dashboard" component={UserDashboard}/>
			</Route>
			<Route component={MainLayout}>
				<Route path="/" component={Home}/>
				<Route path="/post/:postId" component={SinglePost}/>
			</Route>
		</Router>
	</Provider>
), document.getElementById('app'))
