// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_KEY);
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';
const SUCCESS_DOMAIN = 'http://localhost:3000/success';
const ERROR_DOMAIN = 'http://localhost:3000/error';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1Lb9G7CJuM28O4MVY4uZ3lYV',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${SUCCESS_DOMAIN}`,
    cancel_url: `${ERROR_DOMAIN}`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));