import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

// const mapStateToProPs = (state) => ({
//     itemCount: selectCartItemsCount(state)  
// })


const mapStateToProPs = createStructuredSelector({
    itemCount: selectCartItemsCount
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () =>  dispatch(toggleCartHidden())
})

export default connect(mapStateToProPs, mapDispatchToProps)(CartIcon);