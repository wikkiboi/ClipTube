import { categoriesRouter } from "../../modules/categories/server/procedures";
import { studioRouter } from "../../modules/studio/server/procedures";
import { videoViewsRouter } from "../../modules/video-views/procedures";
import { videosRouter } from "../../modules/videos/server/procedures";
import { createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  videos: videosRouter,
  videoViews: videoViewsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;

// Copied from https://trpc.io/docs/client/react/server-components sample backend
