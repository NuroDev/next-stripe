import Stripe from 'stripe';

import { defaultStripeOptions } from '../../constants';

import type { NextApiRequest, NextApiResponse } from 'next';

import type { BaseRouteOptions } from '../../types';

export async function retrievePaymentIntent(
	req: NextApiRequest,
	res: NextApiResponse,
	{ options, stripe_key }: BaseRouteOptions,
) {
	if (req.method !== 'GET') {
		res.setHeader('Allow', 'GET');
		return res.status(405).end(`Method ${req.method} Not Allowed`);
	}

	try {
		const stripe = new Stripe(stripe_key, options ?? defaultStripeOptions);

		const paymentIntent = await stripe.paymentIntents.retrieve(req.body.id);

		res.status(200).json(paymentIntent);
	} catch ({ statusCode, raw: { message } }) {
		res.status(statusCode as number).json({
			message,
			status: statusCode,
		});
	}
}
