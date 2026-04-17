import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Houses table - บ้านที่ขาย
 */
export const houses = mysqlTable("houses", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  type: varchar("type", { length: 100 }).notNull(),
  floors: int("floors").notNull().default(2),
  bedrooms: int("bedrooms").notNull().default(2),
  bathrooms: int("bathrooms").notNull().default(2),
  area: varchar("area", { length: 50 }).notNull(),
  price: int("price").notNull(),
  priceLabel: varchar("priceLabel", { length: 50 }).notNull(),
  loanAmount: int("loanAmount").notNull(),
  loanLabel: varchar("loanLabel", { length: 50 }).notNull(),
  cashBack: int("cashBack").notNull(),
  cashBackLabel: varchar("cashBackLabel", { length: 50 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  district: varchar("district", { length: 100 }).notNull(),
  mapUrl: text("mapUrl"),
  mapEmbed: text("mapEmbed"),
  image: text("image"),
  features: text("features"), // JSON string array, parsed in application
  status: mysqlEnum("status", ["available", "reserved", "sold"]).default("available").notNull(),
  sortOrder: int("sortOrder").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type House = typeof houses.$inferSelect;
export type InsertHouse = typeof houses.$inferInsert;

/**
 * Reviews table - รีวิวลูกค้า
 */
export const reviews = mysqlTable("reviews", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  role: varchar("role", { length: 100 }).notNull(),
  text: text("text").notNull(),
  stars: int("stars").notNull().default(5),
  image: text("image"),
  houseType: varchar("houseType", { length: 100 }),
  location: varchar("location", { length: 100 }),
  cashback: varchar("cashback", { length: 100 }),
  sortOrder: int("sortOrder").default(0),
  isVisible: int("isVisible").default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Review = typeof reviews.$inferSelect;
export type InsertReview = typeof reviews.$inferInsert;

/**
 * Articles table - บทความ SEO
 */
export const articles = mysqlTable("articles", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 500 }).notNull(),
  excerpt: text("excerpt"),
  keywords: text("keywords"), // JSON string array, parsed in application
  category: varchar("category", { length: 100 }),
  readTime: int("readTime").default(5),
  publishDate: varchar("publishDate", { length: 20 }),
  body: text("body"),
  isPublished: int("isPublished").default(1),
  sortOrder: int("sortOrder").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Article = typeof articles.$inferSelect;
export type InsertArticle = typeof articles.$inferInsert;

/**
 * Contact inquiries table - ฟอร์มติดต่อ
 */
export const inquiries = mysqlTable("inquiries", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  lineId: varchar("lineId", { length: 100 }),
  houseId: int("houseId"),
  message: text("message"),
  status: mysqlEnum("status", ["new", "contacted", "completed"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = typeof inquiries.$inferInsert;
