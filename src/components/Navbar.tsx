import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full backdrop-blur-md md:flex border transition-all duration-300 ${
          isScrolled ? "max-w-4xl px-2 border-white/20 shadow-lg" : "max-w-6xl px-4 border-transparent shadow-none"
        } py-2`}
        style={{
          background: isScrolled ? "rgba(6, 13, 31, 0.85)" : "transparent",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <a className={`z-50 flex items-center gap-2 transition-all duration-300 ${isScrolled ? "ml-4" : ""}`} href="/">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
            <Icon name="Wallet" size={16} className="text-white" />
          </div>
          <span className="text-white font-semibold text-lg">FinancePal</span>
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium md:flex md:space-x-2">
          <a className="px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer" href="#about">О сервисе</a>
          <a className="px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer" href="#features">Функции</a>
          <a className="px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer" href="#pricing">Тарифы</a>
          <a className="px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer" href="#blog">Блог</a>
          <a className="px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer" href="#contact">Контакты</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="rounded-full font-medium px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:opacity-90 transition-all"
          >
            Начать бесплатно
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`fixed top-4 z-[9999] flex w-auto flex-row items-center justify-between rounded-full backdrop-blur-md md:hidden px-4 py-3 border transition-all duration-300 ${
          isScrolled ? "border-white/20 shadow-lg" : "border-transparent shadow-none"
        }`}
        style={{
          background: isScrolled ? "rgba(6, 13, 31, 0.85)" : "transparent",
          left: "1rem",
          right: "1rem",
          width: "calc(100% - 2rem)",
        }}
      >
        <a className="flex items-center gap-2" href="/">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
            <Icon name="Wallet" size={16} className="text-white" />
          </div>
          <span className="text-white font-semibold">FinancePal</span>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 transition-colors hover:bg-white/10"
          aria-label="Toggle menu"
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div
            className="absolute top-24 left-4 right-4 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6"
            style={{ background: "rgba(6, 13, 31, 0.95)" }}
          >
            <nav className="flex flex-col space-y-2">
              {[
                { href: "#about", label: "О сервисе" },
                { href: "#features", label: "Функции" },
                { href: "#pricing", label: "Тарифы" },
                { href: "#blog", label: "Блог" },
                { href: "#contact", label: "Контакты" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-white/20 pt-4 mt-2">
                <a
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-lg font-bold text-center rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white"
                >
                  Начать бесплатно
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}