import fs from "fs/promises";
import path from "path";
import { cache } from "react";
import matter from "gray-matter";

import type { Post } from "~/lib/types";

export const getPosts = cache(async () => {
  const postsRoot = "./src/posts/";
  const posts = await fs.readdir(postsRoot);

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `${postsRoot}${file}`;
        const postContent = await fs.readFile(filePath, "utf-8");
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as Post;
      })
  );
});

export async function getPost(slug: string) {
  try {
    const posts = await getPosts();
    return posts.find((post) => post?.slug === slug);
  } catch (error) {
    throw Error(`Error fetching posts ${error}`);
  }
}

export async function collectLinks(slug: string) {
  try {
    const currentPost = await getPost(slug);
    return currentPost?.sections;
  } catch (error) {
    throw Error(`Error collecting links ${error}`);
  }
}

function findUniqueTags(tags: Post[]) {
  return Array.from(new Set(tags.flatMap((tag) => tag?.tags)));
}

export async function collectTags() {
  try {
    const posts = await getPosts();
    const validPosts = posts.filter((post): post is Post => post !== null);
    const uniqueTags = findUniqueTags(validPosts);
    return uniqueTags;
  } catch (error) {
    throw Error(`Error collecting tags ${error}`);
  }
}
