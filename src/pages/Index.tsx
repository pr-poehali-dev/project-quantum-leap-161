import GradientBlinds from "@/components/GradientBlinds"
import ShopNavbar from "@/components/ShopNavbar"
import Icon from "@/components/ui/icon"
import ShopHero from "@/components/sections/ShopHero"
import ShopCatalog from "@/components/sections/ShopCatalog"
import ShopReviews from "@/components/sections/ShopReviews"
import ShopContact from "@/components/sections/ShopContact"

export default function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <ShopNavbar />

      {/* Background */}
      <div className="fixed inset-0 w-full h-full">
        <GradientBlinds
          gradientColors={["#0a0a0a", "#1a0a0d", "#2d0d18", "#1a0a0d"]}
          angle={20}
          noise={0.18}
          blindCount={10}
          blindMinWidth={80}
          spotlightRadius={0.45}
          spotlightSoftness={2}
          spotlightOpacity={0.3}
          mouseDampening={0.08}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="overlay"
        />
      </div>

      <div className="relative z-10">
        <ShopHero />
        <ShopCatalog />
        <ShopReviews />
        <ShopContact />

        {/* Footer */}
        <footer className="border-t border-white/5 py-8 px-6 sm:px-16">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-rose-400 flex items-center justify-center">
                <Icon name="Flower2" size={12} className="text-white" />
              </div>
              <span className="text-white/60 text-sm">Шиповник</span>
            </div>
            <p className="text-white/25 text-xs">© 2026 · Магазин цветов «Шиповник» · Ростов-на-Дону</p>
            <a href="tel:+79094394343" className="text-white/40 text-sm hover:text-white/70 transition-colors">
              +7 (909) 439-43-43
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}
