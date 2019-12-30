import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_4I9X523NNUZu1ajGz8MNAJfy00mE8JwMSm';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!!');
  };
  
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      toekn={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
