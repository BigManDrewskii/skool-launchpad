import { PlayIcon, BoltIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface VideoThumbnail {
  id: number;
  thumbnail: string;
  title: string;
}

export default function VideoSection() {
  const videos: VideoThumbnail[] = [
    { id: 1, thumbnail: "/video-thumbnail-1.webp", title: "Video 1" },
    { id: 2, thumbnail: "/video-thumbnail-2.webp", title: "Video 2" },
    { id: 3, thumbnail: "/video-thumbnail-3.webp", title: "Video 3" },
    { id: 4, thumbnail: "/video-thumbnail-4.webp", title: "Video 4" },
  ];

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const activeVideo = videos[activeVideoIndex];

  return (
    <div className="space-y-3">
      {/* Main Video Player */}
      <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
        <img 
          src={activeVideo.thumbnail} 
          alt={activeVideo.title}
          className="w-full h-full object-cover"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 rounded-full bg-white/90 dark:bg-white/80 hover:bg-white dark:hover:bg-white flex items-center justify-center transition-all hover:scale-105">
            <PlayIcon className="w-8 h-8 text-gray-900 dark:text-gray-900 ml-1" />
          </button>
        </div>

        {/* Video Stats Overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 dark:bg-black/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-3">
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

      {/* Video Thumbnails Carousel */}
      <div className="flex gap-2">
        {videos.map((video, index) => (
          <button
            key={video.id}
            onClick={() => setActiveVideoIndex(index)}
            className={`relative flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
              index === activeVideoIndex
                ? "border-black dark:border-white"
                : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500"
            }`}
          >
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-full object-cover"
            />
            {index === activeVideoIndex && (
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayIcon className="w-8 h-8 text-white/80 drop-shadow-lg" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
