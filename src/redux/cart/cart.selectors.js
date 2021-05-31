import {createSelector} from 'reselect';

// input selector
const selectCart = state => state.cart; //selectCart is the "cart" from redux store

//selectCartItems is the cart.cartItems from redux store
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)


export const selectCartHidden = createSelector([selectCart], cart => cart.hidden)

//selectCartItemsCount gets the total quantity of items of cartItems
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumaledQuantity, cartItem) => accumaledQuantity + cartItem.quantity ,0)
)

export const selectCartTotal  = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumaledQuantity, cartItem) => accumaledQuantity + cartItem.quantity * cartItem.price ,0)
)