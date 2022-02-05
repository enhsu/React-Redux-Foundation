import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const HookCakeContainer = () => {
    const [buyNumber, setBuyNumber] = useState(1)
    const numOfCakes = useSelector(state => state.cake.num)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes with hook - {numOfCakes}</h2>
            <input type="number" value={buyNumber} onChange={e => setBuyNumber(e.target.value)} />
            <button onClick={() => dispatch(buyCake(buyNumber))}>Buy { buyNumber } Cake</button>
        </div>
    );
}
 
export default HookCakeContainer;