/*
 * Design: "Red Ribbon" — สไตล์ริบบิ้นแดง
 * Colors: #C41E3A (crimson red), #FFFFFF (white), #F8F9FA (light gray), #1A1A1A (dark text)
 * Fonts: Kanit Bold (headings), Sarabun Regular (body)
 * Motif: Red ribbon dividers, price tag badges, flowing sections
 */

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Home as HomeIcon,
  Banknote,
  Wrench,
  ShieldCheck,
  ChevronRight,
  ArrowDown,
  CheckCircle2,
  Star,
  Clock,
  FileText,
  HandCoins,
  Key,
  Loader2,
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import HouseCard from "@/components/HouseCard";
import FloatingButtons from "@/components/FloatingButtons";
import LoanCalculator from "@/components/LoanCalculator";
import { trpc } from "@/lib/trpc";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/logo_viewton_03e48bc7.png";

function RibbonDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 60"
        className="w-full h-8 md:h-12"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 Q360,60 720,30 Q1080,0 1440,30 L1440,60 L0,60 Z"
          fill="#C41E3A"
          opacity="0.08"
        />
        <path
          d="M0,40 Q360,55 720,40 Q1080,25 1440,40 L1440,60 L0,60 Z"
          fill="#C41E3A"
          opacity="0.05"
        />
      </svg>
    </div>
  );
}

function SectionTitle({
  subtitle,
  title,
  description,
  light = false,
}: {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 md:mb-14"
    >
      <span
        className={`inline-block text-sm font-semibold tracking-wider uppercase mb-2 ${
          light ? "text-red-200" : "text-[#C41E3A]"
        }`}
      >
        {subtitle}
      </span>
      <h2
        className={`text-2xl md:text-4xl font-bold mb-3 ${
          light ? "text-white" : "text-gray-900"
        }`}
        style={{ fontFamily: "'Kanit', sans-serif" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl mx-auto text-base ${
            light ? "text-red-100" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`w-16 h-1 mx-auto mt-4 rounded-full ${
          light ? "bg-white/50" : "bg-[#C41E3A]"
        }`}
      />
    </motion.div>
  );
}

export default function Home() {
  const { data: houses = [], isLoading: housesLoading } = trpc.houses.list.useQuery();
  const { data: reviewsData = [], isLoading: reviewsLoading } = trpc.reviews.list.useQuery();
  const { data: articlesData = [], isLoading: articlesLoading } = trpc.articles.list.useQuery();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FloatingButtons />

      {/* ===== HERO SECTION ===== */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50/30 to-white" />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C41E3A 0, #C41E3A 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-[#C41E3A] px-4 py-2 rounded-full text-sm font-semibold"
              >
                <Star className="w-4 h-4 fill-[#C41E3A]" />
                บ้านรีโนเวทใหม่ โซนสมุทรปราการ
              </motion.div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
                style={{ fontFamily: "'Kanit', sans-serif" }}
              >
                ซื้อบ้านสวย
                <br />
                <span className="text-[#C41E3A] relative">
                  มีเงินเหลือ
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8"
                      stroke="#C41E3A"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                บ้านทาวน์โฮมรีโนเวทใหม่ทั้งหลัง ราคาเริ่มต้น{" "}
                <strong className="text-[#C41E3A]">1.69 ล้านบาท</strong>{" "}
                กู้ธนาคารได้เกินราคาบ้าน{" "}
                <strong className="text-green-600">มีเงินเหลือติดมือ 5 แสน+</strong>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:0812345678"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C41E3A] text-white font-bold rounded-xl hover:bg-[#a01830] transition-all shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 text-base"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  <Phone className="w-5 h-5" />
                  โทรเลย 081-234-5678
                </a>
                <a
                  href="https://line.me/ti/p/~viewtonhome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#06C755] text-white font-bold rounded-xl hover:bg-[#05a847] transition-all shadow-lg shadow-green-200 hover:shadow-xl text-base"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  แอดไลน์ @viewtonhome
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-6 pt-4">
                <div>
                  <div
                    className="text-2xl md:text-3xl font-bold text-[#C41E3A]"
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                  >
                    50+
                  </div>
                  <div className="text-sm text-gray-500">บ้านที่ขายแล้ว</div>
                </div>
                <div className="w-px bg-gray-200" />
                <div>
                  <div
                    className="text-2xl md:text-3xl font-bold text-[#C41E3A]"
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                  >
                    100%
                  </div>
                  <div className="text-sm text-gray-500">กู้ผ่านทุกราย</div>
                </div>
                <div className="w-px bg-gray-200" />
                <div>
                  <div
                    className="text-2xl md:text-3xl font-bold text-[#C41E3A]"
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                  >
                    5 แสน+
                  </div>
                  <div className="text-sm text-gray-500">เงินเหลือเฉลี่ย</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house1_66d23f20.jpg"
                  alt="บ้านรีโนเวทตัวอย่าง"
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 font-medium">
                        ตัวอย่าง: ทาวน์โฮม 2 ชั้น บางนา
                      </div>
                      <div
                        className="text-xl font-bold text-[#C41E3A]"
                        style={{ fontFamily: "'Kanit', sans-serif" }}
                      >
                        1,890,000 บาท
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 font-medium">
                        เงินเหลือ
                      </div>
                      <div
                        className="text-lg font-bold text-green-600"
                        style={{ fontFamily: "'Kanit', sans-serif" }}
                      >
                        +510,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C41E3A]/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C41E3A]/5 rounded-full blur-2xl" />
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center mt-12"
          >
            <a
              href="#why-us"
              className="flex flex-col items-center text-gray-400 hover:text-[#C41E3A] transition-colors"
            >
              <span className="text-xs mb-1">เลื่อนดูเพิ่มเติม</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== WHY US SECTION ===== */}
      <section id="why-us" className="py-16 md:py-24 bg-[#F8F9FA] relative">
        <RibbonDivider />
        <div className="container">
          <SectionTitle
            subtitle="ทำไมต้องเลือกเรา"
            title="วิวต้น โฮม ดีกว่ายังไง?"
            description="เราคัดสรรบ้านทำเลดี รีโนเวทใหม่ทั้งหลัง พร้อมช่วยเรื่องกู้ธนาคาร ให้คุณมีเงินเหลือติดมือ"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wrench,
                title: "รีโนเวทใหม่ทั้งหลัง",
                desc: "ทาสีใหม่ ปูกระเบื้องใหม่ ระบบไฟ-ประปาใหม่ เหมือนได้บ้านใหม่ในราคาบ้านมือสอง",
                color: "bg-red-50 text-[#C41E3A]",
              },
              {
                icon: Banknote,
                title: "กู้ได้เกิน มีเงินเหลือ",
                desc: "บ้านราคา 2 ล้าน กู้ได้ 2.5 ล้าน มีเงินเหลือติดมือ 5 แสนบาท+ ไว้ตกแต่งหรือใช้จ่าย",
                color: "bg-green-50 text-green-600",
              },
              {
                icon: MapPin,
                title: "ทำเลดี โซนสมุทรปราการ",
                desc: "ใกล้โรงงาน ใกล้ตลาด ใกล้ BTS เดินทางสะดวก เหมาะกับคนทำงานในพื้นที่",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: ShieldCheck,
                title: "ช่วยกู้ฟรี ไม่มีค่าใช้จ่าย",
                desc: "ทีมงานช่วยเตรียมเอกสาร ยื่นกู้ธนาคาร ดูแลจนกู้ผ่าน ไม่คิดค่าบริการ",
                color: "bg-purple-50 text-purple-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASH BACK HIGHLIGHT ===== */}
      <section className="py-16 md:py-20 bg-[#C41E3A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2
              className="text-3xl md:text-5xl font-black mb-4"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              ซื้อบ้าน 2 ล้าน กู้ได้ 2.5 ล้าน
            </h2>
            <p className="text-xl md:text-2xl font-medium text-red-100 mb-8">
              มีเงินเหลือติดมือ{" "}
              <span className="text-yellow-300 font-bold text-3xl md:text-4xl">
                500,000
              </span>{" "}
              บาท!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                <div className="text-sm text-red-100">ราคาบ้าน</div>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  2,000,000 บาท
                </div>
              </div>
              <div className="flex items-center">
                <ChevronRight className="w-8 h-8 text-white/50" />
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                <div className="text-sm text-red-100">ยอดกู้ธนาคาร</div>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  2,500,000 บาท
                </div>
              </div>
              <div className="flex items-center">
                <ChevronRight className="w-8 h-8 text-white/50" />
              </div>
              <div className="bg-yellow-400/20 backdrop-blur-sm rounded-xl px-6 py-4 text-center border border-yellow-300/30">
                <div className="text-sm text-yellow-200">เงินเหลือ</div>
                <div
                  className="text-2xl font-bold text-yellow-300"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  +500,000 บาท
                </div>
              </div>
            </div>
            <p className="mt-8 text-red-100 text-sm max-w-xl mx-auto">
              * ยอดกู้ขึ้นอยู่กับการประเมินราคาของธนาคาร
              และคุณสมบัติผู้กู้แต่ละราย ทีมงานจะช่วยประเมินให้ฟรี
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== LOAN CALCULATOR ===== */}
      <LoanCalculator />

      {/* ===== LISTINGS SECTION ===== */}
      <section id="listings" className="py-16 md:py-24 bg-white relative">
        <div className="container">
          <SectionTitle
            subtitle="บ้านพร้อมขาย"
            title="บ้านรีโนเวทใหม่ พร้อมเข้าอยู่"
            description="ทาวน์โฮม 2-3 ชั้น โซนสมุทรปราการ รีโนเวทใหม่ทั้งหลัง ทุกหลังกู้ได้เกินราคาบ้าน"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {housesLoading ? (
              <div className="col-span-full flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-[#C41E3A]" />
              </div>
            ) : (
              houses.map((house: any, index: number) => (
                <HouseCard key={house.id} house={house} index={index} />
              ))
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-gray-500 mb-4">
              สนใจบ้านหลังไหน หรืออยากดูบ้านเพิ่มเติม ติดต่อเราได้เลย
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:0812345678"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C41E3A] text-white font-bold rounded-xl hover:bg-[#a01830] transition-all shadow-lg"
                style={{ fontFamily: "'Kanit', sans-serif" }}
              >
                <Phone className="w-5 h-5" />
                โทร 081-234-5678
              </a>
              <a
                href="https://line.me/ti/p/~viewtonhome"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#06C755] text-white font-bold rounded-xl hover:bg-[#05a847] transition-all shadow-lg"
                style={{ fontFamily: "'Kanit', sans-serif" }}
              >
                <MessageCircle className="w-5 h-5" />
                แอดไลน์สอบถาม
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== HOW TO BUY SECTION ===== */}
      <section id="how-to" className="py-16 md:py-24 bg-[#F8F9FA] relative">
        <RibbonDivider />
        <div className="container">
          <SectionTitle
            subtitle="ขั้นตอนง่ายๆ"
            title="ซื้อบ้านกับวิวต้น โฮม ง่ายมาก!"
            description="แค่ 4 ขั้นตอน ก็ได้บ้านสวย พร้อมเงินเหลือติดมือ"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                icon: Phone,
                title: "ติดต่อเรา",
                desc: "โทรหรือแอดไลน์ บอกงบประมาณและทำเลที่สนใจ เราจะแนะนำบ้านที่เหมาะกับคุณ",
              },
              {
                step: 2,
                icon: HomeIcon,
                title: "เข้าชมบ้าน",
                desc: "นัดดูบ้านจริง พร้อมทีมงานพาชม อธิบายรายละเอียดทุกจุดที่รีโนเวท",
              },
              {
                step: 3,
                icon: FileText,
                title: "ยื่นกู้ธนาคาร",
                desc: "เตรียมเอกสารง่ายๆ ทีมงานช่วยยื่นกู้ให้ ไม่ต้องวิ่งเอง ไม่มีค่าบริการ",
              },
              {
                step: 4,
                icon: Key,
                title: "รับกุญแจบ้าน",
                desc: "กู้ผ่าน! รับกุญแจบ้านใหม่ พร้อมเงินเหลือติดมือ เริ่มต้นชีวิตใหม่ได้เลย",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center group hover:shadow-lg transition-all"
              >
                {/* Step number */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#C41E3A] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-red-50 text-[#C41E3A] rounded-xl flex items-center justify-center mx-auto mt-3 mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-gray-300">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container">
          <SectionTitle
            subtitle="เสียงจากลูกค้า"
            title="ส่งมอบบ้านแล้วกว่า 100 หลัง"
            description="ลูกค้าจริง รีวิวจริง ส่งมอบบ้านจริง ดูภาพส่งมอบบ้านและรีวิวจากลูกค้าของเรา"
          />

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 md:gap-16 mb-12"
          >
            {[
              { num: "100+", label: "บ้านที่ส่งมอบ" },
              { num: "98%", label: "กู้ผ่านสำเร็จ" },
              { num: "5.0", label: "คะแนนรีวิว" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-bold text-[#C41E3A]"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  {stat.num}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Review Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {reviewsLoading ? (
              <div className="col-span-full flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-[#C41E3A]" />
              </div>
            ) : reviewsData.map((item: any, i: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="bg-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                {/* Handover Photo */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`ส่งมอบบ้าน ${item.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Overlay badge */}
                  <div className="absolute top-3 left-3 bg-[#C41E3A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md"
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                  >
                    {item.houseType} • {item.location}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#C41E3A] text-xs font-bold px-3 py-1.5 rounded-full shadow-md"
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                  >
                    {item.cashback}
                  </div>
                </div>

                {/* Review Content */}
                <div className="p-5">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: item.stars }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    "{item.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#C41E3A] text-white rounded-full flex items-center justify-center font-bold text-sm"
                        style={{ fontFamily: "'Kanit', sans-serif" }}
                      >
                        {item.name.charAt(3)}
                      </div>
                      <div>
                        <div
                          className="font-bold text-gray-900 text-sm"
                          style={{ fontFamily: "'Kanit', sans-serif" }}
                        >
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-500">{item.role}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                      ลูกค้าจริง
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container relative z-10">
          <SectionTitle
            subtitle="ติดต่อเรา"
            title="พร้อมมีบ้านเป็นของตัวเอง?"
            description="ติดต่อวิวต้น โฮม ได้ทุกช่องทาง เราพร้อมให้คำปรึกษาฟรี!"
            light
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.a
                href="tel:0812345678"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-colors group"
              >
                <div className="w-14 h-14 bg-[#C41E3A] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-medium">
                    โทรหาเรา
                  </div>
                  <div
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                  >
                    081-234-5678
                  </div>
                  <div className="text-xs text-gray-400">
                    เปิดทุกวัน 8:00 - 20:00 น.
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://line.me/ti/p/~viewtonhome"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-colors group"
              >
                <div className="w-14 h-14 bg-[#06C755] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-medium">
                    LINE Official
                  </div>
                  <div
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                  >
                    @viewtonhome
                  </div>
                  <div className="text-xs text-gray-400">
                    แอดไลน์ ตอบไว ตอบทุกคำถาม
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-medium">
                    พื้นที่ให้บริการ
                  </div>
                  <div
                    className="text-lg font-bold"
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                  >
                    โซนสมุทรปราการ
                  </div>
                  <div className="text-xs text-gray-400">
                    บางนา บางพลี บางบ่อ เทพารักษ์ ลาซาล
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5"
              >
                <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-medium">
                    เวลาทำการ
                  </div>
                  <div
                    className="text-lg font-bold"
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                  >
                    ทุกวัน 8:00 - 20:00 น.
                  </div>
                  <div className="text-xs text-gray-400">
                    นัดดูบ้านได้ทุกวัน รวมวันหยุด
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-gray-900"
            >
              <h3
                className="text-2xl font-bold mb-2 text-center"
                style={{ fontFamily: "'Kanit', sans-serif" }}
              >
                สนใจซื้อบ้าน?
              </h3>
              <p className="text-gray-500 text-sm text-center mb-6">
                กดปุ่มด้านล่างเพื่อติดต่อเราได้ทันที
              </p>

              <div className="space-y-4">
                <a
                  href="tel:0812345678"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#C41E3A] text-white font-bold rounded-xl hover:bg-[#a01830] transition-all shadow-lg text-lg"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  <Phone className="w-6 h-6" />
                  โทรเลย 081-234-5678
                </a>

                <a
                  href="https://line.me/ti/p/~viewtonhome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#06C755] text-white font-bold rounded-xl hover:bg-[#05a847] transition-all shadow-lg text-lg"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  <MessageCircle className="w-6 h-6" />
                  แอดไลน์ @viewtonhome
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm text-gray-600">
                    ปรึกษาฟรี ไม่มีค่าใช้จ่าย
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm text-gray-600">
                    ช่วยเตรียมเอกสารกู้ธนาคาร
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm text-gray-600">
                    นัดดูบ้านจริงได้ทุกวัน
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm text-gray-600">
                    ดูแลจนกู้ผ่าน รับกุญแจบ้าน
                  </span>
                </div>
              </div>

              {/* Owner Info */}
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <img
                  src={LOGO_URL}
                  alt="วิวต้น โฮม"
                  className="h-12 mx-auto mb-2"
                />
                <p className="text-xs text-gray-400">
                  เจ้าของ: คุณวิว & คุณต้น
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== LATEST ARTICLES ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 bg-[#C41E3A]/10 text-[#C41E3A] rounded-full text-sm font-semibold mb-3">
              บทความน่ารู้
            </span>
            <h2
              className="text-2xl md:text-4xl font-black text-gray-900"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              ความรู้เรื่อง<span className="text-[#C41E3A]">บ้าน</span>และ
              <span className="text-[#C41E3A]">สินเชื่อ</span>
            </h2>
            <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-[#C41E3A]" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {articlesLoading ? (
              <div className="col-span-full flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-[#C41E3A]" />
              </div>
            ) : articlesData.slice(0, 3).map((article: any, i: number) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#C41E3A]/20 transition-all duration-300 h-full flex flex-col">
                    <div className="h-2 bg-gradient-to-r from-[#C41E3A] to-[#E85D6F]" />
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#C41E3A] w-fit mb-3">
                        {article.category}
                      </span>
                      <h3
                        className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#C41E3A] transition-colors leading-snug"
                        style={{ fontFamily: "'Kanit', sans-serif" }}
                      >
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {article.readTime} นาที
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

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C41E3A] text-white font-bold rounded-xl hover:bg-[#a01830] transition-colors shadow-lg"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              ดูบทความทั้งหมด
              <ChevronRight className="w-5 h-5" />
            </Link>
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
    </div>
  );
}
