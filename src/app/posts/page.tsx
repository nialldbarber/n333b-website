import { collectTags, getPosts } from "~/lib/posts";
import { PostList } from "~/components/post-list";
import { Spacer } from "~/components/spacer";
import { Text } from "~/components/text";

export default async function Posts() {
  const [posts, tags] = await Promise.all([getPosts(), collectTags()]);
  return (
    <>
      <div className="max-w-2xl m-auto mb-10">
        <Text level="1" weight="fontSemibold">
          🤔...hmmm?
        </Text>
        <Spacer paddingVertical="28px" />
        <div>
          <Text>
            Well hello there! 👋 take your pick from one of the posts below! Or,
            select a category and go nuts{" "}
            <Text level="span" className="text-xs text-red-300 align-top">
              {"!important"}
            </Text>{" "}
            I attempt to add one post per month, with subjects ranging from{" "}
            <Text
              level="span"
              weight="fontSemibold"
              className="text-accents5 italic"
            >
              React
            </Text>
            , to{" "}
            <Text
              level="span"
              weight="fontSemibold"
              className="text-accents5 italic"
            >
              React Native
            </Text>
            , a bit of{" "}
            <Text
              level="span"
              weight="fontSemibold"
              className="text-accents5 italic"
            >
              CSS
            </Text>{" "}
            sprinkled in there,{" "}
            <Text
              level="span"
              weight="fontSemibold"
              className="text-accents5 italic"
            >
              mobile development
            </Text>{" "}
            and even other concepts that interest me 🫡
          </Text>
        </div>
      </div>

      <div className="flex h-minusHeader">
        <PostList posts={posts} tags={tags} />
      </div>
    </>
  );
}
