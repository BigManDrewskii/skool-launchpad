import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function DescriptionSection() {
  return (
    <div className="space-y-5">
      {/* Opening Statement */}
      <p className="text-lg font-semibold text-gray-900 leading-relaxed">
        Done-for-you branding, setup, and sales funnel. You bring the expertise. I build the machine.
      </p>

      {/* What's Inside Section */}
      <div className="space-y-4 pt-2">
        <h2 className="text-sm font-semibold text-gray-900">
          What you get:
        </h2>

        <ul className="space-y-2.5">
          <li className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-gray-400 mt-0.5">•</span>
            <div>
              <span className="font-semibold text-gray-900">The Brand:</span> Real logo, professional banner, clean color system
            </div>
          </li>
          <li className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-gray-400 mt-0.5">•</span>
            <div>
              <span className="font-semibold text-gray-900">The Skool Setup:</span> Full group configuration, course structure, working onboarding
            </div>
          </li>
          <li className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-gray-400 mt-0.5">•</span>
            <div>
              <span className="font-semibold text-gray-900">The Sales Funnel:</span> Converting landing page and VSL script that sells
            </div>
          </li>
        </ul>
      </div>

      {/* The Process Section */}
      <div className="space-y-2.5 pt-2">
        <div className="flex items-start gap-2 text-sm text-gray-700">
          <ArrowRightIcon className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold text-gray-900">Strategy Call:</span> 60 minutes to define the plan
          </div>
        </div>
        <div className="flex items-start gap-2 text-sm text-gray-700">
          <ArrowRightIcon className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold text-gray-900">I Build:</span> 9 days of focused execution
          </div>
        </div>
        <div className="flex items-start gap-2 text-sm text-gray-700">
          <ArrowRightIcon className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold text-gray-900">You Launch:</span> Day 10, your community goes live
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="pt-3 border-t border-gray-200">
        <div className="text-3xl font-bold text-gray-900">$2,997</div>
        <div className="text-sm text-gray-500 mt-1">One-time. No recurring fees.</div>
        <p className="text-sm text-gray-600 mt-3">
          If your community is $97/month, you need 31 members to pay for this. You will get more than 31 members if you are serious.
        </p>
      </div>

      {/* CTA Link */}
      <a
        href="#"
        className="inline-block text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
      >
        Book a Strategy Call →
      </a>
    </div>
  );
}
