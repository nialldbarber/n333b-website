import fs from "fs/promises";
import path from "path";
import { cache } from "react";
import matter from "gray-matter";

import type { Post } from "~/lib/types";

const postsRoot = "./src/posts/";
const readMDXFiles = async () => {
  const files = await fs.readdir(postsRoot);
  return files.filter((file) => path.extname(file) === ".mdx");
};

export const getPosts = cache(async () => {
  const posts = await readMDXFiles();

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `${postsRoot}${file}`;
        const postContent = await fs.readFile(filePath, "utf-8");
        const { data, content } = matter(postContent);
        if (data.published === false) return null;
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

function findUniqueTags(tags: Post[]) {
  return Array.from(new Set(tags.flatMap((tag) => tag?.tags)));
}

export async function collectTags() {
  try {
    const posts = await getPosts();
    const validPosts = posts.filter((post): post is Post => post !== null);
    return ["all", ...findUniqueTags(validPosts)];
  } catch (error) {
    throw Error(`Error collecting tags ${error}`);
  }
}

export const collectSections = cache(async () => {
  const posts = await readMDXFiles();
  const sectionRegex = /id="([^"]*)"/g;

  const sectionsPerPost = await Promise.all(
    posts.map(async (post) => {
      const filePath = `${postsRoot}${post}`;
      const postContent = await fs.readFile(filePath, "utf-8");
      const { content } = matter(postContent);
      const matches = [...content.matchAll(sectionRegex)].map(
        (match) => match[1]
      );
      return { [post.replace(".mdx", "")]: matches };
    })
  );

  return sectionsPerPost.reduce((acc, curr) => ({ ...acc, ...curr }), {});
});
