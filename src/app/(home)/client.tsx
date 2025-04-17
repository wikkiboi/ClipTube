"use client";

import { trpc } from "../../trpc/client";

export default function PageClient() {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Wikki",
  });
  return <div>Page client says: {data.greeting}</div>;
}
