const { BUY_CAKE } = require("./cakeType")

const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

module.exports = {
    buyCake
}