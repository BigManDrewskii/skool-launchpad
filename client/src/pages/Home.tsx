import Navigation from "@/components/Navigation";
import VideoSection from "@/components/VideoSection";
import MetaInfo from "@/components/MetaInfo";
import DescriptionSection from "@/components/DescriptionSection";
import CommunitySidebar from "@/components/CommunitySidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Page Title */}
            <h1 className="text-xl font-bold text-foreground">AI Design Club</h1>

            {/* Video Section */}
            <div className="bg-card border border-border rounded-lg p-5">
              <VideoSection />
            </div>

            {/* Meta Information */}
            <MetaInfo />

            {/* Description */}
            <div className="bg-card border border-border rounded-lg p-6">
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
      <footer className="border-t border-border mt-16">
        <div className="container py-6">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Privacy and terms
          </a>
        </div>
      </footer>
    </div>
  );
}
