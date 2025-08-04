# Dev Notes (Formatted)

## Next.js v15 Notes

- Dynamic APIs must be marked `async`.
- Await `params` before accessing properties in dynamic routes.
- Code migration: `npx @next/codemod@canary next-async-request-api`.
- Route groups (e.g. `(app)`) are not included in the URL path.
- Server Components are async-only. `useEffect` is not usable in them.

---

## Clerk Auth Setup

1. Create Clerk app → `https://dashboard.clerk.com`.
2. Add keys to `.env.local`.
3. In `middleware.ts`, define protected routes logic.
4. Wrap root layout with `<ClerkProvider />`.
5. Use Clerk components/hooks:
   - `<SignedIn>`, `<SignedOut>`, `<UserButton>`, `<SignInButton>`, `<UserCircleIcon />`
   - `useClerk()`, `useAuth()`

---

## Clerk Webhooks + Ngrok (Local Dev)

- Sync Clerk users to DB using webhooks.
- For development build, expose localhost via [ngrok](`https://dashboard.ngrok.com/get-started/setup/linux`).
- Use static ngrok domain in Clerk dashboard.
- Install `svix` (for webhook parsing).
- Use `concurrently` to run both the app and tunnel.

---

## tRPC v11 Tips

- End-to-end typesafety between server & client.
- Supports **prefetching** in Server Components → faster load.
- `prefetch()` (server) pairs with `useSuspenseQuery()` (client).
- Hydration should happen where you prefetch (usually `page.tsx`, not `layout.tsx`).
- Wrap client components inside server components when using prefetch.
- Always use `superjson` for complex object serialization.

## Protected Procedure Pattern

```ts
export const protectedProcedure = t.procedure.use(async function isAuthed(
  opts
) {
  const { ctx } = opts;
  if (!ctx.clerkUserId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({ ctx: { ...ctx } });
});
```

## Drizzle ORM Usage

- Connect via Neon.tech.

- Schema-first migration workflow.

- Command:

  - `bunx drizzle-kit push`
  - `bunx drizzle-kit studio`

- Soft Relations:
  - Define relations without foreign keys (for DBs that don't support them).
  - Foreign keys and relations are decoupled.
  - Docs: `https://orm.drizzle.team/docs/relations#foreign-keys`

## Aggregate Queries

- Always group aggregate queries with .groupBy() and use .as("alias"):

```ts
count(comments.id).as("count").groupBy(parentId);
```

## Rate Limiting with Upstash

- SDK: @upstash/ratelimit
- Docs: `https://upstash.com/docs/redis/sdks/ratelimit-ts/traffic-protection`
- Add Redis URL and token to .env.

## Mux Integration

- Docs: `https://www.mux.com/docs/integrations/next-js`
- Use passthrough metadata (e.g., user ID) to track video ownership.
- Webhooks:
  - `video.asset.created`: receives `muxAssetId`
  - `video.asset.ready`: `muxPlaybackId`, `duration`, `thumbnail`, etc.
  - `video.asset.errored`, `video.asset.track.ready` (for subtitles)
- Database schema:

```ts
muxStatus: string;
muxAssetId: string;
muxUploadId: string;
muxPlaybackId: string;
muxTrackId: string | null;
```

Handle webhook payload:

```ts
const data = payload.data as VideoAssetReadyWebhookEvent["data"];
```

## UploadThing - Thumbnail Upload

- Docs: `https://docs.uploadthing.com/getting-started/appdir`
- Used for uploading thumbnails or restoring originals from Mux.
- Store thumbnail/preview as keys, not full URLs.
- Avoid reliance on image.mux.com URLs.

## Subscriptions Schema

- Distinguish between subscriber & subscription using separate foreign keys:
- `subscription_viewer_id_fkey` (subscriber)
- `subcription_creator_id_fkey` (creator)

## React Suspense

- Use `<Suspense>` for loading skeletons.
- Adding a `key` to `<Suspense>` forces a re-render when the key changes.
- Prefetch + suspense pattern improves UX significantly.

## Utilities & Misc

- `cn()` – custom tailwind class utility.
- `trpc.useUtils()` – used for cache invalidation.
- Use `prefetchInfinite` + `useSuspenseInfiniteQuery` for infinite scroll:

```ts
const utils = trpc.useUtils();
trpc.create({ onSuccess: () => utils.studio.getMany.invalidate() });
```

- `eq()` overload issues usually caused by nullable/undefined data.

Note: This is a mix of documentation, setup instructions, and edge-case learnings. Feel free to prune for blog posts, onboarding, or maintenance logs.
