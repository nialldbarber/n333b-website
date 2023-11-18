import { collectTags, getPosts } from "~/lib/posts";
import { PostList } from "~/components/post-list";

export default async function Posts() {
  const [posts, tags] = await Promise.all([getPosts(), collectTags()]);
  return (
    <div className="flex h-minusHeader">
      <PostList posts={posts} tags={tags} />
    </div>
  );
}
