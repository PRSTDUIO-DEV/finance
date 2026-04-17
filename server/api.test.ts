import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock db functions
vi.mock("./db", () => ({
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
  getAllHouses: vi.fn().mockResolvedValue([
    {
      id: 1,
      title: "ทาวน์โฮม 2 ชั้น บางนา",
      slug: "townhome-bangna-1",
      price: 1890000,
      loanAmount: 2400000,
      cashback: 510000,
      bedrooms: 3,
      bathrooms: 2,
      area: "21 ตร.วา",
      floors: 2,
      type: "ทาวน์โฮม 2 ชั้น",
      location: "บางนา",
      district: "บางนา",
      province: "สมุทรปราการ",
      mapUrl: "https://maps.google.com",
      image: "https://example.com/house1.jpg",
      features: JSON.stringify(["รีโนเวทใหม่ทั้งหลัง", "ใกล้ BTS"]),
      isActive: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  getHouseById: vi.fn().mockImplementation(async (id: number) => {
    if (id === 1) {
      return {
        id: 1,
        title: "ทาวน์โฮม 2 ชั้น บางนา",
        slug: "townhome-bangna-1",
        price: 1890000,
        features: JSON.stringify(["รีโนเวทใหม่ทั้งหลัง"]),
      };
    }
    return null;
  }),
  getAllReviews: vi.fn().mockResolvedValue([
    {
      id: 1,
      name: "คุณสมหญิง",
      role: "พนักงานโรงงาน",
      text: "ดีมากค่ะ",
      stars: 5,
      image: "https://example.com/review1.jpg",
      houseType: "ทาวน์โฮม 2 ชั้น",
      location: "บางนา",
      cashback: "เงินเหลือ 5 แสน",
      createdAt: new Date(),
    },
  ]),
  getAllArticles: vi.fn().mockResolvedValue([
    {
      id: 1,
      title: "5 เคล็ดลับซื้อบ้าน",
      slug: "5-tips-buy-house",
      excerpt: "เคล็ดลับดีๆ",
      body: "# เนื้อหา",
      category: "คู่มือซื้อบ้าน",
      keywords: JSON.stringify(["บ้านมือสอง", "สมุทรปราการ"]),
      readTime: 5,
      publishDate: "2026-03-15",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  getArticleBySlug: vi.fn().mockImplementation(async (slug: string) => {
    if (slug === "5-tips-buy-house") {
      return {
        id: 1,
        title: "5 เคล็ดลับซื้อบ้าน",
        slug: "5-tips-buy-house",
        excerpt: "เคล็ดลับดีๆ",
        body: "# เนื้อหา",
        category: "คู่มือซื้อบ้าน",
        keywords: JSON.stringify(["บ้านมือสอง", "สมุทรปราการ"]),
        readTime: 5,
        publishDate: "2026-03-15",
      };
    }
    return null;
  }),
  createInquiry: vi.fn().mockResolvedValue({ id: 1 }),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("houses API", () => {
  it("lists all houses with parsed features", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const houses = await caller.houses.list();

    expect(houses).toHaveLength(1);
    expect(houses[0].title).toBe("ทาวน์โฮม 2 ชั้น บางนา");
    expect(houses[0].features).toEqual(["รีโนเวทใหม่ทั้งหลัง", "ใกล้ BTS"]);
    expect(houses[0].price).toBe(1890000);
  });

  it("gets a house by id", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const house = await caller.houses.getById({ id: 1 });

    expect(house).not.toBeNull();
    expect(house!.title).toBe("ทาวน์โฮม 2 ชั้น บางนา");
    expect(house!.features).toEqual(["รีโนเวทใหม่ทั้งหลัง"]);
  });

  it("returns null for non-existent house", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const house = await caller.houses.getById({ id: 999 });

    expect(house).toBeNull();
  });
});

describe("reviews API", () => {
  it("lists all reviews", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const reviews = await caller.reviews.list();

    expect(reviews).toHaveLength(1);
    expect(reviews[0].name).toBe("คุณสมหญิง");
    expect(reviews[0].stars).toBe(5);
  });
});

describe("articles API", () => {
  it("lists all articles with parsed keywords", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const articles = await caller.articles.list();

    expect(articles).toHaveLength(1);
    expect(articles[0].title).toBe("5 เคล็ดลับซื้อบ้าน");
    expect(articles[0].keywords).toEqual(["บ้านมือสอง", "สมุทรปราการ"]);
  });

  it("gets an article by slug", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const article = await caller.articles.getBySlug({ slug: "5-tips-buy-house" });

    expect(article).not.toBeNull();
    expect(article!.title).toBe("5 เคล็ดลับซื้อบ้าน");
    expect(article!.body).toBe("# เนื้อหา");
  });

  it("returns null for non-existent article", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const article = await caller.articles.getBySlug({ slug: "non-existent" });

    expect(article).toBeNull();
  });
});

describe("inquiries API", () => {
  it("creates an inquiry successfully", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.inquiries.create({
      name: "ทดสอบ",
      phone: "0812345678",
      lineId: "@test",
      houseId: 1,
      message: "สนใจบ้าน",
    });

    expect(result).toEqual({ id: 1 });
  });

  it("creates an inquiry with minimal fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.inquiries.create({
      name: "ทดสอบ",
      phone: "0812345678",
    });

    expect(result).toEqual({ id: 1 });
  });
});
