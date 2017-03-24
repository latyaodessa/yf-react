import {applyMiddleware, createStore} from 'redux'
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducers from "./reducers";
// DEV
// const middleware = applyMiddleware(promise(), thunk, logger());
// PROD
const middleware = applyMiddleware(promise(), thunk);

export default createStore(reducers, middleware);
