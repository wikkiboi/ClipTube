# Clip Tube

A full-featured video-sharing platform. Users can upload videos, engage with content through likes, comments, and playlists, and navigate a sleek, responsive interface. Powered by **Next.js App Router**, **TRPC**, **Drizzle ORM**, **Mux**, and more.

![Screenshot](./public/banner.png)

## Tech Stack

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, ShadCN UI
- **Backend**: TRPC, Drizzle ORM, UploadThing, Redis
- **Database**: PostgreSQL via Drizzle ORM, Neon
- **Video Hosting**: Mux
- **Authentication**: Clerk
- **Deployment**: Vercel

## Features

-  User auth (OAuth & JWT via Clerk)
-  Upload and stream videos via Mux
-  Mux video player with views tracking
-  Comments, replies, and reactions
-  Like/dislike functionality for videos and comments
-  Playlist creation and management
-  Trending and subscribed feeds
-  Video and user search
-  TRPC-powered type-safe backend
-  Fully responsive layout

##  Folder Structure Overview

```
├─ app/ # Route handlers (App Router)
├─ modules/ # App features with respective tRPC procedures (videos, comments, playlists, etc.)
├─ components/ # Reusable UI (ShadCN + a couple custom-made)
├─ db/ # Drizzle schema & DB init
├─ lib/ # Mux, Redis, Upload helpers
├─ trpc/ # Routers and API logic
├─ hooks/ # Custom React hooks
├─ scripts/ # Seeders (e.g., categories)
```
## tRPC Routers & Procedures

| Router               | Queries                                                                       | Mutations                                            |
| -------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------- |
| **categories**       | `getMany`                                                                     | –                                                    |
| **comments**         | `getMany`                                                                     | `create`, `remove`                                   |
| **commentReactions** | –                                                                             | `like`, `dislike`                                    |
| **playlists**        | `getOne`, `getVideos`, `getMany`, `getManyForVideo`, `getLiked`, `getHistory` | `create`, `remove`, `addVideo`, `removeVideo`        |
| **search**           | `getMany`                                                                     | –                                                    |
| **studio**           | `getOne`, `getMany`                                                           | –                                                    |
| **subscriptions**    | `getMany`                                                                     | `create`, `remove`                                   |
| **suggestions**      | `getMany`                                                                     | –                                                    |
| **users**            | `getOne`                                                                      | –                                                    |
| **videos**           | `getOne`, `getMany`, `getManyTrending`, `getManySubscribed`                   | `revalidate`, `restoreThumbnail`, `remove`, `update` |
| **videoViews**       | –                                                                             | `create`                                             |
| **videoReactions**   | –                                                                             | `like`, `dislike`                                    |

### Usage Example 

``` ts

import { trpc } from "@/trpc/server"

// Query: Fetch playlist by ID
const [playlist] = trpc.playlists.getOne.useSuspenseQuery({
  id: "abc123",
});

// Mutation: Remove a playlist by ID
const remove = trpc.playlists.remove.useMutation();
remove.mutate({ id: "abc123" });

```
##  Getting Started

Clone the repo:

```bash

git clone https://github.com/wikkiboi/cliptube.git
cd cliptube
bun install

```

Create .env.local and add the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_WEBHOOK_SIGNING_SECRET
DATABASE_URL

UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN

MUX_TOKEN_ID
MUX_TOKEN_SECRET
MUX_WEBHOOK_SECRET

UPLOADTHING_TOKEN
```

Run the app locally:

```bash

bun run dev

```
