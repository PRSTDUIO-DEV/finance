/*
 * Article Detail Page — หน้าอ่านบทความ SEO
 * Design: Red Ribbon style — white/red theme, Kanit headings, Sarabun body
 * Features: Markdown rendering, related articles, CTA, SEO-friendly structure
 */

import { useParams, Link, useLocation } from "wouter";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Streamdown } from "streamdown";
import {
  Clock,
  Tag,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  BookOpen,
  Share2,
  CalendarDays,
  Loader2,
} from "lucide-react";
import { trpc } from "@/lib/trpc";
import FloatingButtons from "@/components/FloatingButtons";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/logo_viewton_03e48bc7.png";

const categoryColors: Record<string, string> = {
  "คู่มือซื้อบ้าน": "bg-blue-100 text-blue-700",
  "สินเชื่อบ้าน": "bg-green-100 text-green-700",
  เปรียบเทียบ: "bg-purple-100 text-purple-700",
  "ทำเลน่าสนใจ": "bg-amber-100 text-amber-700",
};

function RelatedCard({ article }: { article: any }) {
  return (
    <Link href={`/blog/${article.slug}`}>
      <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#C41E3A]/20 transition-all duration-300 h-full flex flex-col">
        <div className="h-1.5 bg-gradient-to-r from-[#C41E3A] to-[#E85D6F]" />
        <div className="p-5 flex flex-col flex-1">
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold w-fit mb-2 ${
              categoryColors[article.category] || "bg-gray-100 text-gray-600"
            }`}
          >
            <Tag className="w-2.5 h-2.5" />
            {article.category}
          </span>
          <h3
            className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#C41E3A] transition-colors leading-snug flex-1"
            style={{ fontFamily: "'Kanit', sans-serif" }}
          >
            {article.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-[10px] text-gray-400">
              <Clock className="w-3 h-3" />
              {article.readTime} นาที
            </span>
            <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-[#C41E3A] group-hover:gap-1.5 transition-all">
              อ่านต่อ
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();

  const { data: article, isLoading } = trpc.articles.getBySlug.useQuery(
    { slug: slug || "" },
    { enabled: !!slug }
  );

  const { data: relatedArticles = [] } = trpc.articles.list.useQuery(undefined, {
    select: (data) => data.filter((a: any) => a.slug !== slug).slice(0, 3),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-10 h-10 animate-spin text-[#C41E3A]" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Kanit', sans-serif" }}
          >
            ไม่พบบทความ
          </h1>
          <p className="text-gray-500 mb-6">
            บทความที่คุณค้นหาอาจถูกลบหรือย้ายไปแล้ว
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C41E3A] text-white font-bold rounded-xl hover:bg-[#a01830] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            กลับไปหน้าบทความ
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt || "",
          url: window.location.href,
        });
      } catch {
        // user cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

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
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600 hover:text-[#C41E3A] transition-colors"
            >
              บทความ
            </Link>
            <a
              href="tel:0812345678"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C41E3A] text-white text-xs font-semibold rounded-lg hover:bg-[#a01830] transition-colors ml-2"
            >
              <Phone className="w-3.5 h-3.5" />
              โทรเลย
            </a>
          </div>
        </div>
      </nav>

      {/* ===== ARTICLE HEADER ===== */}
      <section className="pt-24 pb-8 md:pt-28 md:pb-12 bg-gradient-to-b from-red-50 to-white">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link
                href="/"
                className="hover:text-[#C41E3A] transition-colors"
              >
                หน้าแรก
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link
                href="/blog"
                className="hover:text-[#C41E3A] transition-colors"
              >
                บทความ
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-gray-600 truncate max-w-[200px]">
                {article.title}
              </span>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                  categoryColors[article.category || ""] ||
                  "bg-gray-100 text-gray-600"
                }`}
              >
                <Tag className="w-3 h-3" />
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Clock className="w-3.5 h-3.5" />
                อ่าน {article.readTime} นาที
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <CalendarDays className="w-3.5 h-3.5" />
                {new Date(article.publishDate || new Date()).toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-2xl md:text-4xl font-black text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-4">
              {article.excerpt}
            </p>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 mb-4">
              {(article.keywords || []).map((kw: string) => (
                <span
                  key={kw}
                  className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg"
                >
                  #{kw}
                </span>
              ))}
            </div>

            {/* Share & Author */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src={LOGO_URL}
                  alt="วิวต้น โฮม"
                  className="h-8 w-auto"
                />
                <div>
                  <div
                    className="text-sm font-bold text-gray-900"
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                  >
                    วิวต้น โฮม
                  </div>
                  <div className="text-[10px] text-gray-400">
                    ผู้เชี่ยวชาญบ้านรีโนเวท สมุทรปราการ
                  </div>
                </div>
              </div>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                แชร์
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ARTICLE BODY ===== */}
      <section className="pb-12 md:pb-16">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-xl prose-h2:md:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-[#C41E3A] prose-h2:pl-4
              prose-h3:text-lg prose-h3:md:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
              prose-strong:text-gray-900
              prose-ul:text-gray-600 prose-ol:text-gray-600
              prose-li:mb-1
              prose-blockquote:border-l-4 prose-blockquote:border-[#C41E3A] prose-blockquote:bg-red-50 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-gray-700
              prose-table:text-sm
              prose-th:bg-gray-100 prose-th:text-gray-700 prose-th:font-semibold prose-th:px-4 prose-th:py-2
              prose-td:px-4 prose-td:py-2 prose-td:border-gray-200
            "
            style={{ fontFamily: "'Sarabun', sans-serif" }}
          >
            <Streamdown>{article.body}</Streamdown>
          </motion.div>
        </div>
      </section>

      {/* ===== INLINE CTA ===== */}
      <section className="py-10 bg-gradient-to-r from-[#C41E3A] to-[#8B1528]">
        <div className="container max-w-3xl text-center">
          <h2
            className="text-xl md:text-2xl font-bold text-white mb-2"
            style={{ fontFamily: "'Kanit', sans-serif" }}
          >
            สนใจซื้อบ้านรีโนเวท? ปรึกษาเราฟรี!
          </h2>
          <p className="text-red-100 text-sm mb-5">
            ทีมงานวิวต้น โฮม พร้อมช่วยหาบ้านที่เหมาะกับคุณ
            และช่วยยื่นกู้ธนาคารให้ฟรี
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0812345678"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#C41E3A] font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              <Phone className="w-5 h-5" />
              โทร 081-234-5678
            </a>
            <a
              href="https://line.me/ti/p/~viewtonhome"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#06C755] text-white font-bold rounded-xl hover:bg-[#05a847] transition-colors shadow-lg"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              <MessageCircle className="w-5 h-5" />
              แอดไลน์ @viewtonhome
            </a>
          </div>
        </div>
      </section>

      {/* ===== RELATED ARTICLES ===== */}
      {relatedArticles.length > 0 && (
        <section className="py-12 md:py-16 bg-[#F8F9FA]">
          <div className="container max-w-4xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2
                  className="text-xl md:text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  บทความที่เกี่ยวข้อง
                </h2>
                <div className="w-12 h-1 mt-2 rounded-full bg-[#C41E3A]" />
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#C41E3A] hover:gap-2 transition-all"
              >
                ดูทั้งหมด
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedArticles.map((r: any) => (
                <RelatedCard key={r.id} article={r} />
              ))}
            </div>
          </div>
        </section>
      )}

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
