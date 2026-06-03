import { useRef, useEffect, type RefObject } from "react"
import Icon from "@/components/ui/icon"

const products = [
  {
    name: "Роза Explorer",
    description: "Импортного производства. Доступна к заказу в любом количестве.",
    price: 350,
    unit: "шт.",
    tag: "Импорт",
    color: "Красная",
  },
  {
    name: "Роза Secret Garden",
    description: "Импортного производства. Нежный пастельный оттенок.",
    price: 350,
    unit: "шт.",
    tag: "Импорт",
    color: "Пастель",
  },
  {
    name: "Роза Red Naomi",
    description: "Ароматная роза от российских производителей.",
    price: 250,
    unit: "шт.",
    tag: "Россия",
    color: "Алая",
  },
  {
    name: "Роза Candlelight",
    description: "Импортного производства. Тёплый кремово-жёлтый оттенок.",
    price: 350,
    unit: "шт.",
    tag: "Импорт",
    color: "Кремовая",
  },
  {
    name: "Кустовая роза Софи",
    description: "Российского производства. Пышная кустовая роза.",
    price: 700,
    unit: "шт.",
    tag: "Россия",
    color: "Розовая",
  },
  {
    name: "Кустовая роза Misty Bubbles",
    description: "Воздушная кустовая роза нежных оттенков.",
    price: 800,
    unit: "шт.",
    tag: "Импорт",
    color: "Сиреневая",
  },
  {
    name: "Кустовая роза Silva Pink",
    description: "Пышная кустовая роза розового оттенка.",
    price: 800,
    unit: "шт.",
    tag: "Импорт",
    color: "Розовая",
  },
  {
    name: "Кустовая хризантема",
    description: "Доступна к заказу в любом количестве.",
    price: 300,
    unit: "шт.",
    tag: "Сезонная",
    color: "Белая",
  },
]

const tagColors: Record<string, string> = {
  "Импорт": "bg-violet-50/10 text-violet-300 border-violet-300/20",
  "Россия": "bg-emerald-50/10 text-emerald-300 border-emerald-300/20",
  "Сезонная": "bg-amber-50/10 text-amber-300 border-amber-300/20",
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function ShopCatalog() {
  const headRef = useReveal()
  const gridRef = useReveal()
  const bannerRef = useReveal()

  return (
    <section id="catalog" className="py-24 px-6 sm:px-16">
      <div className="max-w-6xl mx-auto">
        <div ref={headRef} className="reveal mb-14">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Каталог</p>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight">
            Наши цветы
          </h2>
          <p className="text-white/50 mt-3 text-base font-light max-w-lg">
            Формат (букет / коробка / корзина), оформление и упаковка — под ваш индивидуальный запрос
          </p>
        </div>

        <div
          ref={gridRef}
          className="stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
        >
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-[#0e0e0e] p-6 flex flex-col gap-4 hover:bg-white/[0.04] transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between gap-2">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs ${tagColors[p.tag]}`}>
                  {p.tag}
                </span>
                <span className="text-white/20 text-xs">{p.color}</span>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-medium text-base leading-snug mb-2 group-hover:text-rose-200 transition-colors duration-300">{p.name}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{p.description}</p>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <span className="text-2xl font-light text-white">{p.price} ₽</span>
                  <span className="text-white/40 text-sm ml-1">/ {p.unit}</span>
                </div>
                <a
                  href="tel:+79094394343"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <Icon name="Phone" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div ref={bannerRef} className="reveal mt-8 rounded-2xl border border-rose-300/10 bg-rose-50/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-medium mb-1">Нужен особый букет?</p>
            <p className="text-white/50 text-sm font-light">Соберём любую композицию под ваш запрос и бюджет</p>
          </div>
          <a
            href="tel:+79094394343"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-white/90 hover:gap-3 transition-all duration-300 whitespace-nowrap"
          >
            <Icon name="Phone" size={14} />
            Позвонить
          </a>
        </div>
      </div>
    </section>
  )
}
