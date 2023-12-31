import Link from "next/link";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import { Code } from "bright";
import type { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

import { CodeBlock } from "~/components/code-block";
import { Spacer } from "~/components/spacer";
import { Stack } from "~/components/stack";
import { Text } from "~/components/text";

export const mdxComponents: MDXComponents = {
  pre: Code,
  a: ({ children, ...props }) => {
    return (
      // @ts-ignore
      <Link {...props} href={props.href || ""}>
        {children}
      </Link>
    );
  },
  Paragraph: ({ children, ...rest }) => <Text {...rest}>{children}</Text>,
  HeaderOne: ({ children, ...rest }) => (
    <Text level="1" {...rest}>
      {children}
    </Text>
  ),
  Stack: ({ children, ...rest }) => (
    <Stack gutter="10px" {...rest}>
      {children}
    </Stack>
  ),
  Highlight: ({ children, ...rest }) => (
    <Text level="highlight" {...rest}>
      {children}
    </Text>
  ),
  Spacer: ({ ...rest }) => <Spacer {...rest} />,
  Blockquote: ({ children, ...rest }) => (
    <div
      className="relative bg-hoverColor border border-accents2 rounded-lg px-10 py-5"
      {...rest}
    >
      <Text className="absolute left-4 top-6 text-[3rem]">“</Text>
      <div className="italic">{children}</div>
      <Text className="absolute right-4 top-6 text-[3rem]">”</Text>
    </div>
  ),
  Code: CodeBlock,
};

export default function PostBody({ children }: { children: string }) {
  return (
    <section>
      <article className="leading-7">
        <MDXRemote
          source={children}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkToc],
              rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
            },
          }}
          components={mdxComponents}
        />
      </article>
    </section>
  );
}
