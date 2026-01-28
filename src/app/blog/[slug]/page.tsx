import { getPostData, getAllPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Calendar, Tag } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((s) => ({
    slug: s.params.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 py-24">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blog" className="text-zinc-500 hover:text-white mb-12 flex items-center gap-2 transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-4 text-zinc-500 font-mono text-sm mb-6">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Tag className="w-4 h-4" /> {post.tags.join(', ')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-zinc-400 font-light border-l-2 border-blue-500 pl-6 py-2 italic">
            {post.description}
          </p>
        </header>

        <article className="prose prose-invert prose-zinc max-w-none">
          {/* Simple MD renderer for now, can enhance with MDX later */}
          <div className="text-zinc-300 leading-relaxed space-y-6 text-lg">
            {post.content.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
