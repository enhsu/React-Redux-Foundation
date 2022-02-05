import { BUY_ICECREAM } from "./iceCreamType"

const initialState = {
    num: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                num: state.num - 1
            }
        default:
            return state
    }
}

export default reducer