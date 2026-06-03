import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export default function ShopNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop */}
      <header
        className={`fixed top-4 z-[9999] mx-auto hidden w-full md:flex flex-row items-center justify-between rounded-full transition-all duration-300 ${
          isScrolled ? "max-w-4xl px-5 border border-white/10 shadow-xl" : "max-w-6xl px-6 border border-transparent"
        } py-3`}
        style={{
          background: isScrolled ? "rgba(10,10,10,0.85)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-rose-400 flex items-center justify-center">
            <Icon name="Flower2" size={14} className="text-white" />
          </div>
          <span className="text-white font-medium tracking-wide">Шиповник</span>
        </a>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <nav className="flex gap-1 pointer-events-auto">
            {[
              { href: "#catalog", label: "Каталог" },
              { href: "#reviews", label: "Отзывы" },
              { href: "#contact", label: "Контакты" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <a
          href="tel:+79094394343"
          className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/30 transition-all"
        >
          <Icon name="Phone" size={13} />
          Позвонить
        </a>
      </header>

      {/* Mobile */}
      <header
        className={`fixed top-4 z-[9999] flex md:hidden flex-row items-center justify-between rounded-full px-4 py-3 transition-all duration-300 border ${
          isScrolled ? "border-white/10 shadow-xl" : "border-transparent"
        }`}
        style={{
          background: isScrolled ? "rgba(10,10,10,0.85)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          left: "1rem", right: "1rem", width: "calc(100% - 2rem)",
        }}
      >
        <a href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-rose-400 flex items-center justify-center">
            <Icon name="Flower2" size={14} className="text-white" />
          </div>
          <span className="text-white font-medium">Шиповник</span>
        </a>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <div className="flex flex-col gap-1 items-center">
            <span className={`block w-4 h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-4 h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-4 h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </div>
        </button>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm md:hidden">
          <div
            className="absolute top-20 left-4 right-4 rounded-2xl border border-white/10 p-6"
            style={{ background: "rgba(10,10,10,0.95)" }}
          >
            <nav className="flex flex-col gap-1">
              {[
                { href: "#catalog", label: "Каталог" },
                { href: "#reviews", label: "Отзывы" },
                { href: "#contact", label: "Контакты" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-white/10 mt-3 pt-3">
                <a
                  href="tel:+79094394343"
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-neutral-900"
                >
                  <Icon name="Phone" size={15} />
                  +7 (909) 439-43-43
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
