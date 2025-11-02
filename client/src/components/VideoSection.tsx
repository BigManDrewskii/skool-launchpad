import { PlayIcon, BoltIcon } from "@heroicons/react/24/solid";

export default function VideoSection() {
  return (
    <div className="space-y-3">
      {/* Main Video Player */}
      <div className="relative aspect-video bg-black rounded overflow-hidden">
        <img 
          src="/main-video-thumbnail.webp" 
          alt="Main video"
          className="w-full h-full object-cover"
        />
        
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
            <span className="text-gray-400">5 min</span>
            <BoltIcon className="w-4 h-4 text-yellow-400" />
            <span>3 min 54 sec</span>
          </div>
        </div>
      </div>

      {/* Video Thumbnails */}
      <div className="flex gap-2">
        <button className="relative flex-1 aspect-video rounded overflow-hidden border-2 border-black transition-all">
          <img 
            src="/video-thumbnail-1.webp" 
            alt="Video 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayIcon className="w-8 h-8 text-white/80" />
          </div>
        </button>
        
        <button className="relative flex-1 aspect-video rounded overflow-hidden border-2 border-gray-300 hover:border-gray-400 transition-all">
          <img 
            src="/video-thumbnail-2.webp" 
            alt="Video 2"
            className="w-full h-full object-cover"
          />
        </button>
        
        <button className="relative flex-1 aspect-video rounded overflow-hidden border-2 border-gray-300 hover:border-gray-400 transition-all">
          <img 
            src="/video-thumbnail-3.webp" 
            alt="Video 3"
            className="w-full h-full object-cover"
          />
        </button>
        
        <button className="relative flex-1 aspect-video rounded overflow-hidden border-2 border-gray-300 hover:border-gray-400 transition-all">
          <img 
            src="/video-thumbnail-4.webp" 
            alt="Video 4"
            className="w-full h-full object-cover"
          />
        </button>
        
        <button className="flex-1 aspect-video rounded border-2 border-dashed border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors bg-white">
          <span className="text-2xl text-gray-400">+</span>
        </button>
      </div>
    </div>
  );
}
