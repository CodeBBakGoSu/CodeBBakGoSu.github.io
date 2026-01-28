"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Terminal, 
  Cpu, 
  Database, 
  Layers, 
  ExternalLink,
  ChevronRight,
  BookOpen
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "GGUniverse",
      description: "NestJS 기반의 DDD & 클린 아키텍처 백엔드 API 서버",
      tags: ["NestJS", "TypeScript", "Prisma", "DDD", "AWS"],
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Pyxii API",
      description: "문서 지능화 및 AI 리포트 생성을 위한 Spring Boot 기반 API",
      tags: ["Spring Boot", "Kotlin", "AI", "Azure"],
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
              GIHYEON <span className="text-blue-500">HONG</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
              Software Engineer focusing on <span className="text-white font-medium">DDD</span>, 
              <span className="text-white font-medium"> Clean Architecture</span>, and 
              <span className="text-white font-medium"> AI Infrastructure</span>.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex gap-4 justify-center"
          >
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
              View Projects <ChevronRight className="w-4 h-4" />
            </button>
            <Link href="/blog">
              <button className="border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
                Blog <BookOpen className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex items-center gap-2 mb-12">
          <Terminal className="text-blue-500" />
          <h2 className="text-2xl font-bold">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-zinc-900/50 border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {project.icon}
                </div>
                <ExternalLink className="text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono bg-white/5 px-3 py-1 rounded-full text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="bg-zinc-900/30 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Database className="text-blue-500" />
                <span className="text-blue-500 font-mono text-sm uppercase tracking-widest">Writing</span>
              </div>
              <h2 className="text-4xl font-bold">Latest Insights</h2>
            </div>
            <button className="text-zinc-400 hover:text-white transition-colors underline underline-offset-8">
              Explore All Posts
            </button>
          </div>
          
          <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 md:p-12">
            <span className="text-zinc-500 text-sm font-mono mb-4 block">Coming Soon</span>
            <h3 className="text-3xl font-bold mb-4">"왜 처음부터 블로그를 직접 만드는가?"</h3>
            <p className="text-zinc-400 text-lg max-w-2xl mb-8 leading-relaxed">
              티스토리를 떠나 나만의 기술 블로그를 직접 빌드하며 배운 클린 아키텍처와 Next.js 최적화에 대한 이야기. 곧 공개됩니다.
            </p>
            <div className="flex items-center gap-4 text-zinc-500">
              <span className="flex items-center gap-1"><Github className="w-4 h-4" /> gihyeon-hong</span>
              <span>•</span>
              <span>Feb 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-zinc-500 text-sm">
        <p>© 2026 Gihyeon Hong. Built with Next.js & Knox 👻</p>
      </footer>
    </main>
  );
}
