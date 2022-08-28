// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_KEY);
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';
const LOCAL_DOMAIN = 'http://localhost:3000/success';

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
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect('http://localhost:3000/success');
});

app.listen(4242, () => console.log('Running on port 4242'));