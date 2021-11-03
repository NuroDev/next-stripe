import { fetcher } from './fetcher';

import type {
	ConfirmPaymentIntentOptions,
	CreateBillingPortalSessionBody,
	CreateCheckoutSessionBody,
	CreatePaymentIntentBody,
	UpdatePaymentIntentOptions,
} from './types';

/**
 * Confirm a payment intent
 *
 * @see https://stripe.com/docs/api/payment_intents/confirm
 *
 * @param {string} id - ID of the payment
 * @param {object} body - Stripe payment intent parameters
 */
export async function confirmPaymentIntent(body: ConfirmPaymentIntentOptions) {
	return await fetcher({
		body,
		method: 'POST',
		url: `/api/stripe/confirm/payment-intent`,
	});
}

/**
 * Create a new billing portal session
 *
 * @see https://stripe.com/docs/api/customer_portal/sessions/create
 *
 * @param {object} body - Stripe billing portal parameters
 */
export async function createBillingPortalSession(body: CreateBillingPortalSessionBody) {
	return await fetcher({
		body,
		method: 'POST',
		url: `/api/stripe/create/billing-portal-session`,
	});
}

/**
 * Create a new checkout session instance
 *
 * @see https://stripe.com/docs/api/checkout/sessions/create
 *
 * @param {object} body - Stripe checkout session parameters
 */
export async function createCheckoutSession(body: CreateCheckoutSessionBody) {
	return await fetcher({
		body,
		method: 'POST',
		url: `/api/stripe/create/checkout-session`,
	});
}

/**
 * Create a new payment intent
 *
 * @see https://stripe.com/docs/api/payment_intents/create
 *
 * @param {object} body - Stripe payment intent parameters
 */
export async function createPaymentIntent(body: CreatePaymentIntentBody) {
	return await fetcher({
		body,
		method: 'POST',
		url: `/api/stripe/create/payment-intent`,
	});
}

/**
 * Retreive a payment intent
 *
 * @see https://stripe.com/docs/api/payment_intents/retrieve
 *
 * @param {string} id - ID of the payment intent
 */
export async function retrievePaymentIntent(id: string) {
	return await fetcher({
		body: {
			id,
		},
		method: 'GET',
		url: `/api/stripe/retrieve/payment-intent`,
	});
}

/**
 * Update a provided payment intent
 *
 * @see https://stripe.com/docs/api/payment_intents/update
 *
 * @param {string} id - ID of the payment intent
 * @param {object} body - Stripe payment intent parameters
 */
export async function updatePaymentIntent(body: UpdatePaymentIntentOptions) {
	return await fetcher({
		body,
		method: 'POST',
		url: `/api/stripe/update/payment-intent`,
	});
}
