import Stripe from 'stripe';

export interface ConfirmPaymentIntentOptions {
	/**
	 * ID of the payment intent
	 */
	id: string;
	/**
	 * Stripe payment intent parameters
	 */
	body: Partial<Stripe.PaymentIntentConfirmParams>;
}

export interface CreateBillingPortalSessionBody
	extends Partial<Stripe.BillingPortal.SessionCreateParams> {}

export interface CreateCheckoutSessionBody extends Partial<Stripe.Checkout.SessionCreateParams> {}

export interface CreatePaymentIntentBody extends Partial<Stripe.PaymentIntentCreateParams> {}

export interface UpdatePaymentIntentOptions {
	/**
	 * ID of the payment intent
	 */
	id: string;
	/**
	 * Stripe payment intent parameters
	 */
	body: Partial<Stripe.PaymentIntentUpdateParams>;
}

export interface BaseRouteOptions {
	/**
	 * Stripe publishable key
	 *
	 * @see https://stripe.com/docs/keys
	 */
	stripe_key: string;
	/**
	 *
	 */
	options?: Stripe.StripeConfig;
}
