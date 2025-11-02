import { GlobeAltIcon, UserGroupIcon, TagIcon } from "@heroicons/react/24/outline";

export default function MetaInfo() {
  return (
    <div className="flex items-center gap-5 flex-wrap text-sm">
      {/* Public Badge */}
      <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
        <GlobeAltIcon className="w-4 h-4" />
        <span>Public</span>
      </div>

      {/* Spots Badge */}
      <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
        <UserGroupIcon className="w-4 h-4" />
        <span>Limited spots</span>
      </div>

      {/* Price Badge */}
      <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
        <TagIcon className="w-4 h-4" />
        <span>$2,997</span>
      </div>

      {/* Creator - Studio Drewskii */}
      <div className="flex items-center gap-2">
        <img
          src="/studio-drewskii-icon.png"
          alt="Studio Drewskii"
          className="w-5 h-5 rounded-full"
        />
        <span className="text-gray-600 dark:text-gray-400">
          By <span className="text-gray-900 dark:text-white font-medium">Studio Drewskii</span>
        </span>
      </div>
    </div>
  );
}
