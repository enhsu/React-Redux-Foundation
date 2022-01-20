import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Number of ice cream - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.iceCream.num
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);