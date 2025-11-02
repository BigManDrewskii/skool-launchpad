import Navigation from "@/components/Navigation";
import VideoSection from "@/components/VideoSection";
import MetaInfo from "@/components/MetaInfo";
import DescriptionSection from "@/components/DescriptionSection";
import CommunitySidebar from "@/components/CommunitySidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">The Skool Launchpad</h1>

            {/* Video Section */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <VideoSection />
            </div>

            {/* Meta Information */}
            <MetaInfo />

            {/* Description */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <DescriptionSection />
            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:col-span-1">
            <CommunitySidebar />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 bg-white">
        <div className="container py-6">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Privacy and terms
          </a>
        </div>
      </footer>
    </div>
  );
}
