"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from "framer-motion";

import { cn } from "~/lib/style/cn";
import { Text } from "~/components/text";

const links = [
  { id: "header-links-1", title: "Posts", href: "/posts", segment: "posts" },
  {
    id: "header-links-2",
    title: "Snippets",
    href: "/snippets",
    segment: "snippets",
  },
  { id: "header-links-3", title: "About", href: "/about", segment: "about" },
];

export default function Header() {
  const activeSegment = useSelectedLayoutSegment();
  const isActive = (segment: string) => segment === activeSegment;

  return (
    <header
      className={cn(
        "flex justify-between overflow-hidden m-auto pl-3 py-6 sticky top-0 bg-black max-w-4xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
      )}
    >
      <Link href="/" aria-label="Home">
        <Text level="3">n333b</Text>
      </Link>
      <nav role="navigation" aria-label="Primary navigation">
        <ul className="flex">
          {links.map(({ id, title, href, segment }) => (
            <li key={id}>
              <Link
                href={href}
                aria-label={`Navigate to ${title}`}
                className={cn(
                  "relative cursor-pointer after:bg-white py-3 px-6 mx-2 font-semibold",
                  segment === activeSegment && "text-[#025a4e] font-bold"
                )}
              >
                {title}
                {isActive(segment) && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 bg-[#ede7de] rounded-full -z-10"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ type: "tween" }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
