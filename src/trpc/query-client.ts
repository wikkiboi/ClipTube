import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";
import superjson from "superjson";
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        deserializeData: superjson.deserialize,
      },
    },
  });
}

// Copied from https://trpc.io/docs/client/react/server-components

// staleTime: With SSR, we usually want to set some default staleTime above 0 to avoid refetching immediately on the client.

// shouldDehydrateQuery: This is a function that determines whether a query should be dehydrated or not. Since the RSC transport protocol supports hydrating promises over the network, we extend the `defaultShouldDehydrateQuery` function to also include queries that are still pending. This will allow us to start prefetching in a server component high up the tree, then consuming that promise in a client component further down.

// serializeData and deserializeData (optional): If you set up a data transformer in the previous step, set this option to make sure the data is serialized correctly when hydrating the query client over the server-client boundary.
