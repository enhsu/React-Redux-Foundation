const redux = require('redux')
const combineReducers = redux.combineReducers
const cakeReducer = require('./cake/cakeReducer')
const iceCreamReducer = require('./iceCream/iceCreamReducer')
const userReducer = require('./user/userReducer')

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: userReducer
})

// export default rootReducer
module.exports = rootReducer