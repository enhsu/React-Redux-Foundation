import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = (props) => {
    const [buyNumber, setBuyNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type="number" value={buyNumber} onChange={(e) => setBuyNumber(e.target.value)} />
            <button onClick={() => props.buyCake(buyNumber)}>Buy { buyNumber} Cake</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.num
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (num) => dispatch(buyCake(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);