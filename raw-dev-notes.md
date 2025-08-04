# Dev Notes

Written on Obsidian

- Next.js v15
  `params` should be awaited before using its properties
  Dynamic APIs are async
  `npx @next/codemod@canary next-async-request-api`

- Server Components are asynchronous, useEffect cannot work in server component
- Route Group - folder not included in the route's URL path

- Clerk setup

  - Create clerk app in clerk webpage
  - Copy keys to `.env.local`
  - `middleware.ts` file add auth protected route logic
  - Wrap root layout in `ClerkProvider`
  - Clerk components `SignedIn`, `SignedOut`, `UserButton`, `SignInButton`, `UserCircleIcon`, `useClerk`, `useAuth` , etc.
  - `https://dashboard.clerk.com`

- Webhooks

  - Helps synchronize Clerk to database
  - Get local tunnel (ngrok): Help expose app url to the public in development mode
  - `https://dashboard.ngrok.com/get-started/setup/linux`
  - Also get static domain (also provided by ngrok) for static url
  - Add script to concurrently run local tunnel & app
  - Connect webhook in Clerk
  - `https://clerk.com/docs/webhooks/overview`
  - Run localhost and static domain concurrently with npm concurrently
  - Install svix (stated in clerk webhook doc)

- DrizzleORM

  - `https://neon.tech/` - Connect pg db remotely
  - `https://orm.drizzle.team/docs/get-started/postgresql-new`
  - Only ORM with both relational and SQL-like query APIs
  - Serverless by default
  - Forces us to understand SQL queries
  - `bunx drizzle-kit push` to change/update schema
  - `bunx drizzle-kit studio` to see overview of database state

- tRPC

  - end-to-end typesafety
  - making procedures allows us to use hooks such as useQuery, useMutation, etc.
  - v11 allows us to do authenticated prefetching
  - **Prefetching** - render as you fetch, faster load time, parallel data loading. Can also leverage React Server Components as "loaders"
  - We can wrap client components within server components, in which the server component data is prefetched and stored in cache where the child client component(s) uses before it is rendered.
  - Once the server component prefetches, every subsequent query/data validation is done on the client component (the one with useSuspense inside of it)
  - `https://i.imgur.com/TjLVkq4.png`
  - `trpc.hello.prefetch` (server component) is always to be matched with `trpc.hello.useSuspenseQuery` (client component)
  - `createTRPCContext` - use to add cxt to be used i.e. authorized user id.
  - `export const protectedProcedure = t.procedure.use(async function isAuthed(opts) {
 const { ctx } = opts;
  if (!ctx.clerkUserId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({ctx: {...ctx}});});`
  - We use superjson, which allows us to return any types from server/API-resolver and use in the client without having to recreate the objects from JSON
  - TRPCContext will always run regardless of whether or not the procedure is public
  - Wherever you prefetch is where you should also hydrate the client and also set the component to dynamic
  - Prefetching mainly works in `page.tsx` and not in `layout.tsx`

- Rate Limiting - we use upstash/redis and upstash/ratelimit

  - Get upstash redis url/token and paste into `.env`
  - `https://upstash.com/docs/redis/sdks/ratelimit-ts/traffic-protection`

- react-error-boundary

- `cn` - use for custom tailwind function; can be used to make dynamic tailwind classes

- Drizzle soft relations

  - Essentially declaring relations in schema explicitly outside of table even when a foreign key is declared
  - Difference between relations & foreign keys
  - `https://orm.drizzle.team/docs/relations#foreign-keys`
  - TLDR: You can define relations w/o foreign keys and vice versa, which allows them to be used w/ dbs that do not support foreign keys
  - Can use sql joins instead of relations

- trpc prefetchInfinite --> useSuspenseInfiniteQuery with getMany

  - Once the server component prefetches, every subsequent query/data validation is done on the client component (the one with useSuspense inside of it)
  - `const utils = trpc.useUtils()` --> `trpc.create({onSuccess: () => {utils.studio.getMany.invalidate();} })`

- Mux - Video Uploader Service

  - `https://www.mux.com/docs/integrations/next-js`
  - passthrough: stores any metadata like user id when uploading video.
  - We use webhooks to receive/send events to/from Mux.
  - Webhooks to not store any user metadata; they are anonymous
  - Passthrough will allow us to track down who uploaded what file via passthrough since webhooks will not do so for us
  - Make sure to connect Mux asset id entity with video entity in app database
  - (In the db schema):
    - muxStatus: transcribing, uploading, errors, etc.
    - muxAssetId: automatically generated
    - muxUploadId: generated in videoRouter create which we will pass in manually
    - muxPlaybackId: automatically generated
    - muxTrackId/Status: generated if the asset has subtitles
  - Always make sure to return success for webhook when necessary since it may shut down the webhook otherwise
  - eq - No overload matches this call; this has to do with data validation. throw error if data is undefined/null to fix eq error
  - Mux webhook will return payload data to use for the backend in the form:
  - `const data = payload.data as VideoAssetReadyWebhookEvent["data"];`
  - video.asset.created - mux assetId & status
  - video.asset.ready - Mux playbackId, thumbnailUrl, previewUrl, duration
  - video.asset.errored -
  - video.asset.deleted -
  - video.asset.track.ready - will only fire if video has audio + enabled subtitles

- uploadthing

  - `https://docs.uploadthing.com/getting-started/appdir`
  - Upload service we will use to upload thumbnails or restore original generated thumbnail by Mux
  - Thumbnail Upload/Restore Functionality
  - Add thumbnail/preview keys in schema so that the thumbnail/preview are not tied to the url but the key instead.
  - we will not grab the url from image.mux.com anymore but instead from uploadthing

- subscriber/subscription schema

  - Differentiate between user subscriber/subscription via foreign key created from subscription relation based on subscription schema.
  - subscriber will have relation name "subscription_viewer_id_fkey"
  - subscription will have relation name "subcription_creator_id_fkey"

- Aggregate queries in database

  - When doing aggregate queries (count, sum, min, max) inside common table expressions (ex. `count()` in the form of `count(comments.id).as("count")` ) they must be grouped using`groupBy()` --> `groupBy(parentId)` and also use an alias `.as("count")` , else it may return incorrect data
  - Common table expressions would be `$with` , `$count` , etc.
  - `https://orm.drizzle.team/docs/insert#with-insert-clause`

- React Suspense for Skeleton
  - Giving Suspense component a key makes it reload/rerender when changed
  - Gives User loading experience
