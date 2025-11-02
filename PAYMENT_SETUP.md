# Payment Integration Setup Guide

This guide explains how to set up payment processing for The Skool Launchpad landing page using **Polar** (for card/Apple Pay) and **Coinbase Commerce** (for cryptocurrency payments).

## Overview

The landing page supports two payment methods:

1. **Polar** - Traditional payments (credit/debit cards, Apple Pay, Google Pay)
2. **Coinbase Commerce** - Cryptocurrency payments (Bitcoin, Ethereum, USDC, and 100+ other cryptocurrencies)

Both integrations use hosted checkout pages, meaning customers are redirected to secure payment pages hosted by Polar and Coinbase Commerce respectively.

---

## 1. Polar Integration (Card / Apple Pay)

### Current Status
✅ **Already configured** with your checkout link:
```
https://buy.polar.sh/polar_cl_s57XH9P3BT58XVeiaQsMOvLeJNCzD70vAJy2s46IhRn
```

### How It Works
1. User clicks "Pay with Card / Apple Pay" button
2. Polar embedded checkout modal opens
3. User completes payment with card or Apple Pay
4. On success, user is redirected to `/payment-success`
5. On cancel, modal closes

### Fees
- **4% + $0.40** per transaction
- No monthly fees
- Polar handles all tax compliance globally

### Testing
- The checkout link is already integrated in `PaymentModal.tsx`
- Test by clicking the "Pay with Card / Apple Pay" button
- Use Polar's test mode for development

---

## 2. Coinbase Commerce Integration (Crypto)

### Setup Required
You need to create a Coinbase Commerce account and get an API key.

### Step 1: Create Coinbase Commerce Account
1. Go to https://commerce.coinbase.com
2. Sign up with your email
3. Complete verification (no KYC required for merchants)

### Step 2: Get API Key
1. Log in to Coinbase Commerce dashboard
2. Go to **Settings** → **API Keys**
3. Click **Create an API Key**
4. Copy the API key (starts with a long string)
5. **IMPORTANT**: Save it securely - you won't be able to see it again

### Step 3: Add API Key to Manus
1. In Manus, go to **Management UI** → **Settings** → **Secrets**
2. Add a new secret:
   - **Key**: `VITE_COINBASE_COMMERCE_API_KEY`
   - **Value**: Your Coinbase Commerce API key
3. Save the secret

### How It Works
1. User clicks "Pay with Crypto" button
2. App creates a charge via Coinbase Commerce API
3. User is redirected to Coinbase Commerce hosted checkout page
4. User selects cryptocurrency and completes payment
5. On success, user is redirected to `/payment-success`
6. On cancel, user is redirected to `/payment-cancelled`

### Supported Cryptocurrencies
Coinbase Commerce supports 100+ cryptocurrencies including:
- Bitcoin (BTC)
- Ethereum (ETH)
- USD Coin (USDC)
- Tether (USDT)
- Litecoin (LTC)
- Bitcoin Cash (BCH)
- Dogecoin (DOGE)
- And many more...

### Fees
- **1%** transaction fee
- No monthly fees
- **Non-custodial** - Payments go directly to your wallet

### Payment Flow
```
User clicks "Pay with Crypto"
    ↓
App calls Coinbase Commerce API to create charge
    ↓
API returns hosted_url
    ↓
User redirected to Coinbase Commerce checkout
    ↓
User selects crypto and pays
    ↓
Payment confirmed on blockchain
    ↓
User redirected to success page
```

---

## 3. Webhook Setup (Optional but Recommended)

### Why Webhooks?
Webhooks allow you to receive real-time notifications when payments are completed, so you can:
- Automatically provision access to the Skool community
- Send confirmation emails
- Update your database
- Track analytics

### Polar Webhooks
1. In Polar dashboard, go to **Webhooks**
2. Add webhook URL: `https://your-domain.com/api/webhooks/polar`
3. Select events: `checkout.completed`

### Coinbase Commerce Webhooks
1. In Coinbase Commerce dashboard, go to **Settings** → **Webhook subscriptions**
2. Add webhook URL: `https://your-domain.com/api/webhooks/coinbase`
3. Select events: `charge:confirmed`, `charge:failed`

**Note**: Webhook implementation requires a backend server. Since this is a static site, you can use services like:
- Zapier
- Make (formerly Integromat)
- n8n
- Custom serverless function (Vercel, Netlify, AWS Lambda)

---

## 4. Testing

### Test Polar Integration
1. Open the landing page
2. Click "Pay with Card / Apple Pay"
3. Polar checkout modal should open
4. Use test card numbers from Polar documentation

### Test Coinbase Commerce Integration
1. Ensure `VITE_COINBASE_COMMERCE_API_KEY` is set in Manus Secrets
2. Open the landing page
3. Click "Pay with Crypto"
4. You should be redirected to Coinbase Commerce checkout
5. Use Coinbase Commerce test mode for development

---

## 5. Going Live

### Checklist
- [ ] Polar checkout link configured (✅ Already done)
- [ ] Coinbase Commerce account created
- [ ] Coinbase Commerce API key added to Manus Secrets
- [ ] Test both payment flows
- [ ] Set up webhooks (optional)
- [ ] Update success/cancelled pages with your branding
- [ ] Test on mobile devices
- [ ] Verify payment confirmations work

### Production Considerations
1. **Polar**: Already in production mode with your checkout link
2. **Coinbase Commerce**: Ensure you're using production API key (not sandbox)
3. **SSL**: Ensure your site is served over HTTPS (Manus handles this automatically)
4. **Error Handling**: Monitor browser console for any payment errors
5. **Customer Support**: Have a support email ready for payment issues

---

## 6. Troubleshooting

### Polar Checkout Not Opening
- Check browser console for errors
- Ensure `@polar-sh/checkout` package is installed
- Verify checkout link is correct

### Coinbase Commerce "Payment system not configured" Error
- Ensure `VITE_COINBASE_COMMERCE_API_KEY` is set in Manus Secrets
- Check that the secret key name is exactly `VITE_COINBASE_COMMERCE_API_KEY`
- Restart the dev server after adding secrets

### Payment Success Page Not Showing
- Ensure `/payment-success` and `/payment-cancelled` routes exist in `App.tsx`
- Check that redirect URLs are correct

### CORS Errors
- Coinbase Commerce API should not have CORS issues (server-side API)
- If you see CORS errors, you may need a backend proxy

---

## 7. Support

### Polar Support
- Documentation: https://docs.polar.sh
- Support: support@polar.sh

### Coinbase Commerce Support
- Documentation: https://docs.cdp.coinbase.com/commerce
- Support: https://help.coinbase.com/en/commerce

### Manus Support
- For issues with Manus integration, contact Manus support

---

## Summary

You now have a complete payment system with:
- ✅ **Polar** for traditional payments (4% + $0.40 fee)
- ✅ **Coinbase Commerce** for crypto payments (1% fee, non-custodial)
- ✅ Hosted checkout pages (no PCI compliance needed)
- ✅ Success/failure redirect pages
- ✅ Professional payment UX

**Next step**: Create your Coinbase Commerce account and add the API key to Manus Secrets to activate crypto payments!
