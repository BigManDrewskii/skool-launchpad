import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function CommunitySidebar() {
  const relatedLinks = [
    "AI Design Club (500+ designers)",
    "View Portfolio",
    "Book a Call",
  ];

  const stats = [
    { label: "Brands Shipped", value: "100+" },
    { label: "Years at Game7", value: "4+" },
    { label: "Designers Taught", value: "500+" },
  ];

  // Avatar colors for placeholder
  const avatarColors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-red-500",
  ];

  const avatarInitials = ["S", "D", "A", "G", "B", "M"];

  return (
    <div className="space-y-4">
      {/* Community Card */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        {/* Banner - Solid Black Background */}
        <div className="h-20 bg-black flex items-center justify-center">
          <div className="text-white font-bold text-2xl tracking-wider">
            STUDIO DREWSKII
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Title */}
          <div>
            <h3 className="font-bold text-gray-900 text-base">
              Studio Drewskii
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              studiodrewskii.com
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 leading-relaxed">
            Premium brand design, fast. Complete brand systems delivered in 7 days without compromising quality.
          </p>

          {/* Related Links */}
          <div className="space-y-1.5">
            {relatedLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                <span>{link}</span>
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 pt-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-bold text-gray-900 text-base">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* About Creator */}
          <div className="pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">Andreas Michailidis (Drewskii)</span>
              <br />
              Design Lead at Game7. Built 100+ brand systems. Teaching 500+ designers in AI Design Club.
            </p>
          </div>

          {/* Member Avatars */}
          <div className="flex items-center gap-1.5 pt-2">
            {avatarInitials.map((initial, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full ${avatarColors[index]} flex items-center justify-center text-white text-xs font-semibold`}
              >
                {initial}
              </div>
            ))}
          </div>

          {/* JOIN GROUP Button - Solid Yellow */}
          <button className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
            BOOK A STRATEGY CALL
          </button>
        </div>
      </div>

      {/* Powered by */}
      <div className="text-center">
        <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
          Powered by <span className="font-semibold">Studio Drewskii</span>
        </a>
      </div>
    </div>
  );
}
