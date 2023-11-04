import { collectTags, getPosts } from "~/lib/posts";
import { PostList } from "~/components/post-list";
import { Text } from "~/components/text";

export default async function Posts() {
  const [posts, tags] = await Promise.all([getPosts(), collectTags()]);
  return (
    <div>
      <Text level="1">Posts page</Text>
      <PostList posts={posts} tags={tags} />
    </div>
  );
}
