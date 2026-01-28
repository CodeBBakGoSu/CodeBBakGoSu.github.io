import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { Terminal, Calendar, ChevronRight } from "lucide-react";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <Link href="/" className="text-zinc-500 hover:text-white mb-12 flex items-center gap-2 transition-colors">
          <ChevronRight className="w-4 h-4 rotate-180" /> Back to Home
        </Link>
        
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="text-blue-500 w-5 h-5" />
            <span className="text-blue-500 font-mono text-sm uppercase tracking-widest">Technical Archive</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-4">Writing</h1>
          <p className="text-xl text-zinc-400 font-light">
            클린 아키텍처, AI, 그리고 더 나은 개발자가 되기 위한 고민들을 기록합니다.
          </p>
        </header>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group relative">
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm w-32 shrink-0">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                
                <div className="flex-1">
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
