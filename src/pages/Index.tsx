import GradientBlinds from "@/components/GradientBlinds"
import Navbar from "@/components/Navbar"
import Icon from "@/components/ui/icon"
import { useState, useEffect } from "react"

const BLOG_URL = "https://functions.poehali.dev/7576c8e0-552b-43fe-a95d-f67f951bbe98"
const CONTACT_URL = "https://functions.poehali.dev/6d97f166-1267-49d9-9973-c01d4c8cb0a0"

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

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string
  read_time: number
  created_at: string
}

const categoryColors: Record<string, string> = {
  "Бюджет": "border-blue-400/30 text-blue-300 bg-blue-500/10",
  "Советы": "border-emerald-400/30 text-emerald-300 bg-emerald-500/10",
  "Накопления": "border-purple-400/30 text-purple-300 bg-purple-500/10",
  "Инвестиции": "border-orange-400/30 text-orange-300 bg-orange-500/10",
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
}

export default function Index() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState("")

  const [posts, setPosts] = useState<BlogPost[]>([])
  const [blogLoading, setBlogLoading] = useState(true)
  const [expandedPost, setExpandedPost] = useState<number | null>(null)
  const [postContent, setPostContent] = useState<Record<number, string>>({})

  useEffect(() => {
    fetch(BLOG_URL)
      .then((r) => r.json())
      .then((data) => setPosts(data))
      .catch(() => setPosts([]))
      .finally(() => setBlogLoading(false))
  }, [])

  const handleReadMore = async (post: BlogPost) => {
    if (expandedPost === post.id) {
      setExpandedPost(null)
      return
    }
    if (!postContent[post.id]) {
      const res = await fetch(`${BLOG_URL}?slug=${post.slug}`)
      const data = await res.json()
      setPostContent((prev) => ({ ...prev, [post.id]: data.content }))
    }
    setExpandedPost(post.id)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setFormError("")
    try {
      const res = await fetch(CONTACT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setFormError(data.error || "Ошибка. Попробуйте ещё раз.")
      }
    } catch {
      setFormError("Ошибка сети. Попробуйте ещё раз.")
    } finally {
      setSubmitting(false)
    }
  }

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

        {/* ─── Blog ─── */}
        <section id="blog" className="py-24 px-5 sm:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300 mb-6">
                <Icon name="BookOpen" size={14} />
                Блог
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Статьи о финансах
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                Простые и понятные материалы о том, как управлять деньгами грамотно.
              </p>
            </div>

            {blogLoading ? (
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 animate-pulse">
                    <div className="h-4 bg-white/10 rounded mb-3 w-1/3" />
                    <div className="h-6 bg-white/10 rounded mb-3" />
                    <div className="h-4 bg-white/10 rounded mb-2 w-full" />
                    <div className="h-4 bg-white/10 rounded w-2/3" />
                  </div>
                ))}
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center text-white/50 py-12">Статьи скоро появятся</div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {posts.map((post) => {
                  const catStyle = categoryColors[post.category] || "border-white/20 text-white/60 bg-white/5"
                  const isOpen = expandedPost === post.id
                  return (
                    <div
                      key={post.id}
                      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col transition-all hover:border-white/20"
                    >
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${catStyle}`}>
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-white/40 text-xs">
                            <Icon name="Clock" size={12} />
                            {post.read_time} мин
                          </span>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-3 leading-snug">{post.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed flex-1">{post.excerpt}</p>

                        {isOpen && postContent[post.id] && (
                          <div className="mt-4 pt-4 border-t border-white/10 text-white/70 text-sm leading-relaxed">
                            {postContent[post.id]}
                          </div>
                        )}

                        <div className="mt-5 flex items-center justify-between">
                          <span className="text-white/30 text-xs">{formatDate(post.created_at)}</span>
                          <button
                            onClick={() => handleReadMore(post)}
                            className="flex items-center gap-1.5 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors"
                          >
                            {isOpen ? "Свернуть" : "Читать"}
                            <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section id="contact" className="py-24 px-5 sm:px-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/70 mb-6">
                <Icon name="Mail" size={14} />
                Контакты
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Есть вопросы?
              </h2>
              <p className="text-white/60 text-lg">
                Напишите нам — ответим в течение 24 часов.
              </p>
            </div>

            {submitted ? (
              <div className="text-center rounded-2xl border border-emerald-400/30 bg-emerald-900/20 p-12">
                <Icon name="CheckCircle" size={48} className="text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Сообщение отправлено!</h3>
                <p className="text-white/60">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/70 text-sm font-medium">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Алексей"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/70 text-sm font-medium">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/70 text-sm font-medium">Сообщение</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите, чем мы можем помочь..."
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400/50 transition-colors resize-none"
                  />
                </div>
                {formError && (
                  <p className="text-red-400 text-sm">{formError}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="self-start rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-3 font-semibold text-white hover:opacity-90 transition-all shadow-lg shadow-emerald-900/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {submitting && <Icon name="Loader2" size={16} className="animate-spin" />}
                  {submitting ? "Отправляю..." : "Отправить сообщение"}
                </button>
              </form>
            )}

            <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
              {[
                { icon: "Mail", label: "Email", value: "hello@financepal.ru" },
                { icon: "MessageCircle", label: "Telegram", value: "@financepal" },
                { icon: "MapPin", label: "Офис", value: "Москва, Россия" },
              ].map((c) => (
                <div key={c.label} className="rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col items-center gap-2">
                  <Icon name={c.icon} size={20} className="text-emerald-400" />
                  <div className="text-white/40 text-xs uppercase tracking-wider">{c.label}</div>
                  <div className="text-white text-sm font-medium">{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
