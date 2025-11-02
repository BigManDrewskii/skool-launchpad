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
      <p className="text-lg font-semibold text-gray-900 dark:text-white leading-relaxed">
        Done-for-you branding, setup, and sales funnel. You bring the expertise. I build the machine.
      </p>

      {/* What's Inside Section */}
      <div className="space-y-4 pt-2">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
          What you get:
        </h2>

        <ul className="space-y-2.5">
          <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="text-gray-400 dark:text-gray-500 mt-0.5">•</span>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">The Brand:</span> Real logo, professional banner, clean color system
            </div>
          </li>
          <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="text-gray-400 dark:text-gray-500 mt-0.5">•</span>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">The Skool Setup:</span> Full group configuration, course structure, working onboarding
            </div>
          </li>
          <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="text-gray-400 dark:text-gray-500 mt-0.5">•</span>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">The Sales Funnel:</span> Converting landing page and VSL script that sells
            </div>
          </li>
        </ul>
      </div>

      {/* The Process Section */}
      <div className="space-y-2.5 pt-2">
        <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
          <ArrowRightIcon className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Strategy Call:</span> 60 minutes to define the plan
          </div>
        </div>
        <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
          <ArrowRightIcon className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold text-gray-900 dark:text-white">I Build:</span> 9 days of focused execution
          </div>
        </div>
        <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
          <ArrowRightIcon className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold text-gray-900 dark:text-white">You Launch:</span> Day 10, your community goes live
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
        <div className="text-3xl font-bold text-gray-900 dark:text-white">$2,997</div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">One-time. No recurring fees.</div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          If your community is $97/month, you need 31 members to pay for this. You will get more than 31 members if you are serious.
        </p>
      </div>

      {/* CTA Link */}
      <a
        href="#"
        className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        Book a Strategy Call →
      </a>

      {/* Payment Buttons Section */}
      <div className="pt-4 space-y-3">
        <div className="text-sm font-semibold text-gray-900 dark:text-white">
          Ready to launch? Choose your payment method:
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Traditional Payment Button (Polar) */}
          <button
            onClick={handleCardPayment}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <CreditCardIcon className="w-5 h-5" />
            Pay with Card / Apple Pay
          </button>

          {/* Crypto Payment Button (Coinbase Commerce) */}
          <button
            onClick={handleCryptoPayment}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-black dark:text-white font-semibold rounded-lg border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <CurrencyDollarIcon className="w-5 h-5" />
            Pay with Crypto
          </button>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
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
