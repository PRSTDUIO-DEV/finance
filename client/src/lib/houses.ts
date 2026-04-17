export interface House {
  id: number;
  title: string;
  type: string;
  floors: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  price: number;
  priceLabel: string;
  loanAmount: number;
  loanLabel: string;
  cashBack: number;
  cashBackLabel: string;
  location: string;
  district: string;
  mapUrl: string;
  mapEmbed: string;
  image: string;
  features: string[];
  status: "available" | "reserved" | "sold";
}

export const houses: House[] = [
  {
    id: 1,
    title: "ทาวน์โฮม 2 ชั้น ซ.สุขุมวิท 113 บางนา",
    type: "ทาวน์โฮม",
    floors: 2,
    bedrooms: 3,
    bathrooms: 2,
    area: "21 ตร.วา",
    price: 1890000,
    priceLabel: "1,890,000",
    loanAmount: 2400000,
    loanLabel: "2,400,000",
    cashBack: 510000,
    cashBackLabel: "510,000",
    location: "ซ.สุขุมวิท 113 บางนา",
    district: "บางนา",
    mapUrl: "https://maps.google.com/?q=13.6631,100.6048",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d100.6048!3d13.6631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM5JzQ3LjIiTiAxMDDCsDM2JzE3LjMiRQ!5e0!3m2!1sth!2sth!4v1",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house1_66d23f20.jpg",
    features: ["รีโนเวทใหม่ทั้งหลัง", "ห้องครัวบิลท์อิน", "จอดรถ 1 คัน", "ใกล้ BTS บางนา"],
    status: "available",
  },
  {
    id: 2,
    title: "ทาวน์โฮม 3 ชั้น หมู่บ้านพฤกษา บางพลี",
    type: "ทาวน์โฮม",
    floors: 3,
    bedrooms: 3,
    bathrooms: 3,
    area: "24 ตร.วา",
    price: 2290000,
    priceLabel: "2,290,000",
    loanAmount: 2800000,
    loanLabel: "2,800,000",
    cashBack: 510000,
    cashBackLabel: "510,000",
    location: "หมู่บ้านพฤกษา บางพลี",
    district: "บางพลี",
    mapUrl: "https://maps.google.com/?q=13.5937,100.7053",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.5!2d100.7053!3d13.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM1JzM3LjMiTiAxMDDCsDQyJzE5LjEiRQ!5e0!3m2!1sth!2sth!4v1",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house2_bc3c1caf.jpg",
    features: ["รีโนเวทใหม่ทั้งหลัง", "3 ชั้น พื้นที่ใช้สอยเยอะ", "จอดรถ 2 คัน", "ใกล้ตลาดบางพลี"],
    status: "available",
  },
  {
    id: 3,
    title: "ทาวน์โฮม 2 ชั้น ซ.เทพารักษ์ เมืองสมุทรปราการ",
    type: "ทาวน์โฮม",
    floors: 2,
    bedrooms: 2,
    bathrooms: 2,
    area: "18 ตร.วา",
    price: 1690000,
    priceLabel: "1,690,000",
    loanAmount: 2200000,
    loanLabel: "2,200,000",
    cashBack: 510000,
    cashBackLabel: "510,000",
    location: "ซ.เทพารักษ์ เมืองสมุทรปราการ",
    district: "เมืองสมุทรปราการ",
    mapUrl: "https://maps.google.com/?q=13.6004,100.6370",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0!2d100.6370!3d13.6004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM2JzAxLjQiTiAxMDDCsDM4JzEzLjIiRQ!5e0!3m2!1sth!2sth!4v1",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house3_e4c1811b.jpg",
    features: ["รีโนเวทใหม่ทั้งหลัง", "ใกล้ห้างอิมพีเรียล", "จอดรถ 1 คัน", "ทำเลดี ใกล้แหล่งงาน"],
    status: "available",
  },
  {
    id: 4,
    title: "ทาวน์โฮม 3 ชั้น หมู่บ้านสิรารมย์ บางบ่อ",
    type: "ทาวน์โฮม",
    floors: 3,
    bedrooms: 4,
    bathrooms: 3,
    area: "28 ตร.วา",
    price: 2590000,
    priceLabel: "2,590,000",
    loanAmount: 3100000,
    loanLabel: "3,100,000",
    cashBack: 510000,
    cashBackLabel: "510,000",
    location: "หมู่บ้านสิรารมย์ บางบ่อ",
    district: "บางบ่อ",
    mapUrl: "https://maps.google.com/?q=13.5500,100.7800",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.0!2d100.7800!3d13.5500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMzJzAwLjAiTiAxMDDCsDQ2JzQ4LjAiRQ!5e0!3m2!1sth!2sth!4v1",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house4_efeb0866.jpg",
    features: ["รีโนเวทใหม่ทั้งหลัง", "4 ห้องนอน กว้างขวาง", "จอดรถ 2 คัน", "หมู่บ้านเงียบสงบ"],
    status: "reserved",
  },
  {
    id: 5,
    title: "ทาวน์โฮม 2 ชั้น ซ.ลาซาล บางนา",
    type: "ทาวน์โฮม",
    floors: 2,
    bedrooms: 3,
    bathrooms: 2,
    area: "22 ตร.วา",
    price: 1990000,
    priceLabel: "1,990,000",
    loanAmount: 2500000,
    loanLabel: "2,500,000",
    cashBack: 510000,
    cashBackLabel: "510,000",
    location: "ซ.ลาซาล บางนา",
    district: "บางนา",
    mapUrl: "https://maps.google.com/?q=13.6580,100.6150",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8!2d100.6150!3d13.6580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM5JzI4LjgiTiAxMDDCsDM2JzU0LjAiRQ!5e0!3m2!1sth!2sth!4v1",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house5_f29f7bb1.jpg",
    features: ["รีโนเวทใหม่ทั้งหลัง", "ใกล้ BTS แบริ่ง", "จอดรถ 1 คัน", "ใกล้ห้างเมกาบางนา"],
    status: "available",
  },
  {
    id: 6,
    title: "ทาวน์โฮม 2 ชั้น หมู่บ้านทิพวัล บางพลี",
    type: "ทาวน์โฮม",
    floors: 2,
    bedrooms: 3,
    bathrooms: 2,
    area: "20 ตร.วา",
    price: 1790000,
    priceLabel: "1,790,000",
    loanAmount: 2300000,
    loanLabel: "2,300,000",
    cashBack: 510000,
    cashBackLabel: "510,000",
    location: "หมู่บ้านทิพวัล บางพลี",
    district: "บางพลี",
    mapUrl: "https://maps.google.com/?q=13.5700,100.7200",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.8!2d100.7200!3d13.5700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM0JzEyLjAiTiAxMDDCsDQzJzEyLjAiRQ!5e0!3m2!1sth!2sth!4v1",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house6_056afa69.jpg",
    features: ["รีโนเวทใหม่ทั้งหลัง", "ใกล้ตลาดทิพวัล", "จอดรถ 1 คัน", "ราคาคุ้มค่าที่สุด"],
    status: "available",
  },
];

export function formatPrice(price: number): string {
  return price.toLocaleString("th-TH");
}
