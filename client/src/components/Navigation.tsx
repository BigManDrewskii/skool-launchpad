import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const platforms = ["linkedin", "youtube", "telegram", "skool", "contra"];
  
  const socialLinks = [
    {
      name: "LinkedIn",
      description: "Professional network",
      url: "https://www.linkedin.com/in/andreasmichailidis/",
    },
    {
      name: "YouTube",
      description: "Design experiments & workflows",
      url: "https://www.youtube.com/@studiodrewskii",
    },
    {
      name: "Telegram",
      description: "Direct messaging",
      url: "https://t.me/drewskii",
    },
    {
      name: "Skool",
      description: "AI Design Club community",
      url: "https://www.skool.com/ai-design-club",
    },
    {
      name: "Contra",
      description: "Portfolio & projects",
      url: "https://contra.com/drewskii",
    },
  ];

  // Typing animation effect
  useEffect(() => {
    const currentPlatform = platforms[currentPlatformIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (typedText.length < currentPlatform.length) {
          setTypedText(currentPlatform.slice(0, typedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (typedText.length > 0) {
          setTypedText(currentPlatform.slice(0, typedText.length - 1));
        } else {
          // Move to next platform
          setIsDeleting(false);
          setCurrentPlatformIndex((prev) => (prev + 1) % platforms.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentPlatformIndex, platforms]);

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50 transition-colors">
      <div className="container">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/skool-launchpad-logo.svg"
              alt="Skool Launchpad"
              className="h-6 dark:invert dark:brightness-0 dark:contrast-200"
            />
          </div>

          {/* Search Bar with Typing Animation */}
          <div className="flex-1 max-w-md mx-8">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <button className="w-full px-4 py-2 text-sm text-left bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-white dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all flex items-center gap-2">
                  <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  <span className="text-gray-900 dark:text-gray-100 font-mono">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg" align="center">
                <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                    Connect with me
                  </h3>
                </div>
                <div className="p-2">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white">
                          {link.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {link.description}
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Theme Toggle & Book a Call */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleTheme?.()}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 h-9 px-6 text-sm font-medium transition-colors">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
