import { DEFAULT_LIMIT } from "@/constants";
import { HydrateClient, trpc } from "@/trpc/server";
import { SubscribedView } from "../../../../modules/home/ui/views/subscribed-view";

// Make sure to have this line for any server components that prefetch
export const dynamic = "force-dynamic";

export default async function Page() {
  void trpc.videos.getManyTrending.prefetchInfinite({
    limit: DEFAULT_LIMIT,
  });

  return (
    <HydrateClient>
      <SubscribedView />
    </HydrateClient>
  );
}
