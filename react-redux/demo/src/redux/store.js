import { createStore, applyMiddleware } from 'redux'
// reducer
import rootReducer from './rootReducer'
// middleware
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store