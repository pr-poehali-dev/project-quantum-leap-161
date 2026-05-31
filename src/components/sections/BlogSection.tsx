import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

const BLOG_URL = "https://functions.poehali.dev/7576c8e0-552b-43fe-a95d-f67f951bbe98"

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

export default function BlogSection() {
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

  return (
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
  )
}
