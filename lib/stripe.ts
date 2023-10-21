import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET!, {
    apiVersion: "2022-11-15",
    typescript: true,
});