const { BUY_CAKE } = require('./cakeType')

const initialState = {
    itemNumber: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                itemNumber: state.itemNumber - 1
            }
        default:
            return state
    }
}

// export default cakeReducer
module.exports = cakeReducer