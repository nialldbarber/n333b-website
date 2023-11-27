import Image from "next/image";
import { notFound } from "next/navigation";

import { collectSections, getPost, getPosts } from "~/lib/posts";
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
  const [post, sections] = await Promise.all([
    getPost(params.slug),
    collectSections(),
  ]);
  if (!post) return notFound();

  console.log(sections);

  return (
    <>
      <GoBack />
      <div className="flex flex-col lg:grid lg:grid-cols-posts-table-of-content pt-2 mb-10">
        <div className="lg:pr-20">
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
        {sections && <TableOfContents sections={sections} />}
      </div>
    </>
  );
}
