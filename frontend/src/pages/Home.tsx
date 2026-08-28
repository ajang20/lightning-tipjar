import { Zap, ArrowRight} from "lucide-react";



export default function LightningTipLanding() {
  return (
    <div className="min-h-screen bg-[#08070C] text-[#F5F3ED] font-sans antialiased selection:bg-amber-500/30">
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @font-face { font-display: swap; }
      `}</style>

      {/* ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-amber-500/10 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[120px]" />
      </div>

      {/* hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/5 rounded-full px-4 py-1.5 text-xl font-medium text-amber-300 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          Built on Bitcoin Lightning · Rwanda Mobile Money
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.02]">
          Support Rwandan
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Creators
          </span>{" "}
          with Lightning
        </h1>

        <p className="mt-6 text-2xl text-white/50 max-w-xl mx-auto leading-relaxed">
          Tip your favorite creators in satoshis. They receive RWF directly to
          their MTN or Airtel Mobile Money — instantly.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="group flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-2xl pl-6 pr-5 py-3 hover:brightness-110 transition-all">
            <Zap className="w-4 h-4" strokeWidth={2.5} />
            Explore Creators
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="border border-white/15 font-medium rounded-2xl px-6 py-3 hover:bg-white/5 transition-colors">
            Create Your Tip Jar
          </button>
        </div>
      </section>
    </div>
  );
}