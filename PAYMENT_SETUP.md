# Payment Integration Setup Guide

This guide will help you set up both Polar (traditional payments + Apple Pay) and NOWPayments (crypto) for The Skool Launchpad.

## Overview

The landing page now includes two payment options:
1. **Pay with Card / Apple Pay** - Powered by Polar
2. **Pay with Crypto** - Powered by NOWPayments

## Step 1: Set Up Polar (Traditional Payments)

### Create Polar Account
1. Go to https://polar.sh
2. Sign up using GitHub, Google, or email
3. Create an organization (e.g., "Studio Drewskii")

### Create Product
1. Navigate to Dashboard → Products
2. Click "Create Product"
3. Fill in details:
   - **Name**: The Skool Launchpad
   - **Description**: Done-for-you Skool community setup in 10 days
   - **Price**: $2,997 (one-time payment)
   - **Type**: One-time purchase

### Generate Checkout Link
1. After creating the product, click "Create Checkout Link"
2. Copy the checkout link (looks like: `https://polar.sh/checkout/abc123...`)
3. You'll need to add this to your environment variables

### Enable Apple Pay (Optional but Recommended)
1. Email Polar support at support@polar.sh with:
   - Your organization slug
   - Your domain (e.g., `yoursite.manus.space`)
2. They will verify your domain for wallet payments

## Step 2: Set Up NOWPayments (Crypto)

### Create NOWPayments Account
1. Go to https://nowpayments.io
2. Click "Get started" and create an account
3. Complete email verification

### Get API Key
1. Log in to NOWPayments dashboard
2. Navigate to Settings → API Keys
3. Generate a new API key
4. Copy the API key (starts with something like `ABC123...`)

### Configure IPN (Webhooks) - Optional
1. In NOWPayments dashboard, go to Settings → IPN
2. Set IPN callback URL to: `https://yoursite.manus.space/api/webhooks/nowpayments`
3. Generate and save IPN Secret key
4. Set number of recurrent notifications: 3
5. Set timeout: 1 minute

## Step 3: Add Environment Variables

You'll need to add these environment variables through the Manus interface:

### Required Variables:
- `VITE_POLAR_CHECKOUT_LINK` - Your Polar checkout link
- `VITE_NOWPAYMENTS_API_KEY` - Your NOWPayments API key

### Optional Variables:
- `NOWPAYMENTS_IPN_SECRET` - For webhook verification (if using webhooks)

## Step 4: Update Code with Your Credentials

### Update PaymentModal.tsx

Find this line (around line 15):
```typescript
const polarCheckoutLink = "https://polar.sh/checkout/YOUR_CHECKOUT_LINK_HERE";
```

Replace with:
```typescript
const polarCheckoutLink = import.meta.env.VITE_POLAR_CHECKOUT_LINK;
```

Find this line (around line 55):
```typescript
"x-api-key": "YOUR_NOWPAYMENTS_API_KEY",
```

Replace with:
```typescript
"x-api-key": import.meta.env.VITE_NOWPAYMENTS_API_KEY,
```

## Step 5: Testing

### Test Polar (Sandbox Mode)
1. Polar automatically provides test mode
2. Click "Pay with Card / Apple Pay" button
3. Use test card: `4242 4242 4242 4242`
4. Any future expiry date and CVC

### Test NOWPayments (Sandbox Mode)
1. NOWPayments provides a sandbox environment
2. Use sandbox API endpoint: `https://api-sandbox.nowpayments.io/v1/`
3. Get sandbox API key from dashboard
4. Test with small amounts of testnet crypto

## Step 6: Go Live

### Polar
1. Ensure your product is published
2. Verify checkout link is active
3. Test with a real small payment first

### NOWPayments
1. Switch from sandbox to production API endpoint
2. Use production API key
3. Configure your outcome wallet (where you want to receive funds)
4. Test with a small real crypto payment first

## Payment Flow

### Card / Apple Pay (Polar)
1. User clicks "Pay with Card / Apple Pay"
2. Polar embedded checkout opens
3. User completes payment (card details or Apple Pay)
4. Polar processes payment and handles tax compliance
5. User redirected to `/payment-success`
6. You receive webhook notification from Polar

### Crypto (NOWPayments)
1. User clicks "Pay with Crypto"
2. System creates invoice via NOWPayments API
3. User redirected to NOWPayments invoice page
4. User selects cryptocurrency and completes payment
5. NOWPayments processes and converts (if needed)
6. User redirected to `/payment-success`
7. You receive IPN callback from NOWPayments

## Fees Comparison

| Provider | Fee | Notes |
|----------|-----|-------|
| **Polar** | 4% + 40¢ | Includes tax compliance (MoR) |
| **NOWPayments** | 0.5-1% | Plus network fees |

## Support

- **Polar**: support@polar.sh or https://polar.sh/docs
- **NOWPayments**: support@nowpayments.io or https://nowpayments.io/help

## Security Notes

1. **Never commit API keys** to version control
2. Use environment variables for all secrets
3. Verify webhook signatures (IPN for NOWPayments)
4. Use HTTPS for all payment pages
5. Test thoroughly before going live
6. Monitor payment logs regularly

## Troubleshooting

### Polar Checkout Not Opening
- Verify checkout link is correct and active
- Check browser console for errors
- Ensure @polar-sh/checkout package is installed

### NOWPayments Invoice Creation Fails
- Verify API key is correct
- Check API endpoint (sandbox vs production)
- Ensure price_amount is valid
- Check NOWPayments dashboard for error logs

### Webhooks Not Receiving
- Verify webhook URL is publicly accessible
- Check webhook signature verification
- Review webhook logs in provider dashboards
- Ensure webhook endpoint is properly configured

## Next Steps

1. Set up both payment provider accounts
2. Add environment variables
3. Update code with credentials
4. Test in sandbox/test mode
5. Verify success/failure pages work
6. Set up webhook endpoints (optional but recommended)
7. Go live with real payments
8. Monitor transactions and customer feedback
