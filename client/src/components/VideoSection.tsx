import { PlayIcon, BoltIcon } from "@heroicons/react/24/solid";

export default function VideoSection() {
  const thumbnails = [
    { id: 1, color: "bg-red-900" },
    { id: 2, color: "bg-yellow-700" },
    { id: 3, color: "bg-blue-900" },
    { id: 4, color: "bg-gray-800" },
  ];

  return (
    <div className="space-y-3">
      {/* Main Video Player */}
      <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded overflow-hidden">
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors group">
            <PlayIcon className="w-8 h-8 text-gray-900 ml-1" />
          </button>
        </div>

        {/* Video Stats Overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-3">
          <div className="flex items-center gap-1 text-white text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>1.2×</span>
          </div>
          <div className="h-4 w-px bg-white/30" />
          <div className="flex items-center gap-2 text-white text-sm">
            <span className="text-muted-foreground">5 min</span>
            <BoltIcon className="w-4 h-4 text-yellow-400" />
            <span>3 min 54 sec</span>
          </div>
        </div>
      </div>

      {/* Video Thumbnails */}
      <div className="flex gap-2">
        {thumbnails.map((thumb, index) => (
          <button
            key={thumb.id}
            className={`relative flex-1 aspect-video rounded overflow-hidden border-2 transition-all ${
              index === 0
                ? "border-primary"
                : "border-border hover:border-muted-foreground"
            }`}
          >
            <div className={`w-full h-full ${thumb.color}`}>
              {index === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayIcon className="w-8 h-8 text-white/80" />
                </div>
              )}
            </div>
          </button>
        ))}
        <button className="flex-1 aspect-video rounded border-2 border-dashed border-border hover:border-muted-foreground flex items-center justify-center transition-colors">
          <span className="text-2xl text-muted-foreground">+</span>
        </button>
      </div>
    </div>
  );
}
