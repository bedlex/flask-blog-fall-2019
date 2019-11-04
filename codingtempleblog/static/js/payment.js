const stripe = Stripe('pk_test_eX3r0a7vvFodinoX73MqSrDN');


// const stripe = Stripe('pk_test_eX3r0a7vvFodinoX73MqSrDN');
// const elements = stripe.elements();

// var style = {
//     base: {
//       color: '#32325d',
//       fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//       fontSmoothing: 'antialiased',
//       fontSize: '16px',
//       '::placeholder': {
//         color: '#aab7c4'
//       }
//     },
//     invalid: {
//       color: '#fa755a',
//       iconColor: '#fa755a'
//     }
//   };
  
//   // Create an instance of the card Element.
//   var card = elements.create('card', {style: style});
  
//   // Add an instance of the card Element into the `card-element` <div>.
//   card.mount('#card-element');


//   card.addEventListener('change', ({error}) => {
//     const displayError = document.getElementById('card-errors');
//     if (error) {
//       displayError.textContent = error.message;
//     } else {
//       displayError.textContent = '';
//     }
//   });

//   // Create a token or display an error when the form is submitted.
// const form = document.getElementById('payment-form');
// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const {token, error} = await stripe.createToken(card);

//   if (error) {
//     // Inform the customer that there was an error.
//     const errorElement = document.getElementById('card-errors');
//     errorElement.textContent = error.message;
//   } else {
//     // Send the token to your server.
//     stripeTokenHandler(token);
//   }
// });

// const stripeTokenHandler = (token) => {
//     // Insert the token ID into the form so it gets submitted to the server
//     const form = document.getElementById('payment-form');
//     const hiddenInput = document.createElement('input');
//     hiddenInput.setAttribute('type', 'hidden');
//     hiddenInput.setAttribute('name', 'stripeToken');
//     hiddenInput.setAttribute('value', token.id);
//     form.appendChild(hiddenInput);
  
//     // Submit the form
    
//   }