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
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        {/* Banner */}
        <div className="h-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">AI</div>
            <div className="text-xs text-white/80 tracking-wide">DESIGN CLUB</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Title and URL */}
          <div>
            <h3 className="font-semibold text-foreground text-base">
              AI Design Club
            </h3>
            <p className="text-xs text-muted-foreground">
              skool.com/ai-design-club
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-foreground leading-relaxed">
            Master AI Workflows as a Designer. Get Seen More, Get Paid More.
          </p>

          {/* Related Links */}
          <div className="space-y-1.5">
            {relatedLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                <span>{link}</span>
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 pt-3">
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">552</div>
              <div className="text-xs text-muted-foreground">Members</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">6</div>
              <div className="text-xs text-muted-foreground">Online</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">4</div>
              <div className="text-xs text-muted-foreground">Admins</div>
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

          {/* CTA Button */}
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm h-10">
            JOIN GROUP
          </Button>
        </div>
      </div>

      {/* Powered by */}
      <div className="text-center">
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
        >
          Powered by{" "}
          <span className="font-semibold text-foreground">Skool</span>
        </a>
      </div>
    </div>
  );
}
