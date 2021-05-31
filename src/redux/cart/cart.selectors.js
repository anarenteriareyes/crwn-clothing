import {createSelector} from 'reselect';

// input selector
const selectCart = state => state.cart; //selectCart is the "cart" of redux store

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumaledQuantity, cartItem) => accumaledQuantity + cartItem.quantity ,0)
)