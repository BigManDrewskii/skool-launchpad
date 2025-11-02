import FAQ from "./FAQ";

export default function CommunitySidebar() {
  const stats = [
    { label: "Brands Shipped", value: "100+" },
    { label: "Years in Design", value: "7+" },
    { label: "Designers Taught", value: "500+" },
  ];

  return (
    <div className="space-y-4">
      {/* Community Card */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm transition-colors">
        {/* Banner - Solid Black Background */}
        <div className="h-24 bg-black flex items-center justify-center">
          <div className="flex items-center gap-3">
            <img
              src="/studio-drewskii-icon.png"
              alt="Studio Drewskii"
              className="w-12 h-12 rounded-full"
            />
            <div className="text-white font-bold text-2xl tracking-wider">
              STUDIO DREWSKII
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Title & URL */}
          <div className="space-y-1">
            <h3 className="font-bold text-card-foreground text-lg">
              Studio Drewskii
            </h3>
            <p className="text-sm text-muted-foreground">
              studiodrewskii.com
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-card-foreground/80 leading-relaxed">
            Premium brand design, fast. Complete brand systems delivered in 7 days without compromising quality.
          </p>

          {/* Stats - Improved Layout */}
          <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-bold text-card-foreground text-xl mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* About Creator - Refined Typography */}
          <div className="space-y-2">
            <h4 className="font-semibold text-card-foreground text-sm">
              Andreas Michailidis (Drewskii)
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Design Lead at Game7. Built 100+ brand systems. Teaching 500+ designers in AI Design Club.
            </p>
          </div>

          {/* CTA Button */}
          <button className="w-full py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors text-sm">
            BOOK A STRATEGY CALL
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
