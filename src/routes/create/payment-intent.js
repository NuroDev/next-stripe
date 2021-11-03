import Stripe from 'stripe'

export default async function createPaymentIntent(req, res, options) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const stripe = new Stripe(options.stripe_key)

    const paymentIntent = await stripe.paymentIntents.create(req.body)

    res.status(201).json(paymentIntent)
  } catch ({ statusCode, raw: { message } }) {
    res.status(statusCode).json({ message, status: statusCode })
  }
}
