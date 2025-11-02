import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "wouter";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircleIcon className="w-20 h-20 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-lg text-muted-foreground mb-6">
          Thank you for your purchase! Your Skool Launchpad journey begins now.
        </p>
        
        <div className="bg-card rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-card-foreground mb-3">
            What's Next?
          </h2>
          <ul className="text-left space-y-3 text-card-foreground/80">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-0.5">1.</span>
              <span>Check your email for payment confirmation and next steps</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-0.5">2.</span>
              <span>You'll receive a calendar invite for your strategy call within 24 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-0.5">3.</span>
              <span>Prepare your brand vision and community goals for our call</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-3">
          <Link href="/">
            <a className="block w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Return to Home
            </a>
          </Link>
          
          <p className="text-sm text-muted-foreground">
            Questions? Email us at{" "}
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
