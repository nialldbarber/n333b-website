import Image from "next/image";
import Link from "next/link";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import { Code } from "bright";
import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

import Stack from "~/components/stack";
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
  img: ({ props }) => {
    return <Image {...props} />;
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

// Create a union:
type Fruit = {
  favourite: "banana";
  second: "apple";
  least: "orange";
};

// Pick an item from that union:
type Apple = Pick<Fruit, "second">;
//     ^? "apple"
