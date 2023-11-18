import Image from "next/image";
import { notFound } from "next/navigation";

import { collectLinks, getPost, getPosts } from "~/lib/posts";
import { GoBack } from "~/components/button/go-back";
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
  const [post, links] = await Promise.all([
    getPost(params.slug),
    collectLinks(params.slug),
  ]);
  if (!post) return notFound();

  return (
    <>
      <GoBack />
      <div className="grid grid-cols-posts-table-of-content pt-2">
        <div>
          <div className="pb-11 pt-7 flex justify-center">
            <Image
              src={post.image}
              width={400}
              height={400}
              alt="stuff"
              className="rounded-md"
              priority
            />
          </div>
          <div className="h-[1px] bg-accents2 w-full mb-7" />
          <PostBody>{post?.body}</PostBody>
        </div>
        {links && <TableOfContents links={links} />}
      </div>
    </>
  );
}
