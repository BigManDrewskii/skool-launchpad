export default function PrivacyTerms() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[hsl(80,8%,8%)]">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[hsl(80,7%,12%)]">
        <div className="container mx-auto px-4 py-6">
          <a href="/" className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Privacy & Terms</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">Last updated: November 2, 2025</p>

        {/* Privacy Policy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Who We Are</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The Skool Launchpad is operated by Studio Drewskii, led by Andreas Michailidis (Drewskii). We help experts launch professional Skool communities in 10 days with done-for-you branding, setup, and sales funnels.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Information We Collect</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                We collect only what's necessary to deliver the service:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>Contact information (name, email) when you book a strategy call</li>
                <li>Payment information (processed securely through our payment processor)</li>
                <li>Project details and content you provide during the 10-day build</li>
                <li>Basic usage data (how you interact with this site)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">How We Use Your Information</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>To deliver The Skool Launchpad service (branding, setup, sales funnel)</li>
                <li>To communicate with you about your project timeline and deliverables</li>
                <li>To process your $2,997 payment securely</li>
                <li>To improve our services and user experience</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Security</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We protect your information using industry-standard security measures. Payment processing is handled by secure third-party processors—we never store your payment details. Your project files are stored securely and deleted after delivery unless you request otherwise.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Your Rights</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>Access the personal data we hold about you</li>
                <li>Request deletion of your data (after project completion)</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Ask questions about how we handle your information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Contact</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                For privacy questions, email us through the contact information on{" "}
                <a href="https://studiodrewskii.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  studiodrewskii.com
                </a>
                {" "}or{" "}
                <a href="https://drewskii.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  drewskii.info
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Terms of Service</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">The Service</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                The Skool Launchpad is a 10-day service that delivers:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li><strong>The Brand:</strong> Real logo, professional banner, clean color system</li>
                <li><strong>The Skool Setup:</strong> Full group configuration, course structure, working onboarding</li>
                <li><strong>The Sales Funnel:</strong> Converting landing page and VSL script that sells</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                Day 1 is a 60-minute strategy call. Days 2-9 are focused execution. Day 10, your community goes live.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Payment Terms</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The service costs $2,997, paid once. No recurring fees. Payment is due before work begins. No refunds after the strategy call is completed and work has started. If you're serious about launching your Skool community, this investment pays for itself with 31 members at $97/month.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Your Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>Provide necessary content, materials, and brand information during the strategy call</li>
                <li>Respond to communication within 24-48 hours to keep the 10-day timeline</li>
                <li>Have your expertise and content ready—you bring the knowledge, we build the machine</li>
                <li>Review deliverables and provide feedback promptly</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>Deliver all three components (Brand, Setup, Sales Funnel) within 10 days</li>
                <li>Maintain professional standards in design and execution</li>
                <li>Communicate clearly throughout the process</li>
                <li>Provide final files and access to your completed Skool community</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Intellectual Property</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You own all final deliverables—the brand assets, Skool setup, and sales funnel. We retain the right to showcase the work in our portfolio and case studies (with your permission for sensitive projects).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Limitation of Liability</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The service is provided "as is." We build the machine—you run it. We don't guarantee specific member numbers, revenue, or business outcomes. Your success depends on your expertise, marketing, and execution after launch.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Changes to Terms</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update these terms as the service evolves. Continued use of the service after changes means you accept the new terms. We'll notify active clients of significant changes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Contact</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Questions about these terms? Reach out through{" "}
                <a href="https://studiodrewskii.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  studiodrewskii.com
                </a>
                {" "}or{" "}
                <a href="https://drewskii.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  drewskii.info
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © 2025 Studio Drewskii. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
