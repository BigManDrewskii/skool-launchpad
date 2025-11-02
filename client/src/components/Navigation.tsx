import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navigation() {
  const navItems = [
    "Community",
    "Classroom",
    "Calendar",
    "Members",
    "Map",
    "Leaderboards",
    "About",
  ];

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
              <svg
                className="w-4 h-4 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="font-semibold text-gray-900 text-sm">The Skool Launchpad</span>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search"
                className="pl-10 bg-gray-100 border-gray-300 h-9 text-sm"
              />
            </div>
          </div>

          {/* Log In Button */}
          <Button 
            variant="outline" 
            className="bg-transparent border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 h-9 px-4 text-sm font-medium transition-colors"
          >
            Log In
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
