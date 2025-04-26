import { categoriesRouter } from "../../modules/categories/server/procedures";
import { studioRouter } from "../../modules/studio/server/procedures";
import { videosRouter } from "../../modules/videos/server/procedures";
import { createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  videos: videosRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;

// Copied from https://trpc.io/docs/client/react/server-components sample backend
