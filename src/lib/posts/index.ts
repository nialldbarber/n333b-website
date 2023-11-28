import fs from "fs/promises";
import path from "path";
import { cache } from "react";
import matter from "gray-matter";

import type { Post } from "~/lib/types";

const postsRoot = "./src/posts/";

export const getPosts = cache(async () => {
  const posts = await fs.readdir(postsRoot);

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
    let uniqueTags = findUniqueTags(validPosts);
    uniqueTags = ["all", ...uniqueTags];
    return uniqueTags;
  } catch (error) {
    throw Error(`Error collecting tags ${error}`);
  }
}

export const collectSections = cache(async () => {
  const posts = await fs.readdir(postsRoot);
  const sectionRegex = /id="([^"]*)"/g;

  const lines = Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `${postsRoot}${file}`;
        const postContent = await fs.readFile(filePath, "utf-8");
        const { content } = matter(postContent);
        return content;
      })
  );

  const unwrap = (await lines).flatMap((line) => {
    let match;
    const sections = [];

    while ((match = sectionRegex.exec(line))) {
      sections.push(match[1]);
    }

    return sections;
  });

  return unwrap;
});
