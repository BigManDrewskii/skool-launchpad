import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { PolarEmbedCheckout } from "@polar-sh/checkout/embed";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentType: "card" | "crypto";
}

export default function PaymentModal({ isOpen, onClose, paymentType }: PaymentModalProps) {
  const [checkoutInstance, setCheckoutInstance] = useState<any>(null);

  useEffect(() => {
    if (isOpen && paymentType === "card") {
      // Initialize Polar checkout
      // Polar checkout link for The Skool Launchpad ($2,997)
      const polarCheckoutLink = "https://buy.polar.sh/polar_cl_s57XH9P3BT58XVeiaQsMOvLeJNCzD70vAJy2s46IhRn";
      
      PolarEmbedCheckout.create(polarCheckoutLink, "light")
        .then((checkout) => {
          setCheckoutInstance(checkout);

          // Listen for success event
          checkout.addEventListener("success", (event: any) => {
            console.log("Payment successful!", event.detail);
            // Redirect to success page or show success message
            window.location.href = "/payment-success";
          });

          // Listen for close event
          checkout.addEventListener("close", () => {
            onClose();
          });
        })
        .catch((error) => {
          console.error("Failed to open Polar checkout", error);
        });
    }

    // Cleanup on unmount
    return () => {
      if (checkoutInstance) {
        checkoutInstance.close();
      }
    };
  }, [isOpen, paymentType]);

  useEffect(() => {
    if (isOpen && paymentType === "crypto") {
      // Handle crypto payment with NOWPayments
      handleCryptoPayment();
    }
  }, [isOpen, paymentType]);

  const handleCryptoPayment = async () => {
    try {
      // Coinbase Commerce integration
      // Create a charge via Coinbase Commerce API
      const apiKey = import.meta.env.VITE_COINBASE_COMMERCE_API_KEY;
      
      if (!apiKey) {
        console.error("Coinbase Commerce API key not configured");
        alert("Payment system not configured. Please contact support.");
        onClose();
        return;
      }
      
      const response = await fetch("https://api.commerce.coinbase.com/charges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CC-Api-Key": apiKey,
          "X-CC-Version": "2018-03-22",
        },
        body: JSON.stringify({
          name: "The Skool Launchpad",
          description: "Done-for-you Skool Community Setup - Professional branding, setup, and sales funnel in 10 days",
          pricing_type: "fixed_price",
          local_price: {
            amount: "2997.00",
            currency: "USD",
          },
          metadata: {
            customer_id: `customer-${Date.now()}`,
            order_id: `skool-launchpad-${Date.now()}`,
          },
          redirect_url: `${window.location.origin}/payment-success`,
          cancel_url: `${window.location.origin}/payment-cancelled`,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Redirect to Coinbase Commerce hosted checkout page
        window.location.href = data.data.hosted_url;
      } else {
        const errorData = await response.json();
        console.error("Failed to create Coinbase Commerce charge:", errorData);
        alert("Failed to create payment. Please try again.");
        onClose();
      }
    } catch (error) {
      console.error("Crypto payment error:", error);
      alert("Failed to process payment. Please try again.");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div 
        className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full mx-4 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {paymentType === "card" ? "Card Payment" : "Crypto Payment"}
          </h2>
          
          {paymentType === "card" ? (
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Loading secure checkout...
              </p>
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Creating crypto payment invoice...
              </p>
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
