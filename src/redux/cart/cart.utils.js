export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    if(existingCartItem.quantity === 1){
        // when item quantity is 1, we remove the item form cart
        return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id)
    }

    // when cart item quantity is mayor than 1, then we just substrack 1 to quantity
    return cartItems.map(
        cartItem => 
        cartItem.id === cartItemToRemove.id
        ?{...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )

}