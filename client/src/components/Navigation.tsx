import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Community",
    "Classroom",
    "Calendar",
    "Members",
    "Map",
    "Leaderboards",
    "About",
  ];

  const socialLinks = [
    {
      name: "Skool",
      description: "AI Design Club community",
      url: "#",
      icon: "🎓",
    },
    {
      name: "YouTube",
      description: "Design experiments & workflows",
      url: "#",
      icon: "▶️",
    },
    {
      name: "LinkedIn",
      description: "Professional network",
      url: "#",
      icon: "💼",
    },
    {
      name: "Telegram",
      description: "Direct messaging",
      url: "#",
      icon: "✈️",
    },
    {
      name: "Contra",
      description: "Portfolio & projects",
      url: "#",
      icon: "💼",
    },
  ];

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/skool-launchpad-logo.svg"
              alt="Skool Launchpad"
              className="h-6"
            />
          </div>

          {/* Social Links Popover (replacing search) */}
          <div className="flex-1 max-w-md mx-8">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <button className="w-full px-4 py-2 text-sm text-left text-gray-500 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Connect with me →
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4" align="center">
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm text-gray-900 mb-3">
                    Let's Connect
                  </h3>
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-lg">{link.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-gray-900 group-hover:text-black">
                          {link.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {link.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Book a Call CTA */}
          <Button className="bg-black text-white hover:bg-gray-800 h-9 px-6 text-sm font-medium transition-colors">
            Book a Call
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-6 -mb-px">
          {navItems.map((item, index) => (
            <button
              key={item}
              className={`py-3 px-1 border-b-2 transition-colors text-sm ${
                index === navItems.length - 1
                  ? "border-black text-gray-900 font-medium"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
