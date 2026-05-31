import { useState } from "react"
import Icon from "@/components/ui/icon"

const CONTACT_URL = "https://functions.poehali.dev/6d97f166-1267-49d9-9973-c01d4c8cb0a0"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState("")

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
  )
}
