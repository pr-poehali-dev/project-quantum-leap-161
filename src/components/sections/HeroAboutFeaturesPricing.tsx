import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Wallet",
    title: "Учёт расходов",
    description: "Автоматически фиксируйте все траты по категориям. Никаких таблиц — просто добавьте транзакцию и смотрите, куда уходят деньги.",
  },
  {
    icon: "TrendingUp",
    title: "Финансовые цели",
    description: "Ставьте цели — накопить на отпуск, телефон или квартиру. FinancePal покажет, сколько откладывать каждый месяц.",
  },
  {
    icon: "Bell",
    title: "Умные напоминания",
    description: "Не пропустите оплату счётов. Получайте уведомления о платежах, превышении бюджета и достижении целей.",
  },
  {
    icon: "BarChart3",
    title: "Аналитика и отчёты",
    description: "Наглядные графики доходов и расходов. Понимайте финансовые паттерны и принимайте взвешенные решения.",
  },
  {
    icon: "Lightbulb",
    title: "Финансовые советы",
    description: "Персональные рекомендации на основе ваших данных. Узнайте, как оптимизировать бюджет и начать копить.",
  },
  {
    icon: "Shield",
    title: "Безопасность данных",
    description: "Все данные зашифрованы. Ваша финансовая информация в безопасности — мы используем банковский уровень защиты.",
  },
]

const plans = [
  {
    name: "Старт",
    price: "Бесплатно",
    period: "",
    description: "Идеально для начала",
    features: [
      "До 50 транзакций в месяц",
      "2 финансовые цели",
      "Базовая аналитика",
      "Мобильное приложение",
    ],
    cta: "Начать бесплатно",
    highlight: false,
  },
  {
    name: "Про",
    price: "299 ₽",
    period: "/ месяц",
    description: "Для серьёзного контроля финансов",
    features: [
      "Неограниченные транзакции",
      "Неограниченные цели",
      "Расширенная аналитика",
      "Умные напоминания",
      "Финансовые советы ИИ",
      "Приоритетная поддержка",
    ],
    cta: "Попробовать 14 дней бесплатно",
    highlight: true,
  },
  {
    name: "Семья",
    price: "499 ₽",
    period: "/ месяц",
    description: "Для совместного управления бюджетом",
    features: [
      "Всё из тарифа Про",
      "До 5 участников",
      "Общий семейный бюджет",
      "Раздельные и совместные счета",
      "Отчёты для всей семьи",
    ],
    cta: "Выбрать тариф",
    highlight: false,
  },
]

export default function HeroAboutFeaturesPricing() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="flex min-h-screen items-center justify-center px-5 sm:px-20">
        <div className="flex max-w-4xl flex-col items-center gap-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300">
            <Icon name="Sparkles" size={14} />
            Умный финансовый помощник
          </div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl text-balance drop-shadow-2xl">
            Управляй деньгами
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              легко и уверенно
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl text-pretty drop-shadow-lg">
            FinancePal помогает молодым людям взять финансы под контроль — вести расходы, копить на мечты и получать советы по управлению бюджетом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:opacity-90 shadow-2xl shadow-emerald-900/40"
            >
              Начать бесплатно
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:border-white/40 shadow-xl"
            >
              Узнать больше
              <Icon name="ArrowRight" size={20} />
            </a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-4 text-white/60 text-sm">
            <div className="flex items-center gap-1.5">
              <Icon name="Check" size={16} className="text-emerald-400" />
              Бесплатный тариф навсегда
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="Check" size={16} className="text-emerald-400" />
              Без кредитной карты
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="Check" size={16} className="text-emerald-400" />
              Настройка за 2 минуты
            </div>
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-24 px-5 sm:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm text-blue-300 mb-6">
                <Icon name="Info" size={14} />
                О сервисе
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Финансы не должны быть сложными
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Мы создали FinancePal для тех, кто только начинает разбираться в личных финансах. Никакой сложной терминологии, никаких громоздких таблиц.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Просто добавляйте доходы и расходы, ставьте цели — и мы поможем вам прийти к финансовой свободе. Доступно, понятно и без воды.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50 000+", label: "Пользователей" },
                { value: "4.9 ★", label: "Рейтинг в App Store" },
                { value: "1 млрд ₽", label: "Сэкономлено клиентами" },
                { value: "2 мин", label: "Среднее время настройки" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="py-24 px-5 sm:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300 mb-6">
              <Icon name="Zap" size={14} />
              Возможности
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Всё для финансового порядка
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Инструменты, которые реально помогают контролировать деньги — без лишней сложности.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-emerald-400/30 hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-emerald-500/30 transition-all">
                  <Icon name={f.icon} size={22} className="text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="py-24 px-5 sm:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm text-blue-300 mb-6">
              <Icon name="Tag" size={14} />
              Тарифы
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Выберите свой план
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Начните бесплатно, а когда будете готовы — переходите на расширенные возможности.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlight
                    ? "border-2 border-emerald-400/50 bg-gradient-to-b from-emerald-900/30 to-blue-900/20"
                    : "border border-white/10 bg-white/5 backdrop-blur-sm"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 px-4 py-1 text-xs font-semibold text-white whitespace-nowrap">
                    Популярный
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-white/50 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-white/50 mb-1">{plan.period}</span>}
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-white/70 text-sm">
                      <Icon name="Check" size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`w-full text-center rounded-full py-3 font-semibold transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:opacity-90 shadow-lg shadow-emerald-900/30"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
