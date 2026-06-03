import Icon from "@/components/ui/icon"

export default function ShopHero() {
  return (
    <section className="relative flex min-h-screen items-end justify-start px-6 sm:px-16 pb-20 pt-32">
      <div className="max-w-2xl">
        <div className="animate-slide-right delay-100 inline-flex items-center gap-2 rounded-full border border-rose-300/40 bg-rose-50/10 px-4 py-1.5 text-sm text-rose-200 mb-8 backdrop-blur-sm">
          <Icon name="MapPin" size={13} />
          Ростов-на-Дону, ул. Максима Горького, 161
        </div>
        <h1 className="animate-fade-up delay-200 text-6xl sm:text-8xl font-light tracking-tight text-white mb-6 leading-none">
          Шиповник
        </h1>
        <p className="animate-fade-up delay-300 text-white/60 text-lg sm:text-xl font-light max-w-md leading-relaxed mb-10">
          Свежие цветы, авторские букеты и флористика под индивидуальный запрос
        </p>
        <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4">
          <a
            href="#catalog"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-neutral-900 hover:bg-white/90 hover:gap-3 transition-all duration-300"
          >
            Смотреть каталог
            <Icon name="ArrowRight" size={18} />
          </a>
          <a
            href="tel:+79094394343"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
          >
            <Icon name="Phone" size={16} />
            +7 (909) 439-43-43
          </a>
        </div>

        {/* scroll hint */}
        <div className="animate-fade-in delay-700 mt-16 flex items-center gap-3 text-white/25 text-xs">
          <div className="w-px h-8 bg-white/15" />
          прокрутите вниз
        </div>
      </div>
    </section>
  )
}
