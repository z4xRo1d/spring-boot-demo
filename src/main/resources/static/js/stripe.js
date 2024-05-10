  const stripe = Stripe('pk_test_51OtRsmBxrTvoWRG8sa2KLb1OnCaXDN8rgrftXCLB3LDJebnDgaUkqvsRMrFkz5J9t8yqTxxlkIqfxbFBmXXwcDqv0007y3c6LD');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });