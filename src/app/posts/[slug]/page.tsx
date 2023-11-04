import { notFound } from "next/navigation";

import { collectLinks, getPost, getPosts } from "~/lib/posts";
import { cn } from "~/lib/style/cn";
import PostBody from "~/components/post-body";
import TableOfContents from "~/components/table-of-contents";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post?.slug }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  const links = await collectLinks(params.slug);
  if (!post) return notFound();

  return (
    <div className={cn("grid grid-cols-posts-table-of-content")}>
      <PostBody>{post?.body}</PostBody>
      {links && <TableOfContents links={links} />}
    </div>
  );
}
