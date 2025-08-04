# File Tree

yt-clone/
├─ public/
│ ├─ file.svg
│ ├─ globe.svg
│ ├─ logo.svg
│ ├─ next.svg
│ ├─ placeholder.svg
│ ├─ system_prompts.ts
│ ├─ user-placeholder.svg
│ ├─ vercel.svg
│ └─ window.svg
├─ src/
│ ├─ app/
│ │ ├─ (auth)/
│ │ │ ├─ sign-in/
│ │ │ │ └─ [[...sign-in]]/
│ │ │ │ └─ page.tsx
│ │ │ ├─ sign-up/
│ │ │ │ └─ [[...sign-up]]/
│ │ │ │ └─ page.tsx
│ │ │ └─ layout.tsx
│ │ ├─ (home)/
│ │ │ ├─ feed/
│ │ │ │ ├─ subscribed/
│ │ │ │ │ └─ page.tsx
│ │ │ │ └─ trending/
│ │ │ │ └─ page.tsx
│ │ │ ├─ playlists/
│ │ │ │ ├─ [playlistId]/
│ │ │ │ │ └─ page.tsx
│ │ │ │ ├─ history/
│ │ │ │ │ └─ page.tsx
│ │ │ │ ├─ liked/
│ │ │ │ │ └─ page.tsx
│ │ │ │ └─ page.tsx
│ │ │ ├─ search/
│ │ │ │ └─ page.tsx
│ │ │ ├─ subscriptions/
│ │ │ │ └─ page.tsx
│ │ │ ├─ users/
│ │ │ │ ├─ [userId]/
│ │ │ │ │ └─ page.tsx
│ │ │ │ └─ current/
│ │ │ │ └─ route.ts
│ │ │ ├─ videos/
│ │ │ │ └─ [videoId]/
│ │ │ │ └─ page.tsx
│ │ │ ├─ client.tsx
│ │ │ ├─ layout.tsx
│ │ │ └─ page.tsx
│ │ ├─ (studio)/
│ │ │ ├─ studio/
│ │ │ │ ├─ videos/
│ │ │ │ │ └─ [videoId]/
│ │ │ │ │ └─ page.tsx
│ │ │ │ └─ page.tsx
│ │ │ └─ layout.tsx
│ │ ├─ api/
│ │ │ ├─ trpc/
│ │ │ │ └─ [trpc]/
│ │ │ │ └─ route.ts
│ │ │ ├─ uploadthing/
│ │ │ │ ├─ core.ts
│ │ │ │ └─ route.ts
│ │ │ ├─ users/
│ │ │ │ └─ webhook/
│ │ │ │ └─ route.ts
│ │ │ └─ videos/
│ │ │ └─ webhook/
│ │ │ └─ route.ts
│ │ ├─ feed/
│ │ │ ├─ [videoId]/
│ │ │ │ └─ page.tsx
│ │ │ ├─ layout.tsx
│ │ │ └─ page.tsx
│ │ ├─ globals.css
│ │ ├─ icon.svg
│ │ └─ layout.tsx
│ ├─ components/
│ │ ├─ ui/
│ │ │ ├─ alert.tsx
│ │ │ ├─ avatar.tsx
│ │ │ ├─ badge.tsx
│ │ │ ├─ button.tsx
│ │ │ ├─ calendar.tsx
│ │ │ ├─ card.tsx
│ │ │ ├─ carousel.tsx
│ │ │ ├─ chart.tsx
│ │ │ ├─ checkbox.tsx
│ │ │ ├─ collapsible.tsx
│ │ │ ├─ command.tsx
│ │ │ ├─ context-menu.tsx
│ │ │ ├─ dialog.tsx
│ │ │ ├─ drawer.tsx
│ │ │ ├─ dropdown-menu.tsx
│ │ │ ├─ filter-carousel.tsx
│ │ │ ├─ form.tsx
│ │ │ ├─ hover-card.tsx
│ │ │ ├─ input-otp.tsx
│ │ │ ├─ input.tsx
│ │ │ ├─ label.tsx
│ │ │ ├─ menubar.tsx
│ │ │ ├─ navigation-menu.tsx
│ │ │ ├─ pagination.tsx
│ │ │ ├─ popover.tsx
│ │ │ ├─ progress.tsx
│ │ │ ├─ radio-group.tsx
│ │ │ ├─ resizable.tsx
│ │ │ ├─ scroll-area.tsx
│ │ │ ├─ select.tsx
│ │ │ ├─ separator.tsx
│ │ │ ├─ sheet.tsx
│ │ │ ├─ sidebar.tsx
│ │ │ ├─ skeleton.tsx
│ │ │ ├─ slider.tsx
│ │ │ ├─ sonner.tsx
│ │ │ ├─ switch.tsx
│ │ │ ├─ table.tsx
│ │ │ ├─ tabs.tsx
│ │ │ ├─ textarea.tsx
│ │ │ ├─ toggle-group.tsx
│ │ │ ├─ toggle.tsx
│ │ │ ├─ tooltip.tsx
│ │ │ └─ user-avatar.tsx
│ │ ├─ infinite-scroll.tsx
│ │ └─ responsive-dialog.tsx
│ ├─ db/
│ │ ├─ index.ts
│ │ └─ schema.ts
│ ├─ hooks/
│ │ ├─ use-intersection-observer.ts
│ │ └─ use-mobile.ts
│ ├─ lib/
│ │ ├─ mux.ts
│ │ ├─ ratelimit.ts
│ │ ├─ redis.ts
│ │ ├─ uploadthing.ts
│ │ └─ utils.ts
│ ├─ modules/
│ │ ├─ auth/
│ │ │ └─ ui/
│ │ │ └─ components/
│ │ │ └─ auth-button.tsx
│ │ ├─ categories/
│ │ │ └─ server/
│ │ │ └─ procedures.ts
│ │ ├─ comment-reactions/
│ │ │ └─ server/
│ │ │ └─ procedures.ts
│ │ ├─ comments/
│ │ │ └─ server/
│ │ │ ├─ ui/
│ │ │ │ └─ components/
│ │ │ │ ├─ comment-form.tsx
│ │ │ │ ├─ comment-item.tsx
│ │ │ │ └─ comment-replies.tsx
│ │ │ ├─ procedures.ts
│ │ │ └─ types.ts
│ │ ├─ home/
│ │ │ └─ ui/
│ │ │ ├─ components/
│ │ │ │ ├─ home-navbar/
│ │ │ │ │ ├─ index.tsx
│ │ │ │ │ └─ search-input.tsx
│ │ │ │ └─ home-sidebar/
│ │ │ │ ├─ index.tsx
│ │ │ │ ├─ main-section.tsx
│ │ │ │ ├─ personal-section.tsx
│ │ │ │ └─ subscriptions-section.tsx
│ │ │ ├─ layouts/
│ │ │ │ └─ home-layout.tsx
│ │ │ ├─ sections/
│ │ │ │ ├─ categories-section.tsx
│ │ │ │ ├─ home-videos-section.tsx
│ │ │ │ ├─ subscribed-videos-section.tsx
│ │ │ │ └─ trending-videos-section.tsx
│ │ │ └─ views/
│ │ │ ├─ home-view.tsx
│ │ │ ├─ subscribed-view.tsx
│ │ │ └─ trending-view.tsx
│ │ ├─ playlists/
│ │ │ ├─ server/
│ │ │ │ └─ procedures.ts
│ │ │ ├─ ui/
│ │ │ │ ├─ components/
│ │ │ │ │ ├─ playlist-grid-card/
│ │ │ │ │ │ ├─ index.tsx
│ │ │ │ │ │ ├─ playlist-info.tsx
│ │ │ │ │ │ └─ playlist-thumbnail.tsx
│ │ │ │ │ ├─ playlist-add-modal.tsx
│ │ │ │ │ └─ playlist-create-modal.tsx
│ │ │ │ ├─ sections/
│ │ │ │ │ ├─ history-videos-section.tsx
│ │ │ │ │ ├─ liked-video-section.tsx
│ │ │ │ │ ├─ playlist-header-section.tsx
│ │ │ │ │ ├─ playlists-section.tsx
│ │ │ │ │ └─ videos-section.tsx
│ │ │ │ └─ views/
│ │ │ │ ├─ history-view.tsx
│ │ │ │ ├─ liked-view.tsx
│ │ │ │ ├─ playlists-view.tsx
│ │ │ │ └─ videos-view.tsx
│ │ │ └─ types.ts
│ │ ├─ search/
│ │ │ ├─ sections/
│ │ │ │ ├─ categories-section.tsx
│ │ │ │ └─ results-section.tsx
│ │ │ ├─ server/
│ │ │ │ └─ procedures.ts
│ │ │ └─ ui/
│ │ │ └─ views/
│ │ │ └─ search-view.tsx
│ │ ├─ studio/
│ │ │ ├─ server/
│ │ │ │ └─ procedures.ts
│ │ │ └─ ui/
│ │ │ ├─ components/
│ │ │ │ ├─ studio-navbar/
│ │ │ │ │ └─ index.tsx
│ │ │ │ ├─ studio-sidebar/
│ │ │ │ │ ├─ index.tsx
│ │ │ │ │ └─ studio-sidebar-header.tsx
│ │ │ │ ├─ studio-upload-modal.tsx
│ │ │ │ └─ studio-uploader.tsx
│ │ │ ├─ layouts/
│ │ │ │ └─ studio-layout.tsx
│ │ │ ├─ sections/
│ │ │ │ ├─ form-section.tsx
│ │ │ │ └─ videos-section.tsx
│ │ │ └─ view/
│ │ │ ├─ studio-view.tsx
│ │ │ └─ video-view.tsx
│ │ ├─ subscriptions/
│ │ │ ├─ hooks/
│ │ │ │ └─ use-subscription.ts
│ │ │ ├─ server/
│ │ │ │ └─ procedures.ts
│ │ │ └─ ui/
│ │ │ ├─ components/
│ │ │ │ ├─ subscription-button.tsx
│ │ │ │ └─ subscription-item.tsx
│ │ │ ├─ sections/
│ │ │ │ └─ subscriptions-section.tsx
│ │ │ └─ views/
│ │ │ └─ subscriptions-view.tsx
│ │ ├─ suggestions/
│ │ │ └─ server/
│ │ │ └─ procedures.ts
│ │ ├─ users/
│ │ │ ├─ server/
│ │ │ │ └─ procedures.ts
│ │ │ └─ ui/
│ │ │ ├─ components/
│ │ │ │ ├─ banner-upload-modal.tsx
│ │ │ │ ├─ user-info.tsx
│ │ │ │ ├─ user-page-banner.tsx
│ │ │ │ └─ user-page-info.tsx
│ │ │ ├─ sections/
│ │ │ │ ├─ user-section.tsx
│ │ │ │ └─ videos-section.tsx
│ │ │ ├─ views/
│ │ │ │ └─ user-view.tsx
│ │ │ └─ types.ts
│ │ ├─ video-reactions/
│ │ │ └─ server/
│ │ │ └─ procedures.ts
│ │ ├─ video-views/
│ │ │ └─ server/
│ │ │ └─ procedures.ts
│ │ └─ videos/
│ │ ├─ server/
│ │ │ └─ procedures.ts
│ │ ├─ ui/
│ │ │ ├─ components/
│ │ │ │ ├─ thumbnail-upload-modal.tsx
│ │ │ │ ├─ video-banner.tsx
│ │ │ │ ├─ video-description.tsx
│ │ │ │ ├─ video-grid-card.tsx
│ │ │ │ ├─ video-info.tsx
│ │ │ │ ├─ video-menu.tsx
│ │ │ │ ├─ video-owner.tsx
│ │ │ │ ├─ video-player.tsx
│ │ │ │ ├─ video-reactions.tsx
│ │ │ │ ├─ video-row-card.tsx
│ │ │ │ ├─ video-thumbnail.tsx
│ │ │ │ └─ video-top-row.tsx
│ │ │ ├─ sections/
│ │ │ │ ├─ comments-section.tsx
│ │ │ │ ├─ suggestions-section.tsx
│ │ │ │ └─ video-section.tsx
│ │ │ └─ views/
│ │ │ └─ video-view.tsx
│ │ └─ types.ts
│ ├─ scripts/
│ │ └─ seed-categories.ts
│ ├─ trpc/
│ │ ├─ routers/
│ │ │ └─ \_app.ts
│ │ ├─ client.tsx
│ │ ├─ init.ts
│ │ ├─ query-client.ts
│ │ └─ server.ts
│ ├─ constants.ts
│ └─ middleware.ts
├─ .env.local
├─ .gitignore
├─ bun.lock
├─ components.json
├─ drizzle.config.ts
├─ eslint.config.mjs
├─ next-env.d.ts
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
├─ README.md
└─ tsconfig.json
