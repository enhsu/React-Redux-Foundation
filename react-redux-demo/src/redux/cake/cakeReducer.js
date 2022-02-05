import { BUY_CAKE } from "./cakeType"

const initialState = {
    num: 10
}
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                num: state.num - action.payload
            }
        default:
            return state
    }
}

export default cakeReducer