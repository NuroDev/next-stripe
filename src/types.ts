import Stripe from "stripe";

export interface ConfirmPaymentIntentOptions {
  id: string;
  body: Partial<Stripe.PaymentIntentConfirmParams>;
}

export interface CreateBillingPortalSessionBody
  extends Partial<Stripe.BillingPortal.SessionCreateParams> {}

export interface CreateCheckoutSessionBody
  extends Partial<Stripe.Checkout.SessionCreateParams> {}

export interface CreatePaymentIntentBody
  extends Partial<Stripe.PaymentIntentCreateParams> {}

export interface UpdatePaymentIntentOptions {
  id: string;
  body: Partial<Stripe.PaymentIntentUpdateParams>;
}
