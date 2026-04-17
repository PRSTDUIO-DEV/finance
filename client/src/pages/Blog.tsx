/*
 * Blog Listing Page — รายการบทความ SEO
 * Design: Red Ribbon style — white/red theme, Kanit headings, Sarabun body
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Clock,
  ChevronRight,
  BookOpen,
  Tag,
  Phone,
  MessageCircle,
} from "lucide-react";
import FloatingButtons from "@/components/FloatingButtons";
import { trpc } from "@/lib/trpc";
import { Loader2 } from "lucide-react";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/logo_viewton_03e48bc7.png";

const categoryColors: Record<string, string> = {
  "คู่มือซื้อบ้าน": "bg-blue-100 text-blue-700",
  "สินเชื่อบ้าน": "bg-green-100 text-green-700",
  เปรียบเทียบ: "bg-purple-100 text-purple-700",
  "ทำเลน่าสนใจ": "bg-amber-100 text-amber-700",
};

export default function Blog() {
  const { data: articles = [], isLoading: articlesLoading } = trpc.articles.list.useQuery();

  return (
    <div className="min-h-screen bg-white">
      {/* ===== SIMPLE NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src={LOGO_URL} alt="วิวต้น โฮม" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <div
                className="text-sm font-bold text-[#C41E3A] leading-tight"
                style={{ fontFamily: "'Kanit', sans-serif" }}
              >
                วิวต้น โฮม
              </div>
              <div className="text-[10px] text-gray-400 leading-tight">
                ซื้อบ้านสวย มีเงินเหลือ
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-[#C41E3A] transition-colors"
            >
              หน้าแรก
            </Link>
            <span className="text-gray-300">|</span>
            <span
              className="text-sm font-bold text-[#C41E3A]"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              บทความ
            </span>
            <a
              href="tel:0812345678"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C41E3A] text-white text-xs font-semibold rounded-lg hover:bg-[#a01830] transition-colors ml-2"
            >
              <Phone className="w-3.5 h-3.5" />
              โทรเลย
            </a>
            <a
              href="https://line.me/ti/p/~viewtonhome"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#06C755] text-white text-xs font-semibold rounded-lg hover:bg-[#05a847] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              LINE
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-red-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C41E3A]/10 text-[#C41E3A] rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              บทความน่ารู้
            </div>
            <h1
              className="text-3xl md:text-5xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              ความรู้เรื่อง<span className="text-[#C41E3A]">บ้าน</span>
              <br className="md:hidden" />
              และ<span className="text-[#C41E3A]">สินเชื่อ</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
              รวมบทความดีๆ เกี่ยวกับการซื้อบ้าน กู้สินเชื่อ
              และทำเลน่าสนใจในสมุทรปราการ เขียนโดยทีมงานวิวต้น โฮม
            </p>
            <div className="w-16 h-1 mx-auto mt-5 rounded-full bg-[#C41E3A]" />
          </motion.div>
        </div>
      </section>

      {/* ===== ARTICLE GRID ===== */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articlesLoading ? (
              <div className="col-span-full flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-[#C41E3A]" />
              </div>
            ) : articles.map((article: any, i: number) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#C41E3A]/20 transition-all duration-300 h-full flex flex-col">
                    {/* Color Bar */}
                    <div className="h-2 bg-gradient-to-r from-[#C41E3A] to-[#E85D6F]" />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Category & Read Time */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                            categoryColors[article.category] ||
                            "bg-gray-100 text-gray-600"
                          }`}
                        >
                          <Tag className="w-3 h-3" />
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {article.readTime} นาที
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#C41E3A] transition-colors leading-snug"
                        style={{ fontFamily: "'Kanit', sans-serif" }}
                      >
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {(article.keywords || []).slice(0, 3).map((kw: string) => (
                          <span
                            key={kw}
                            className="px-2 py-0.5 bg-gray-50 text-gray-400 text-[10px] rounded-md border border-gray-100"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                        <span className="text-xs text-gray-400">
                          {new Date(article.publishDate).toLocaleDateString(
                            "th-TH",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#C41E3A] group-hover:gap-2 transition-all">
                          อ่านต่อ
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-12 bg-[#C41E3A]">
        <div className="container text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "'Kanit', sans-serif" }}
          >
            สนใจซื้อบ้านรีโนเวท?
          </h2>
          <p className="text-red-100 mb-6 max-w-lg mx-auto">
            ปรึกษาฟรี! ทีมงานวิวต้น โฮม พร้อมช่วยหาบ้านที่เหมาะกับคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0812345678"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#C41E3A] font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg text-base"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              <Phone className="w-5 h-5" />
              โทร 081-234-5678
            </a>
            <a
              href="https://line.me/ti/p/~viewtonhome"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#06C755] text-white font-bold rounded-xl hover:bg-[#05a847] transition-colors shadow-lg text-base"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              <MessageCircle className="w-5 h-5" />
              แอดไลน์ @viewtonhome
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="วิวต้น โฮม" className="h-8" />
              <span className="text-sm">
                วิวต้น โฮม — ซื้อบ้านสวย มีเงินเหลือ
              </span>
            </div>
            <div className="text-sm text-center md:text-right">
              <p>&copy; 2026 ViewTon Home. All rights reserved.</p>
              <p className="text-xs text-gray-500 mt-1">
                บ้านรีโนเวทมือสอง โซนสมุทรปราการ
              </p>
            </div>
          </div>
        </div>
      </footer>

      <FloatingButtons />
    </div>
  );
}
