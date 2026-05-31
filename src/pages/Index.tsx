import GradientBlinds from "@/components/GradientBlinds"
import Navbar from "@/components/Navbar"
import Icon from "@/components/ui/icon"
import HeroAboutFeaturesPricing from "@/components/sections/HeroAboutFeaturesPricing"
import BlogSection from "@/components/sections/BlogSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060d1f]">
      <Navbar />

      {/* Animated Background */}
      <div className="fixed inset-0 w-full h-full flex items-center justify-center">
        <GradientBlinds
          gradientColors={["#060d1f", "#0a2240", "#0d4f3c", "#1a6b52"]}
          angle={15}
          noise={0.25}
          blindCount={13}
          blindMinWidth={50}
          spotlightRadius={0.38}
          spotlightSoftness={1.6}
          spotlightOpacity={0.42}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="overlay"
        />
      </div>

      <div className="relative z-10">
        <HeroAboutFeaturesPricing />
        <BlogSection />
        <ContactSection />

        {/* ─── Footer ─── */}
        <footer className="border-t border-white/10 py-10 px-5 sm:px-20">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                <Icon name="Wallet" size={16} className="text-white" />
              </div>
              <span className="text-white font-semibold">FinancePal</span>
            </div>
            <p className="text-white/40 text-sm">© 2026 FinancePal. Все права защищены.</p>
            <div className="flex items-center gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-white/70 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white/70 transition-colors">Условия</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
