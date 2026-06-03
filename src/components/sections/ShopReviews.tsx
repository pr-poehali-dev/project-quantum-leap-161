import { useState, useRef, useEffect } from "react"
import Icon from "@/components/ui/icon"

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); observer.unobserve(el) } },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

const reviews = [
  { name: "Алина", level: 9, date: "14 марта", text: "Лучший магазин. Замечательные флористы 🌷" },
  { name: "Лина", level: 2, date: "14 февраля", text: "Отличный цветочный магазин! Покупала цветы для матери, все остались довольны. Хороший персонал, быстро и четко подобрали нужные цветы. Благодарю за букет!" },
  { name: "Ильмир", level: 2, date: "11 февраля", text: "Отличный магазин, быстро обслуживают, красивые букеты и цветы." },
  { name: "Денис Сагитов", level: 2, date: "11 февраля", text: "На днях заглянул сюда и был приятно удивлен. Огромный выбор свежих, ароматных цветов самых разнообразных сортов. Атмосфера в магазине тоже располагает — всё чисто, ухоженно, лёгкий цветочный аромат." },
  { name: "Дарина Суворова", level: 4, date: "6 февраля", text: "Не в первый раз покупаю тут цветы и каждый раз всё на высшем уровне! Цены адекватные, персонал приветливый, всегда помогут с выбором) Спасибо вам ❤️" },
  { name: "Артём Табак", level: 3, date: "28 января", text: "Брал цветы под заказ на день рождения, пришли вовремя, красивый букет из свежих цветов. Стоят долго, всем советую!" },
  { name: "Никита Абдулов", level: 2, date: "26 января", text: "Было день рождение у мамы, не знал где купить букет — друзья посоветовали этот магазин. Всё чисто, отношение к клиентам супер. Рекомендую." },
  { name: "Влад М.", level: 3, date: "26 января", text: "В магазине многообразие — аж глаза разбегаются. Обслуживание на высшем уровне, всегда готовы помочь. Качество хорошее, все букеты отлично и ароматно пахнут." },
  { name: "Дарья Сорокина", level: 2, date: "27 января", text: "Подобрали красивый букет для мамы, цены приемлемые. Буду советовать друзьям!" },
  { name: "Лилия Вершинина", level: 3, date: "7 декабря 2025", text: "Уже много лет на любые праздники покупаю цветы здесь. Всегда очень красиво, цветы свежие и долго стоят! Спасибо замечательным флористам за невероятно красивые букеты! ❤️" },
  { name: "Максим", level: 3, date: "7 декабря 2025", text: "Отличное отношение к клиентам! Помогли выбрать именно то что нужно, видно что реально стараются помочь. Купил розы по лучшей цене — свежие, упаковали, украсили. Идеально!" },
  { name: "Олег А.", level: 8, date: "1 декабря 2025", text: "Флорист Инна подберёт и составит букет под любой запрос и бюджет — настоящий профессионал своего дела!" },
  { name: "Марина Черныш", level: 4, date: "18 ноября 2025", text: "Благодарю за безукоризненную работу. Заказываем на протяжении двух лет цветочные композиции для конференций и мероприятий. Букеты всегда красивые, гармоничные, цветы свежие." },
  { name: "Оксана Артеменко", level: 14, date: "14 ноября 2025", text: "Покупала букет дочери на день рождения с доставкой. Привезли вовремя, цветы свежие, стоят уже неделю. Отлично! Спасибо!" },
  { name: "Анна Русакова", level: 5, date: "3 октября 2025", text: "Тёплая атмосфера, приветливый персонал, цветы свежие. Есть готовые букеты и можно собрать свой особый букет — учтут все пожелания." },
  { name: "Наталья Зиборова", level: 14, date: "19 августа 2025", text: "В последнее время покупаю цветы только здесь. Всегда вежливые, цветы стоят неделями, хороший выбор." },
  { name: "Галя", level: 6, date: "14 августа 2025", text: "Самый лучший магазин цветов в Ростове! Прекрасные букеты, очень оригинальные и красивые 😍 по очень приятным ценам!" },
  { name: "Михаил Линник", level: 6, date: "9 мая 2025", text: "Топовый магазин, регулярно покупаю здесь цветы жене и вам рекомендую 👍" },
  { name: "Степан Степанов", level: 6, date: "30 марта 2025", text: "Заказываю у них цветы и композиции не первый раз — убеждаюсь в том что они лучшие в своём деле! Выражаю огромную благодарность флористу Инне — её труд и талант безупречны!" },
  { name: "JENYA DYADA", level: 5, date: "7 января 2025", text: "Прекрасный магазин, чудный интерьер, сервис на высшем уровне. Екатерина помогла собрать гармоничный букет — моя была в восторге. Отдельное спасибо Екатерине!" },
  { name: "Посетитель", level: 11, date: "12 октября 2024", text: "Отличный ассортимент, всегда свежие букеты и чудесные флористы, готовые быстро собрать тот самый букет именно для тебя 🤍" },
  { name: "Екатерина", level: 8, date: "2 сентября 2024", text: "Очень красивые букеты и большой ассортимент с адекватными ценами 😍" },
  { name: "Денис", level: 6, date: "14 августа 2024", text: "Отличный магазин. Очень красиво и аккуратно упаковывают букеты! Дают средства для добавления в воду, чтобы цветы дольше стояли." },
]

const VISIBLE = 6

export default function ShopReviews() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? reviews : reviews.slice(0, VISIBLE)
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="reviews" className="py-24 px-6 sm:px-16">
      <div className="max-w-6xl mx-auto">
        <div ref={headRef} className="reveal mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Отзывы</p>
            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight">
              Нас рекомендуют
            </h2>
          </div>
          <div className="flex items-center gap-3 text-white/50">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Icon key={i} name="Star" size={16} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-medium">5.0</span>
            <span className="text-white/30">·</span>
            <span>{reviews.length} отзывов</span>
          </div>
        </div>

        <div ref={gridRef} className="stagger columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {displayed.map((r) => (
            <div
              key={r.name + r.date}
              className="break-inside-avoid rounded-2xl border border-white/5 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-white font-medium text-sm">{r.name}</p>
                  <p className="text-white/30 text-xs mt-0.5">Знаток города · {r.level} ур.</p>
                </div>
                <span className="text-white/25 text-xs">{r.date}</span>
              </div>
              <p className="text-white/60 text-sm font-light leading-relaxed">{r.text}</p>
              <div className="flex mt-4">
                {[1,2,3,4,5].map(i => (
                  <Icon key={i} name="Star" size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {!showAll && reviews.length > VISIBLE && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              Показать все {reviews.length} отзывов
              <Icon name="ChevronDown" size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}