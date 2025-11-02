import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function DescriptionSection() {
  const features = [
    "Behind the Scenes of how an AI Powered Design Agency Works",
    "App Showcase: Live building sessions with real projects",
    "AI Tools Superguides: Complete development mastery from beginner to expert",
    "Tool Reviews: Honest reviews of what actually works for designers",
    "Design Workflows: Practical tutorials for real client work",
  ];

  const benefits = [
    "Daily engagement and support from Andreas",
    "Community with motivated designers, engineers, developers, marketeers and hobbyists",
    "No-hype approach focused on practical results",
  ];

  return (
    <div className="space-y-5">
      {/* Main Headline */}
      <div className="space-y-3">
        <h1 className="text-xl font-bold tracking-tight leading-tight text-gray-900">
          TRANSFORM YOUR DESIGN PRACTICE INTO A HIGHLY EFFICIENT, HIGHLY
          PROFITABLE AI-POWERED BUSINESS.
        </h1>

        <p className="text-base text-gray-900 leading-relaxed">
          Confidently Build AI Workflows that will Support your Most Creative,
          Productive, and Profitable Design Career for Years to Come.
        </p>
      </div>

      {/* What's Inside */}
      <div className="space-y-2.5">
        <h2 className="font-semibold text-gray-900 text-sm">What's Inside:</h2>
        <ul className="space-y-1.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-900 text-sm leading-relaxed">
              <span className="text-gray-400 mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="space-y-1.5">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-2 text-gray-900 text-sm leading-relaxed">
            <ArrowRightIcon className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      {/* Join FREE Link */}
      <div className="pt-1">
        <a
          href="#"
          className="text-blue-600 hover:underline font-medium inline-block text-sm"
        >
          Join FREE
        </a>
      </div>
    </div>
  );
}
