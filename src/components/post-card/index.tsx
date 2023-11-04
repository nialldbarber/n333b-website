import Link from "next/link";

import { cn } from "~/lib/style/cn";
import type { Post } from "~/lib/types";
import { Text } from "~/components/text";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className={cn("border p-4 my-2 border-dashed")}>
      <Link href={`/posts/${post?.slug}`}>
        <Text>{post?.title}</Text>
      </Link>
    </div>
  );
}
