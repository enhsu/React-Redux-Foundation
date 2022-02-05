// create store
const redux = require('redux')
const createStore = redux.createStore

// for middleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware
const thunk = require('redux-thunk').default

const rootReducer = require('./rootReducer')

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

module.exports = store