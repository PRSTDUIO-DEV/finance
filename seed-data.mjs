import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const conn = await mysql.createConnection(process.env.DATABASE_URL);

// ===== HOUSES =====
const housesData = [
  {
    title: "ทาวน์โฮม 2 ชั้น ซ.สุขุมวิท 113 บางนา",
    type: "ทาวน์โฮม",
    floors: 2, bedrooms: 3, bathrooms: 2,
    area: "21 ตร.วา",
    price: 1890000, priceLabel: "1,890,000",
    loanAmount: 2400000, loanLabel: "2,400,000",
    cashBack: 510000, cashBackLabel: "510,000",
    location: "ซ.สุขุมวิท 113 บางนา", district: "บางนา",
    mapUrl: "https://maps.google.com/?q=13.6631,100.6048",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d100.6048!3d13.6631",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house1_66d23f20.jpg",
    features: JSON.stringify(["รีโนเวทใหม่ทั้งหลัง", "ห้องครัวบิลท์อิน", "จอดรถ 1 คัน", "ใกล้ BTS บางนา"]),
    status: "available", sortOrder: 1
  },
  {
    title: "ทาวน์โฮม 3 ชั้น หมู่บ้านพฤกษา บางพลี",
    type: "ทาวน์โฮม",
    floors: 3, bedrooms: 3, bathrooms: 3,
    area: "24 ตร.วา",
    price: 2290000, priceLabel: "2,290,000",
    loanAmount: 2800000, loanLabel: "2,800,000",
    cashBack: 510000, cashBackLabel: "510,000",
    location: "หมู่บ้านพฤกษา บางพลี", district: "บางพลี",
    mapUrl: "https://maps.google.com/?q=13.5937,100.7053",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.5!2d100.7053!3d13.5937",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house2_bc3c1caf.jpg",
    features: JSON.stringify(["รีโนเวทใหม่ทั้งหลัง", "3 ชั้น พื้นที่ใช้สอยเยอะ", "จอดรถ 2 คัน", "ใกล้ตลาดบางพลี"]),
    status: "available", sortOrder: 2
  },
  {
    title: "ทาวน์โฮม 2 ชั้น ซ.เทพารักษ์ เมืองสมุทรปราการ",
    type: "ทาวน์โฮม",
    floors: 2, bedrooms: 2, bathrooms: 2,
    area: "18 ตร.วา",
    price: 1690000, priceLabel: "1,690,000",
    loanAmount: 2200000, loanLabel: "2,200,000",
    cashBack: 510000, cashBackLabel: "510,000",
    location: "ซ.เทพารักษ์ เมืองสมุทรปราการ", district: "เมืองสมุทรปราการ",
    mapUrl: "https://maps.google.com/?q=13.6004,100.6370",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0!2d100.6370!3d13.6004",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house3_e4c1811b.jpg",
    features: JSON.stringify(["รีโนเวทใหม่ทั้งหลัง", "ใกล้ห้างอิมพีเรียล", "จอดรถ 1 คัน", "ทำเลดี ใกล้แหล่งงาน"]),
    status: "available", sortOrder: 3
  },
  {
    title: "ทาวน์โฮม 3 ชั้น หมู่บ้านสิรารมย์ บางบ่อ",
    type: "ทาวน์โฮม",
    floors: 3, bedrooms: 4, bathrooms: 3,
    area: "28 ตร.วา",
    price: 2590000, priceLabel: "2,590,000",
    loanAmount: 3100000, loanLabel: "3,100,000",
    cashBack: 510000, cashBackLabel: "510,000",
    location: "หมู่บ้านสิรารมย์ บางบ่อ", district: "บางบ่อ",
    mapUrl: "https://maps.google.com/?q=13.5500,100.7800",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.0!2d100.7800!3d13.5500",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house4_efeb0866.jpg",
    features: JSON.stringify(["รีโนเวทใหม่ทั้งหลัง", "4 ห้องนอน กว้างขวาง", "จอดรถ 2 คัน", "หมู่บ้านเงียบสงบ"]),
    status: "reserved", sortOrder: 4
  },
  {
    title: "ทาวน์โฮม 2 ชั้น ซ.ลาซาล บางนา",
    type: "ทาวน์โฮม",
    floors: 2, bedrooms: 3, bathrooms: 2,
    area: "22 ตร.วา",
    price: 1990000, priceLabel: "1,990,000",
    loanAmount: 2500000, loanLabel: "2,500,000",
    cashBack: 510000, cashBackLabel: "510,000",
    location: "ซ.ลาซาล บางนา", district: "บางนา",
    mapUrl: "https://maps.google.com/?q=13.6580,100.6150",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8!2d100.6150!3d13.6580",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house5_f29f7bb1.jpg",
    features: JSON.stringify(["รีโนเวทใหม่ทั้งหลัง", "ใกล้ BTS แบริ่ง", "จอดรถ 1 คัน", "ใกล้ห้างเมกาบางนา"]),
    status: "available", sortOrder: 5
  },
  {
    title: "ทาวน์โฮม 2 ชั้น หมู่บ้านทิพวัล บางพลี",
    type: "ทาวน์โฮม",
    floors: 2, bedrooms: 3, bathrooms: 2,
    area: "20 ตร.วา",
    price: 1790000, priceLabel: "1,790,000",
    loanAmount: 2300000, loanLabel: "2,300,000",
    cashBack: 510000, cashBackLabel: "510,000",
    location: "หมู่บ้านทิพวัล บางพลี", district: "บางพลี",
    mapUrl: "https://maps.google.com/?q=13.5700,100.7200",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.8!2d100.7200!3d13.5700",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/house6_056afa69.jpg",
    features: JSON.stringify(["รีโนเวทใหม่ทั้งหลัง", "ใกล้ตลาดทิพวัล", "จอดรถ 1 คัน", "ราคาคุ้มค่าที่สุด"]),
    status: "available", sortOrder: 6
  }
];

// ===== REVIEWS =====
const reviewsData = [
  { name: "คุณนิด & คุณเอก", role: "พนักงานโรงงาน บางพลี", text: "ไม่คิดว่าจะมีบ้านเป็นของตัวเองได้ พี่วิวกับพี่ต้นช่วยทุกอย่าง ตั้งแต่เลือกบ้านจนกู้ผ่าน ได้เงินเหลือมาตกแต่งบ้านอีก ดีใจมากค่ะ", stars: 5, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover1-FXrNnprAdDvBotjTWdyLxt.webp", houseType: "ทาวน์โฮม 2 ชั้น", location: "บางพลี", cashback: "เงินเหลือ 4 แสน", sortOrder: 1 },
  { name: "คุณแอน", role: "พนักงานบริษัท เทพารักษ์", text: "ซื้อบ้านหลังแรกในชีวิต ตอนแรกกลัวกู้ไม่ผ่าน แต่พี่วิวช่วยเตรียมเอกสารให้หมด กู้ผ่านภายใน 2 สัปดาห์ ยังมีเงินเหลือติดมืออีก ขอบคุณมากค่ะ", stars: 5, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover2-h8MGGUMvzskKvJ72GRPveY.webp", houseType: "ทาวน์โฮม 2 ชั้น", location: "เทพารักษ์", cashback: "เงินเหลือ 5 แสน", sortOrder: 2 },
  { name: "ครอบครัวคุณโอ๊ต", role: "พนักงานบริษัท บางนา", text: "หาบ้านมานานมาก จนเจอวิวต้น โฮม บ้านรีโนเวทใหม่ทั้งหลัง สวยเหมือนบ้านใหม่เลย ลูกชอบมาก ราคาถูกกว่าบ้านจัดสรรเยอะ คุ้มสุดๆ ครับ", stars: 5, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover3-6auNGaGb8retTwYpbWAdjK.webp", houseType: "ทาวน์โฮม 3 ชั้น", location: "บางนา", cashback: "เงินเหลือ 6 แสน", sortOrder: 3 },
  { name: "คุณสมศรี & คุณประเสริฐ", role: "แม่ค้าตลาดบางบ่อ", text: "ขายของมาตลอด อยากมีบ้านเป็นของตัวเอง พี่ต้นแนะนำบ้านหลังนี้ ราคาดี ทำเลดี ใกล้ตลาด กู้ผ่านง่ายมาก ได้เงินเหลือมาลงทุนต่อ ขอบคุณมากค่ะ", stars: 5, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover4-LKk794h7u39zDfPXht2TkX.webp", houseType: "ทาวน์โฮม 2 ชั้น", location: "บางบ่อ", cashback: "เงินเหลือ 3.5 แสน", sortOrder: 4 },
  { name: "คุณเบนซ์", role: "ช่างเทคนิค นิคมบางพลี", text: "ทำงานโรงงานมา 5 ปี เก็บเงินดาวน์ไม่ทัน แต่พี่วิวบอกว่ากู้ได้เกินราคาบ้าน ไม่ต้องวางดาวน์เลย ได้บ้านสวยพร้อมเงินเหลือ ดีใจมากครับ", stars: 5, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover5-9X8VNHMhcBY5WaWGvM2ibv.webp", houseType: "ทาวน์โฮม 2 ชั้น", location: "บางพลี", cashback: "เงินเหลือ 5.5 แสน", sortOrder: 5 },
  { name: "คุณมิ้ง & คุณฝน", role: "พนักงานโรงงาน ลาดกระบัง", text: "เพื่อนแนะนำมา สองคนทำงานโรงงานเหมือนกัน อยากมีบ้านใกล้ที่ทำงาน พี่วิวหาบ้านให้ตรงใจมาก รีโนเวทสวย ราคาดี กู้ผ่านทั้งคู่เลยค่ะ", stars: 5, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover6-KM2fpJc5RN2hTMJih8MZ7P.webp", houseType: "ทาวน์โฮม 2 ชั้น", location: "ลาดกระบัง", cashback: "เงินเหลือ 4.5 แสน", sortOrder: 6 },
  { name: "คุณสมชาย & คุณนุ้ย", role: "พนักงานบริษัท บางนา", text: "บ้านสวยมากครับ รีโนเวทใหม่หมดทั้งหลัง ระบบไฟ ประปา กระเบื้อง ทุกอย่างใหม่ เหมือนซื้อบ้านใหม่ในราคาบ้านมือสอง พี่ต้นดูแลดีมากครับ", stars: 5, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover7-9jRSfLHYoEYbScJLaoekkC.webp", houseType: "ทาวน์โฮม 2 ชั้น", location: "บางนา", cashback: "เงินเหลือ 5 แสน", sortOrder: 7 },
  { name: "คุณเจน", role: "พนักงานโรงงาน บางพลี", text: "เป็นสาวโรงงาน เงินเดือนไม่เยอะ แต่พี่วิวช่วยวางแผนการเงินให้ กู้ผ่านธนาคารง่ายมาก ได้บ้านสวย 3 ชั้น ใกล้ที่ทำงาน มีเงินเหลือไว้ซื้อเฟอร์นิเจอร์ด้วย ดีใจสุดๆ ค่ะ", stars: 5, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover8-32yxMdqf6tv97aEBaiz2fZ.webp", houseType: "ทาวน์โฮม 3 ชั้น", location: "บางพลี", cashback: "เงินเหลือ 4 แสน", sortOrder: 8 },
  { name: "ครอบครัวคุณวรรณ", role: "ข้าราชการ สมุทรปราการ", text: "ซื้อให้แม่อยู่ค่ะ บ้านชั้นเดียวรีโนเวทใหม่ ทำเลดี ใกล้ตลาด ใกล้โรงพยาบาล แม่ชอบมาก พี่วิวพี่ต้นดูแลดีมาก ช่วยเรื่องกู้ให้ทุกขั้นตอน ขอบคุณมากค่ะ", stars: 5, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover9-GUSmfHyztyWcNwPr34Ur2Q.webp", houseType: "ทาวน์โฮม 2 ชั้น", location: "สมุทรปราการ", cashback: "เงินเหลือ 3 แสน", sortOrder: 9 },
  { name: "คุณบอส & คุณมิ้นท์", role: "พนักงานบริษัท แบริ่ง", text: "แต่งงานกันใหม่ อยากมีบ้านเป็นของตัวเอง งบไม่เยอะ พี่วิวแนะนำบ้านรีโนเวทหลังนี้ สวยมาก ราคาดี กู้ได้เกินราคาบ้าน มีเงินเหลือไปฮันนีมูนอีก ฮ่าๆ ขอบคุณมากครับ", stars: 5, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/handover10-WdjGsonnLNUrPj3PRaKJxU.webp", houseType: "ทาวน์โฮม 2 ชั้น", location: "แบริ่ง", cashback: "เงินเหลือ 5 แสน", sortOrder: 10 }
];

// ===== ARTICLES =====
const articlesData = [
  { slug: "5-tips-buy-secondhand-house-samutprakan", title: "5 เคล็ดลับ ซื้อบ้านมือสองสมุทรปราการ ไม่ให้โดนหลอก", excerpt: "รวมเทคนิคสำคัญที่ต้องรู้ก่อนซื้อบ้านมือสอง ตั้งแต่การตรวจสอบโครงสร้าง เช็คเอกสารสิทธิ์ ไปจนถึงเทคนิคต่อรองราคา", keywords: JSON.stringify(["บ้านมือสอง สมุทรปราการ", "ซื้อบ้านมือสอง", "เคล็ดลับซื้อบ้าน"]), category: "คู่มือซื้อบ้าน", readTime: 8, publishDate: "2026-03-15", body: "PLACEHOLDER_ARTICLE_1", sortOrder: 1 },
  { slug: "how-to-get-home-loan-exceed-price", title: "กู้บ้านเกินราคา ทำยังไง? มีเงินเหลือติดมือจริงไหม?", excerpt: "อธิบายขั้นตอนการกู้บ้านเกินราคาแบบเข้าใจง่าย ทำไมธนาคารถึงปล่อยกู้เกินราคาซื้อ", keywords: JSON.stringify(["กู้บ้านเกินราคา", "กู้เกินราคาบ้าน", "สินเชื่อบ้าน"]), category: "สินเชื่อบ้าน", readTime: 10, publishDate: "2026-03-20", body: "PLACEHOLDER_ARTICLE_2", sortOrder: 2 },
  { slug: "renovated-townhouse-vs-new-house", title: "ทาวน์โฮมรีโนเวท vs บ้านใหม่ อะไรคุ้มกว่า? เปรียบเทียบชัดๆ", excerpt: "เปรียบเทียบข้อดีข้อเสียระหว่างทาวน์โฮมรีโนเวทมือสองกับบ้านใหม่จากโครงการ", keywords: JSON.stringify(["ทาวน์โฮมรีโนเวท", "บ้านรีโนเวท vs บ้านใหม่"]), category: "เปรียบเทียบ", readTime: 7, publishDate: "2026-03-25", body: "PLACEHOLDER_ARTICLE_3", sortOrder: 3 },
  { slug: "documents-for-home-loan-factory-worker", title: "พนักงานโรงงาน เตรียมเอกสารอะไรบ้าง? กู้บ้านผ่านชัวร์", excerpt: "คู่มือเตรียมเอกสารกู้บ้านสำหรับพนักงานโรงงานโดยเฉพาะ", keywords: JSON.stringify(["เอกสารกู้บ้าน", "พนักงานโรงงานกู้บ้าน"]), category: "สินเชื่อบ้าน", readTime: 6, publishDate: "2026-03-28", body: "PLACEHOLDER_ARTICLE_4", sortOrder: 4 },
  { slug: "best-areas-samutprakan-buy-house", title: "รวม 5 ทำเลทองสมุทรปราการ ซื้อบ้านตรงไหนดี? ราคาขึ้นทุกปี", excerpt: "แนะนำทำเลน่าซื้อบ้านในสมุทรปราการ ทั้งบางนา บางพลี เทพารักษ์ บางบ่อ และลาซาล", keywords: JSON.stringify(["ทำเลซื้อบ้าน สมุทรปราการ", "บ้านบางนา", "บ้านบางพลี"]), category: "ทำเลน่าสนใจ", readTime: 9, publishDate: "2026-04-01", body: "PLACEHOLDER_ARTICLE_5", sortOrder: 5 },
  { slug: "how-much-salary-to-buy-house", title: "เงินเดือนเท่าไหร่ ถึงซื้อบ้านได้? คำนวณให้ดูชัดๆ", excerpt: "คำนวณให้เห็นชัดว่าเงินเดือนแต่ละระดับ กู้บ้านได้เท่าไหร่ ผ่อนเดือนละเท่าไหร่", keywords: JSON.stringify(["เงินเดือนเท่าไหร่ซื้อบ้านได้", "กู้บ้านเงินเดือน 15000"]), category: "สินเชื่อบ้าน", readTime: 7, publishDate: "2026-04-03", body: "PLACEHOLDER_ARTICLE_6", sortOrder: 6 }
];

// Clear existing data and insert
console.log("🗑️  Clearing existing data...");
await conn.query("DELETE FROM houses");
await conn.query("DELETE FROM reviews");
await conn.query("DELETE FROM articles");

console.log("📦 Inserting houses...");
for (const h of housesData) {
  await conn.query(
    `INSERT INTO houses (title, type, floors, bedrooms, bathrooms, area, price, priceLabel, loanAmount, loanLabel, cashBack, cashBackLabel, location, district, mapUrl, mapEmbed, image, features, status, sortOrder) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [h.title, h.type, h.floors, h.bedrooms, h.bathrooms, h.area, h.price, h.priceLabel, h.loanAmount, h.loanLabel, h.cashBack, h.cashBackLabel, h.location, h.district, h.mapUrl, h.mapEmbed, h.image, h.features, h.status, h.sortOrder]
  );
}
console.log(`✓ Inserted ${housesData.length} houses`);

console.log("📦 Inserting reviews...");
for (const r of reviewsData) {
  await conn.query(
    `INSERT INTO reviews (name, role, text, stars, image, houseType, location, cashback, sortOrder) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [r.name, r.role, r.text, r.stars, r.image, r.houseType, r.location, r.cashback, r.sortOrder]
  );
}
console.log(`✓ Inserted ${reviewsData.length} reviews`);

console.log("📦 Inserting articles...");
for (const a of articlesData) {
  await conn.query(
    `INSERT INTO articles (slug, title, excerpt, keywords, category, readTime, publishDate, body, sortOrder) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [a.slug, a.title, a.excerpt, a.keywords, a.category, a.readTime, a.publishDate, a.body, a.sortOrder]
  );
}
console.log(`✓ Inserted ${articlesData.length} articles`);

// Verify
const [houseCount] = await conn.query("SELECT COUNT(*) as cnt FROM houses");
const [reviewCount] = await conn.query("SELECT COUNT(*) as cnt FROM reviews");
const [articleCount] = await conn.query("SELECT COUNT(*) as cnt FROM articles");
console.log(`\n✅ Database seeded successfully!`);
console.log(`   Houses: ${houseCount[0].cnt}`);
console.log(`   Reviews: ${reviewCount[0].cnt}`);
console.log(`   Articles: ${articleCount[0].cnt}`);

await conn.end();
