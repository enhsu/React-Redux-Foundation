import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Item { props.itemName } - { props.itemNumber }</h2>
            <button onClick={props.buyItem}>Buy 1 {props.itemName}</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const itemState = state[ownProps.item].num;

    return {
        itemName: ownProps.item,
        itemNumber: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    let dispatchFunction;
    switch (ownProps.item) {
        case 'cake':
            dispatchFunction = () => dispatch(buyCake())
            break;
        case 'iceCream':
            dispatchFunction = () => dispatch(buyIceCream())
            break;
        default:
            dispatchFunction = () => console.error(`ItemContainer - No item name: ${ownProps.item}`)
    }

    return {
        buyItem: dispatchFunction
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);