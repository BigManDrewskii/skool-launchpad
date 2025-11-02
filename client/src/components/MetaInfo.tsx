import { GlobeAltIcon, UserGroupIcon, TagIcon } from "@heroicons/react/24/outline";

export default function MetaInfo() {
  return (
    <div className="flex items-center gap-5 flex-wrap text-sm">
      {/* Public Badge */}
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <GlobeAltIcon className="w-4 h-4" />
        <span>Public</span>
      </div>

      {/* Members Badge */}
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <UserGroupIcon className="w-4 h-4" />
        <span>552 members</span>
      </div>

      {/* Free Badge */}
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <TagIcon className="w-4 h-4" />
        <span>Free</span>
      </div>

      {/* Creator */}
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xs font-semibold">
          A
        </div>
        <span className="text-muted-foreground">
          By <span className="text-foreground">Andreas M</span>
        </span>
      </div>
    </div>
  );
}
