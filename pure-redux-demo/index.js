// main file for executing
const { buyCake, buyIceCream, fetchUsers } = require('./redux')
const store = require('./redux/store')

const main = () => {
    const unsubscribe = store.subscribe(() => console.log('Update state'))
    console.log('initial state: ', store.getState())
    store.dispatch(buyCake())
    store.dispatch(buyIceCream())
    unsubscribe()
    console.log('Unsubscribe...')
    store.dispatch(fetchUsers())
}

main()