import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getAllHouses, getHouseById, getAllReviews, getAllArticles, getArticleBySlug, createInquiry } from "./db";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  houses: router({
    list: publicProcedure.query(async () => {
      const rows = await getAllHouses();
      return rows.map(h => ({
        ...h,
        features: h.features ? JSON.parse(h.features) : [],
      }));
    }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const house = await getHouseById(input.id);
        if (!house) return null;
        return {
          ...house,
          features: house.features ? JSON.parse(house.features) : [],
        };
      }),
  }),

  reviews: router({
    list: publicProcedure.query(async () => {
      return getAllReviews();
    }),
  }),

  articles: router({
    list: publicProcedure.query(async () => {
      const rows = await getAllArticles();
      return rows.map(a => ({
        ...a,
        keywords: a.keywords ? JSON.parse(a.keywords) : [],
      }));
    }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const article = await getArticleBySlug(input.slug);
        if (!article) return null;
        return {
          ...article,
          keywords: article.keywords ? JSON.parse(article.keywords) : [],
        };
      }),
  }),

  inquiries: router({
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        phone: z.string().min(1),
        lineId: z.string().optional(),
        houseId: z.number().optional(),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return createInquiry({
          name: input.name,
          phone: input.phone,
          lineId: input.lineId ?? null,
          houseId: input.houseId ?? null,
          message: input.message ?? null,
        });
      }),
  }),
});

export type AppRouter = typeof appRouter;
