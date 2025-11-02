import { XCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "wouter";

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <XCircleIcon className="w-20 h-20 text-muted-foreground" />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Payment Cancelled
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Your payment was cancelled. No charges have been made to your account.
        </p>
        
        <div className="space-y-3">
          <Link href="/">
            <a className="block w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Return to Home
            </a>
          </Link>
          
          <p className="text-sm text-muted-foreground">
            Need help? Email us at{" "}
            <a 
              href="mailto:hello@studiodrewskii.com" 
              className="text-blue-500 hover:underline"
            >
              hello@studiodrewskii.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
