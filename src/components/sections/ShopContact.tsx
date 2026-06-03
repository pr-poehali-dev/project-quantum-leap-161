import { useRef, useEffect } from "react"
import Icon from "@/components/ui/icon"

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

const features = [
  { icon: "CreditCard", label: "Оплата картой" },
  { icon: "Car", label: "Парковка" },
  { icon: "Gift", label: "Поздравительные открытки" },
  { icon: "Heart", label: "Свадебная флористика" },
  { icon: "Truck", label: "Доставка" },
  { icon: "ShoppingBag", label: "Самовывоз" },
  { icon: "Star", label: "Мягкие игрушки" },
]

export default function ShopContact() {
  const leftRef = useReveal()
  const rightRef = useReveal()

  return (
    <section id="contact" className="py-24 px-6 sm:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div ref={leftRef} className="reveal-left">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Контакты</p>
            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-10">
              Приходите<br />или звоните
            </h2>

            <div className="space-y-6">
              <a
                href="tel:+79094394343"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <Icon name="Phone" size={16} className="text-white/50 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Телефон</p>
                  <p className="text-white text-lg font-light">+7 (909) 439-43-43</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center">
                  <Icon name="MapPin" size={16} className="text-white/50" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Адрес</p>
                  <p className="text-white text-base font-light">ул. Максима Горького, 161<br />Ростов-на-Дону</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Удобства</p>
              <div className="flex flex-wrap gap-2">
                {features.map((f) => (
                  <div
                    key={f.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50"
                  >
                    <Icon name={f.icon} size={12} />
                    {f.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — map */}
          <div ref={rightRef} className="reveal reveal-scale rounded-2xl border border-white/5 bg-white/[0.03] overflow-hidden min-h-80 flex flex-col">
            <iframe
              title="Шиповник на карте"
              src="https://yandex.ru/map-widget/v1/?ll=39.714890%2C47.229466&z=16&pt=39.714890%2C47.229466,pm2rdm"
              width="100%"
              height="100%"
              className="flex-1 min-h-80 grayscale opacity-70"
              style={{ border: 0, filter: "grayscale(1) invert(0.85) brightness(0.7)" }}
              allowFullScreen
            />
            <div className="p-4 border-t border-white/5">
              <p className="text-white/40 text-xs">Магазин цветов «Шиповник» · Ростов-на-Дону</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}