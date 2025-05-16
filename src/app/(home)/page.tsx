import { DEFAULT_LIMIT } from "../../constants";
import { HomeView } from "../../modules/home/ui/views/home-view";
import { HydrateClient, trpc } from "../../trpc/server";

// Make sure to have this line for any server components that prefetch
export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    categoryId?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { categoryId } = await searchParams;
  void trpc.categories.getMany.prefetch();
  void trpc.videos.getMany.prefetchInfinite({
    categoryId,
    limit: DEFAULT_LIMIT,
  });

  return (
    <HydrateClient>
      <HomeView categoryId={categoryId} />
    </HydrateClient>
  );
}
