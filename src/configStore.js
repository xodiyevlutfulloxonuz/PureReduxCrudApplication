//Omborxona nastroykasi
import rootReducer from './reducers'

import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'

const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))


export default store 
