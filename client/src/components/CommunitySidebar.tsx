import { Button } from "@/components/ui/button";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function CommunitySidebar() {
  const relatedLinks = [
    "More AI & Design Related Content",
    "AI-Powered Design Agency",
    "Start your Skool!",
  ];

  const memberAvatars = [
    { id: 1, name: "S", color: "bg-blue-600" },
    { id: 2, name: "E", color: "bg-green-600" },
    { id: 3, name: "V", color: "bg-purple-600" },
    { id: 4, name: "G", color: "bg-pink-600" },
    { id: 5, name: "A", color: "bg-orange-600" },
    { id: 6, name: "B", color: "bg-red-600" },
  ];

  return (
    <div className="space-y-4">
      {/* Community Card */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        {/* Banner - Real Image, NO GRADIENT */}
        <div className="h-20 bg-black overflow-hidden">
          <img 
            src="/ai-design-club-banner.webp" 
            alt="AI Design Club"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Title and URL */}
          <div>
            <h3 className="font-semibold text-gray-900 text-base">
              AI Design Club
            </h3>
            <p className="text-xs text-gray-500">
              skool.com/ai-design-club
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-900 leading-relaxed">
            Master AI Workflows as a Designer. Get Seen More, Get Paid More.
          </p>

          {/* Related Links */}
          <div className="space-y-1.5">
            {relatedLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors group"
              >
                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                <span>{link}</span>
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 pt-3">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">552</div>
              <div className="text-xs text-gray-500">Members</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">7</div>
              <div className="text-xs text-gray-500">Online</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">4</div>
              <div className="text-xs text-gray-500">Admins</div>
            </div>
          </div>

          {/* Member Avatars */}
          <div className="flex items-center gap-1.5 pt-1">
            {memberAvatars.map((avatar) => (
              <div
                key={avatar.id}
                className={`w-7 h-7 rounded-full ${avatar.color} flex items-center justify-center text-white text-xs font-semibold`}
              >
                {avatar.name}
              </div>
            ))}
          </div>

          {/* CTA Button - Solid Yellow/Gold Color */}
          <Button className="w-full bg-[#F4D03F] hover:bg-[#F5C842] text-black font-semibold text-sm h-10 border-0">
            JOIN GROUP
          </Button>
        </div>
      </div>

      {/* Powered by */}
      <div className="text-center">
        <a
          href="#"
          className="text-sm text-gray-500 hover:text-gray-900 inline-flex items-center gap-1"
        >
          Powered by{" "}
          <span className="font-semibold text-gray-900">Skool</span>
        </a>
      </div>
    </div>
  );
}
