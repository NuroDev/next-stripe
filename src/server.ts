import {
  confirmPaymentIntent,
  createBillingPortalSession,
  createCheckoutSession,
  createPaymentIntent,
  retrievePaymentIntent,
  updatePaymentIntent,
} from "./routes";

import type { NextApiRequest, NextApiResponse } from "next";

import type { BaseRouteOptions } from "./types";

async function NextStripeHandler(
  req: NextApiRequest,
  res: NextApiResponse,
  options: BaseRouteOptions
) {
  if (!req.query.nextstripe)
    return res
      .status(500)
      .end(`Error: Cannot find [...nextstripe].js in pages/api/stripe`);

  const [method, type] = req.query.nextstripe;

  switch (method) {
    case "confirm":
      switch (type) {
        case "payment-intent":
          return confirmPaymentIntent(req, res, options);
      }
    case "create":
      switch (type) {
        case "billing-portal-session":
          return createBillingPortalSession(req, res, options);
        case "checkout-session":
          return createCheckoutSession(req, res, options);
        case "payment-intent":
          return createPaymentIntent(req, res, options);
      }
    case "retrieve":
      switch (type) {
        case "payment-intent":
          return retrievePaymentIntent(req, res, options);
      }
    case "update":
      switch (type) {
        case "payment-intent":
          return updatePaymentIntent(req, res, options);
      }
    default:
      throw new Error(
        `Unknown method (${method}) provided. PLease validate your request method`
      );
  }
}

export default function NextStripe(...args: any) {
  if (args.length === 1)
    return (req: NextApiRequest, res: NextApiResponse) =>
      NextStripeHandler(req, res, args[0]);

  // TODO: Fix types
  // @ts-ignore
  return NextStripeHandler(...args);
}
