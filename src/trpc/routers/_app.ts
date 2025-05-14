import { categoriesRouter } from "../../modules/categories/server/procedures";
import { commentReactionsRouter } from "../../modules/comment-reactions/server/procedures";
import { commentsRouter } from "../../modules/comments/server/procedures";
import { studioRouter } from "../../modules/studio/server/procedures";
import { subscriptionsRouter } from "../../modules/subscriptions/ui/components/server/procedures";
import { suggestionsRouter } from "../../modules/suggestions/server/procedures";
import { videoReactionsRouter } from "../../modules/video-reactions/server/procedures";
import { videoViewsRouter } from "../../modules/video-views/server/procedures";
import { videosRouter } from "../../modules/videos/server/procedures";
import { createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  videos: videosRouter,
  videoViews: videoViewsRouter,
  videoReactions: videoReactionsRouter,
  subscriptions: subscriptionsRouter,
  comments: commentsRouter,
  commentReactions: commentReactionsRouter,
  suggestions: suggestionsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;

// Copied from https://trpc.io/docs/client/react/server-components sample backend
