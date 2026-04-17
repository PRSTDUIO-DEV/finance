export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  stars: number;
  image: string;
  houseType: string;
  location: string;
  cashback: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "คุณนิด & คุณเอก",
    role: "พนักงานโรงงาน บางพลี",
    text: "ไม่คิดว่าจะมีบ้านเป็นของตัวเองได้ พี่วิวกับพี่ต้นช่วยทุกอย่าง ตั้งแต่เลือกบ้านจนกู้ผ่าน ได้เงินเหลือมาตกแต่งบ้านอีก ดีใจมากค่ะ",
    stars: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover1-FXrNnprAdDvBotjTWdyLxt.webp",
    houseType: "ทาวน์โฮม 2 ชั้น",
    location: "บางพลี",
    cashback: "เงินเหลือ 4 แสน",
  },
  {
    id: 2,
    name: "คุณแอน",
    role: "พนักงานบริษัท เทพารักษ์",
    text: "ซื้อบ้านหลังแรกในชีวิต ตอนแรกกลัวกู้ไม่ผ่าน แต่พี่วิวช่วยเตรียมเอกสารให้หมด กู้ผ่านภายใน 2 สัปดาห์ ยังมีเงินเหลือติดมืออีก ขอบคุณมากค่ะ",
    stars: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover2-h8MGGUMvzskKvJ72GRPveY.webp",
    houseType: "ทาวน์โฮม 2 ชั้น",
    location: "เทพารักษ์",
    cashback: "เงินเหลือ 5 แสน",
  },
  {
    id: 3,
    name: "ครอบครัวคุณโอ๊ต",
    role: "พนักงานบริษัท บางนา",
    text: "หาบ้านมานานมาก จนเจอวิวต้น โฮม บ้านรีโนเวทใหม่ทั้งหลัง สวยเหมือนบ้านใหม่เลย ลูกชอบมาก ราคาถูกกว่าบ้านจัดสรรเยอะ คุ้มสุดๆ ครับ",
    stars: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover3-6auNGaGb8retTwYpbWAdjK.webp",
    houseType: "ทาวน์โฮม 3 ชั้น",
    location: "บางนา",
    cashback: "เงินเหลือ 6 แสน",
  },
  {
    id: 4,
    name: "คุณสมศรี & คุณประเสริฐ",
    role: "แม่ค้าตลาดบางบ่อ",
    text: "ขายของมาตลอด อยากมีบ้านเป็นของตัวเอง พี่ต้นแนะนำบ้านหลังนี้ ราคาดี ทำเลดี ใกล้ตลาด กู้ผ่านง่ายมาก ได้เงินเหลือมาลงทุนต่อ ขอบคุณมากค่ะ",
    stars: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover4-LKk794h7u39zDfPXht2TkX.webp",
    houseType: "ทาวน์โฮม 2 ชั้น",
    location: "บางบ่อ",
    cashback: "เงินเหลือ 3.5 แสน",
  },
  {
    id: 5,
    name: "คุณเบนซ์",
    role: "ช่างเทคนิค นิคมบางพลี",
    text: "ทำงานโรงงานมา 5 ปี เก็บเงินดาวน์ไม่ทัน แต่พี่วิวบอกว่ากู้ได้เกินราคาบ้าน ไม่ต้องวางดาวน์เลย ได้บ้านสวยพร้อมเงินเหลือ ดีใจมากครับ",
    stars: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover5-9X8VNHMhcBY5WaWGvM2ibv.webp",
    houseType: "ทาวน์โฮม 2 ชั้น",
    location: "บางพลี",
    cashback: "เงินเหลือ 5.5 แสน",
  },
  {
    id: 6,
    name: "คุณมิ้ง & คุณฝน",
    role: "พนักงานโรงงาน ลาดกระบัง",
    text: "เพื่อนแนะนำมา สองคนทำงานโรงงานเหมือนกัน อยากมีบ้านใกล้ที่ทำงาน พี่วิวหาบ้านให้ตรงใจมาก รีโนเวทสวย ราคาดี กู้ผ่านทั้งคู่เลยค่ะ",
    stars: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover6-KM2fpJc5RN2hTMJih8MZ7P.webp",
    houseType: "ทาวน์โฮม 2 ชั้น",
    location: "ลาดกระบัง",
    cashback: "เงินเหลือ 4.5 แสน",
  },
  {
    id: 7,
    name: "คุณสมชาย & คุณนุ้ย",
    role: "พนักงานบริษัท บางนา",
    text: "บ้านสวยมากครับ รีโนเวทใหม่หมดทั้งหลัง ระบบไฟ ประปา กระเบื้อง ทุกอย่างใหม่ เหมือนซื้อบ้านใหม่ในราคาบ้านมือสอง พี่ต้นดูแลดีมากครับ",
    stars: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover7-9jRSfLHYoEYbScJLaoekkC.webp",
    houseType: "ทาวน์โฮม 2 ชั้น",
    location: "บางนา",
    cashback: "เงินเหลือ 5 แสน",
  },
  {
    id: 8,
    name: "คุณเจน",
    role: "พนักงานโรงงาน บางพลี",
    text: "เป็นสาวโรงงาน เงินเดือนไม่เยอะ แต่พี่วิวช่วยวางแผนการเงินให้ กู้ผ่านธนาคารง่ายมาก ได้บ้านสวย 3 ชั้น ใกล้ที่ทำงาน มีเงินเหลือไว้ซื้อเฟอร์นิเจอร์ด้วย ดีใจสุดๆ ค่ะ",
    stars: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover8-32yxMdqf6tv97aEBaiz2fZ.webp",
    houseType: "ทาวน์โฮม 3 ชั้น",
    location: "บางพลี",
    cashback: "เงินเหลือ 4 แสน",
  },
  {
    id: 9,
    name: "ครอบครัวคุณวรรณ",
    role: "ข้าราชการ สมุทรปราการ",
    text: "ซื้อให้แม่อยู่ค่ะ บ้านชั้นเดียวรีโนเวทใหม่ ทำเลดี ใกล้ตลาด ใกล้โรงพยาบาล แม่ชอบมาก พี่วิวพี่ต้นดูแลดีมาก ช่วยเรื่องกู้ให้ทุกขั้นตอน ขอบคุณมากค่ะ",
    stars: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover9-GUSmfHyztyWcNwPr34Ur2Q.webp",
    houseType: "ทาวน์โฮม 2 ชั้น",
    location: "สมุทรปราการ",
    cashback: "เงินเหลือ 3 แสน",
  },
  {
    id: 10,
    name: "คุณบอส & คุณมิ้นท์",
    role: "พนักงานบริษัท แบริ่ง",
    text: "แต่งงานกันใหม่ อยากมีบ้านเป็นของตัวเอง งบไม่เยอะ พี่วิวแนะนำบ้านรีโนเวทหลังนี้ สวยมาก ราคาดี กู้ได้เกินราคาบ้าน มีเงินเหลือไปฮันนีมูนอีก ฮ่าๆ ขอบคุณมากครับ",
    stars: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover10-WdjGsonnLNUrPj3PRaKJxU.webp",
    houseType: "ทาวน์โฮม 2 ชั้น",
    location: "แบริ่ง",
    cashback: "เงินเหลือ 5 แสน",
  },
];
