import Stripe from "stripe";

import { defaultStripeOptions } from "../../constants";

import type { NextApiRequest, NextApiResponse } from "next";

import type { BaseRouteOptions } from "../../types";

export async function createPaymentIntent(
  req: NextApiRequest,
  res: NextApiResponse,
  { options, stripe_key }: BaseRouteOptions
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const stripe = new Stripe(stripe_key, options ?? defaultStripeOptions);

    const paymentIntent = await stripe.paymentIntents.create(req.body);

    res.status(201).json(paymentIntent);
  } catch ({ statusCode, raw: { message } }) {
    res.status(statusCode as number).json({
      message,
      status: statusCode,
    });
  }
}
