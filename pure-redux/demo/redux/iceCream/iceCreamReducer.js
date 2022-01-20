const { BUY_ICECREAM } = require("./iceCreamType")

const initialState = {
    itemNumber: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                itemNumber: state.itemNumber - 1
            }
        default:
            return state
    }
}

module.exports = reducer