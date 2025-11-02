import { ArrowRightIcon, CreditCardIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import PaymentModal from "./PaymentModal";

export default function DescriptionSection() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentType, setPaymentType] = useState<"card" | "crypto">("card");

  const handleCardPayment = () => {
    setPaymentType("card");
    setShowPaymentModal(true);
  };

  const handleCryptoPayment = () => {
    setPaymentType("crypto");
    setShowPaymentModal(true);
  };

  return (
    <div className="space-y-5">
      {/* Opening Statement */}
      <p className="text-lg font-semibold text-foreground leading-relaxed">
        Done-for-you branding, setup, and sales funnel. You bring the expertise. I build the machine.
      </p>

      {/* What's Inside Section */}
      <div className="space-y-4 pt-2">
        <h2 className="text-sm font-semibold text-foreground">
          What you get:
        </h2>

        <ul className="space-y-2.5">
          <li className="flex items-start gap-2 text-sm text-foreground/80">
            <span className="text-muted-foreground mt-0.5">•</span>
            <div>
              <span className="font-semibold text-foreground">The Brand:</span> Real logo, professional banner, clean color system
            </div>
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground/80">
            <span className="text-muted-foreground mt-0.5">•</span>
            <div>
              <span className="font-semibold text-foreground">The Skool Setup:</span> Full group configuration, course structure, working onboarding
            </div>
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground/80">
            <span className="text-muted-foreground mt-0.5">•</span>
            <div>
              <span className="font-semibold text-foreground">The Sales Funnel:</span> Converting landing page and VSL script that sells
            </div>
          </li>
        </ul>
      </div>

      {/* The Process Section */}
      <div className="space-y-2.5 pt-2">
        <div className="flex items-start gap-2 text-sm text-foreground/80">
          <ArrowRightIcon className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold text-foreground">Strategy Call:</span> 60 minutes to define the plan
          </div>
        </div>
        <div className="flex items-start gap-2 text-sm text-foreground/80">
          <ArrowRightIcon className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold text-foreground">I Build:</span> 9 days of focused execution
          </div>
        </div>
        <div className="flex items-start gap-2 text-sm text-foreground/80">
          <ArrowRightIcon className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold text-foreground">You Launch:</span> Day 10, your community goes live
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="pt-3 border-t border-border">
        <div className="text-3xl font-bold text-foreground">$2,997</div>
        <div className="text-sm text-muted-foreground mt-1">One-time. No recurring fees.</div>
        <p className="text-sm text-muted-foreground mt-3">
          If your community is $97/month, you need 31 members to pay for this. You will get more than 31 members if you are serious.
        </p>
      </div>

      {/* CTA Link */}
      <a
        href="#"
        className="inline-block text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors"
      >
        Book a Strategy Call →
      </a>

      {/* Payment Buttons Section */}
      <div className="pt-4 space-y-3">
        <div className="text-sm font-semibold text-foreground">
          Ready to launch? Choose your payment method:
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Traditional Payment Button (Polar) */}
          <button
            onClick={handleCardPayment}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            <CreditCardIcon className="w-5 h-5" />
            Pay with Card / Apple Pay
          </button>

          {/* Crypto Payment Button (Coinbase Commerce) */}
          <button
            onClick={handleCryptoPayment}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-background text-foreground font-semibold rounded-lg border-2 border-primary hover:bg-accent transition-colors"
          >
            <CurrencyDollarIcon className="w-5 h-5" />
            Pay with Crypto
          </button>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Secure payment processing • Crypto via Coinbase Commerce (non-custodial) • Apple Pay & Google Pay supported
        </p>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        paymentType={paymentType}
      />
    </div>
  );
}
