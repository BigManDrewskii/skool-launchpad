import Navigation from "@/components/Navigation";
import VideoSection from "@/components/VideoSection";
import MetaInfo from "@/components/MetaInfo";
import DescriptionSection from "@/components/DescriptionSection";
import CommunitySidebar from "@/components/CommunitySidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Navigation />

      <main className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Page Title with Headline */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">The Skool Launchpad</h1>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                LAUNCH YOUR PROFESSIONAL SKOOL COMMUNITY IN 10 DAYS.
              </p>
            </div>

            {/* Video Section */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm transition-colors">
              <VideoSection />
            </div>

            {/* Meta Information */}
            <MetaInfo />

            {/* Description */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm transition-colors">
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
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="container py-8">
          <div className="flex items-center justify-between">
            {/* Privacy Link */}
            <a
              href="#"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Privacy and terms
            </a>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/andreasmichailidis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@studiodrewskii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a
                href="https://t.me/drewskii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href="https://www.skool.com/ai-design-club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Skool"
              >
                <svg className="w-5 h-5" viewBox="0 0 121 94" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44.2888 41.916C43.8349 42.6229 43.3603 43.1427 42.8652 43.4754C42.4113 43.7665 41.7717 43.912 40.9464 43.912C40.1212 43.912 39.2753 43.7041 38.4087 43.2883C37.5422 42.8724 36.5725 42.4358 35.4997 41.9784C34.4268 41.4794 33.1889 41.0219 31.786 40.6061C30.4243 40.1903 28.8356 39.9823 27.02 39.9823C24.2554 39.9823 22.1097 40.5645 20.583 41.7289C19.0562 42.8516 18.2928 44.3486 18.2928 46.2199C18.2928 47.509 18.7261 48.5902 19.5926 49.4635C20.4592 50.3367 21.5939 51.106 22.9969 51.7714C24.4411 52.3951 26.071 52.9981 27.8866 53.5802C29.7022 54.1208 31.559 54.7238 33.4571 55.3891C35.3965 56.0545 37.274 56.8238 39.0896 57.697C40.9052 58.5703 42.5144 59.6723 43.9174 61.003C45.3616 62.2921 46.517 63.8722 47.3835 65.7435C48.25 67.5732 48.6833 69.7979 48.6833 72.4177C48.6833 75.5365 48.1056 78.4266 46.9502 81.0879C45.8361 83.7077 44.1856 85.974 41.9986 87.8869C39.8117 89.7997 37.0883 91.2968 33.8285 92.3779C30.5687 93.4591 26.8137 93.9997 22.5636 93.9997C20.3766 93.9997 18.2103 93.7918 16.0646 93.3759C13.9189 93.0017 11.8764 92.4611 9.93701 91.7542C7.99764 91.0057 6.18205 90.1532 4.49025 89.1968C2.79845 88.2403 1.3336 87.2007 0.0957031 86.078L4.05698 79.6533C4.51088 78.9048 5.06794 78.3226 5.72815 77.9068C6.42963 77.4909 7.31679 77.283 8.38964 77.283C9.42122 77.283 10.3703 77.5533 11.2368 78.0939C12.1033 78.5929 13.073 79.1543 14.1459 79.778C15.2187 80.3602 16.4773 80.9216 17.9215 81.4622C19.407 81.9612 21.2432 82.2107 23.4301 82.2107C25.0807 82.2107 26.5043 82.0236 27.7009 81.6493C28.8975 81.2751 29.8672 80.7761 30.61 80.1523C31.3527 79.487 31.8891 78.7592 32.2192 77.9691C32.5906 77.1375 32.7763 76.285 32.7763 75.4117C32.7763 73.9979 32.3224 72.8543 31.4146 71.9811C30.5481 71.0662 29.3927 70.2761 27.9485 69.6108C26.5455 68.9455 24.9156 68.3425 23.0588 67.8019C21.2019 67.2613 19.3038 66.6584 17.3644 65.993C15.4663 65.3277 13.5888 64.5376 11.732 63.6227C9.91638 62.7079 8.28648 61.5643 6.84226 60.1921C5.43931 58.7782 4.28393 57.0525 3.37614 55.0149C2.50961 52.9773 2.07634 50.503 2.07634 47.5922C2.07634 44.9308 2.59214 42.415 3.62372 40.0447C4.6553 37.6329 6.20268 35.5121 8.26585 33.6824C10.329 31.8527 12.8873 30.3973 15.9408 29.3161C19.0356 28.2349 22.6049 27.6943 26.6487 27.6943C31.1876 27.6943 35.314 28.4428 39.0277 29.9399C42.7414 31.4369 45.7949 33.3913 48.1881 35.8032L44.2888 41.916Z" />
                  <path d="M76.46 0V52.7698H79.3072C80.38 52.7698 81.2259 52.6243 81.8449 52.3332C82.4638 52.0005 83.0828 51.4184 83.7017 50.5867L97.8138 31.6245C98.5152 30.6681 99.2993 29.9403 100.166 29.4413C101.074 28.9423 102.208 28.6928 103.57 28.6928H119.168L100.847 52.1461C99.4024 54.1005 97.7312 55.6391 95.8331 56.7619C96.7822 57.4272 97.6075 58.1965 98.3089 59.0698C99.0104 59.943 99.6913 60.9203 100.351 62.0014L120.096 93.0022H104.746C103.426 93.0022 102.291 92.7942 101.342 92.3784C100.393 91.921 99.6087 91.1309 98.9898 90.0081L84.6301 66.3677C84.0524 65.3697 83.4541 64.7252 82.8352 64.4341C82.2162 64.143 81.2878 63.9975 80.0499 63.9975H76.46V93.0022H59.377V0H76.46Z" />
                </svg>
              </a>
              <a
                href="https://contra.com/drewskii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Contra"
              >
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.1109 15.2909H17.2905C17.0552 15.2909 17.0552 15.1733 17.0552 15.0557V0.352867C17.0552 0.117622 17.1729 0 17.2905 0H17.6434L18.1138 0.235245C19.8782 7.17496 25.2888 12.468 32.2285 14.3499C32.4638 14.3499 32.4638 14.4675 32.4638 14.5852V15.0557C32.4638 15.2909 32.3461 15.2909 32.1109 15.2909Z" />
                  <path d="M17.8786 32.4638H17.4081C17.1729 32.4638 17.1729 32.3461 17.1729 32.1109V17.4081L17.4081 17.0552H32.1109C32.3461 17.0552 32.4638 17.2905 32.4638 17.4081V17.761L32.2285 18.1138C25.2888 19.8782 19.9958 25.2888 18.1138 32.2285L17.8786 32.4638Z" />
                  <path d="M15.0557 32.4638H14.7028L14.3499 32.2285C12.5856 25.2888 7.17496 19.8782 0.235245 18.1138C0 18.1138 0 17.9962 0 17.8786V17.4081C0 17.2905 0.117622 17.0552 0.352867 17.0552H15.0557C15.2909 17.0552 15.2909 17.2905 15.2909 17.4081V32.1109C15.2909 32.3461 15.1733 32.4638 15.0557 32.4638Z" />
                  <path d="M15.0557 15.2909H0.352867C0.117622 15.2909 0 15.1733 0 15.0557V14.7028L0.235245 14.3499C7.05734 12.5856 12.468 7.05734 14.3499 0.235245C14.3499 0 14.4675 0 14.5852 0H15.0557C15.2909 0 15.2909 0.117622 15.2909 0.352867V15.0557C15.2909 15.2909 15.1733 15.2909 15.0557 15.2909Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
