import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J08VjHdJnOsRRO5E5i5uRwjZFe7o2gKSfMMqq19d850dMKz7mlpNmNnruQjFFJI0GNg7IR4TWO9whzgdujuLKc1004CF5sZlq';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
            label = 'Pay Now'
            name  = 'CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/en/f3eb2117da'
            description = {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
    
}

export default StripeCheckoutButton;