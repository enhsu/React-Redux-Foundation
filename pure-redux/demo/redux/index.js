// export all action creaters
// export { buyCake } from './cake/cakeAction'
const { buyCake } = require('./cake/cakeAction')
const { buyIceCream } = require('./iceCream/iceCreamAction')
const { fetchUsers } = require('./user/userAction')

module.exports = {
    buyCake,
    buyIceCream,
    fetchUsers
}