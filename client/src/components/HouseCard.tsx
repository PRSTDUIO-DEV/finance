import { MapPin, BedDouble, Bath, Layers, Ruler, ExternalLink } from "lucide-react";
import type { House } from "@/lib/houses";
import { motion } from "framer-motion";

interface HouseCardProps {
  house: House;
  index: number;
}

export default function HouseCard({ house, index }: HouseCardProps) {
  const statusColors = {
    available: "bg-[#C41E3A]",
    reserved: "bg-amber-500",
    sold: "bg-gray-500",
  };
  const statusLabels = {
    available: "พร้อมขาย",
    reserved: "จอง",
    sold: "ขายแล้ว",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={house.image}
          alt={house.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {/* Status Badge */}
        <div className={`absolute top-3 left-3 ${statusColors[house.status]} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
          {statusLabels[house.status]}
        </div>
        {/* Price Ribbon */}
        <div className="absolute top-0 right-0">
          <div className="bg-[#C41E3A] text-white px-4 py-2 rounded-bl-xl shadow-lg">
            <div className="text-[10px] font-medium opacity-80">ราคา</div>
            <div className="text-lg font-bold leading-tight" style={{ fontFamily: "'Kanit', sans-serif" }}>
              {house.priceLabel}
            </div>
            <div className="text-[10px] font-medium opacity-80">บาท</div>
          </div>
        </div>
        {/* Cash Back Badge */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-[#C41E3A] px-3 py-1.5 rounded-lg shadow-md">
          <div className="text-[10px] font-medium text-gray-500">กู้ได้เกิน มีเงินเหลือ</div>
          <div className="text-sm font-bold" style={{ fontFamily: "'Kanit', sans-serif" }}>
            +{house.cashBackLabel} บาท
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3
          className="text-base font-bold text-gray-900 line-clamp-2 group-hover:text-[#C41E3A] transition-colors"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          {house.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
          <MapPin className="w-3.5 h-3.5 text-[#C41E3A] shrink-0" />
          <span className="truncate">{house.location}</span>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-4 gap-2 py-2 border-t border-b border-gray-100">
          <div className="flex flex-col items-center gap-0.5">
            <BedDouble className="w-4 h-4 text-[#C41E3A]" />
            <span className="text-xs text-gray-600">{house.bedrooms} นอน</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <Bath className="w-4 h-4 text-[#C41E3A]" />
            <span className="text-xs text-gray-600">{house.bathrooms} น้ำ</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <Layers className="w-4 h-4 text-[#C41E3A]" />
            <span className="text-xs text-gray-600">{house.floors} ชั้น</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <Ruler className="w-4 h-4 text-[#C41E3A]" />
            <span className="text-xs text-gray-600">{house.area}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5">
          {house.features.slice(0, 3).map((f, i) => (
            <span
              key={i}
              className="text-[11px] bg-red-50 text-[#C41E3A] px-2 py-0.5 rounded-full font-medium"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Loan Info */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-3">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[10px] text-gray-500 font-medium">ยอดกู้ธนาคาร</div>
              <div className="text-sm font-bold text-[#C41E3A]" style={{ fontFamily: "'Kanit', sans-serif" }}>
                {house.loanLabel} บาท
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-gray-500 font-medium">เงินเหลือ</div>
              <div className="text-sm font-bold text-green-600" style={{ fontFamily: "'Kanit', sans-serif" }}>
                +{house.cashBackLabel} บาท
              </div>
            </div>
          </div>
        </div>

        {/* Map Link */}
        <a
          href={house.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors text-sm font-medium border border-gray-200"
        >
          <MapPin className="w-4 h-4 text-[#C41E3A]" />
          ดูแผนที่ / Google Maps
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}
