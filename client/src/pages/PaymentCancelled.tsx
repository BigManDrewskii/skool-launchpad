import { XCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "wouter";

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <XCircleIcon className="w-20 h-20 text-gray-400 dark:text-gray-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Payment Cancelled
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Your payment was cancelled. No charges have been made to your account.
        </p>
        
        <div className="space-y-3">
          <Link href="/">
            <a className="block w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              Return to Home
            </a>
          </Link>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need help? Email us at{" "}
            <a 
              href="mailto:hello@studiodrewskii.com" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              hello@studiodrewskii.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
