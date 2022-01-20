const { BUY_ICECREAM } = require('./iceCreamType')

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}

module.exports = {
    buyIceCream
}