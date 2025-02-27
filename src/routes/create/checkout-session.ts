import Stripe from 'stripe';

import { defaultStripeOptions } from '../../constants';

import type { NextApiRequest, NextApiResponse } from 'next';

import type { BaseRouteOptions } from '../../types';

export async function createCheckoutSession(
	req: NextApiRequest,
	res: NextApiResponse,
	{ options, stripe_key }: BaseRouteOptions,
) {
	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST');
		return res.status(405).end(`Method ${req.method} Not Allowed`);
	}

	try {
		const stripe = new Stripe(stripe_key, options ?? defaultStripeOptions);

		const session = await stripe.checkout.sessions.create(req.body);

		res.status(201).json(session);
	} catch ({ statusCode, raw: { message } }) {
		res.status(statusCode as number).json({
			message,
			status: statusCode,
		});
	}
}
