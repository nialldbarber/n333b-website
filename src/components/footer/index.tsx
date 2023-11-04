import Link from "next/link";

import { cn } from "~/lib/style/cn";

const links = [
  {
    id: "footer-links-1",
    title: "Github",
    href: "https://github.com/nialldbarber",
  },
  {
    id: "footer-links-2",
    title: "Instagram",
    href: "https://www.instagram.com/nialldbarber/",
  },
  {
    id: "footer-links-3",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/niall-barber/",
  },
];

const date = new Date();
const year = date.getFullYear();

export function Footer() {
  return (
    <footer
      className={cn(
        "flex flex-col items-center justify-center m-auto py-6 bg-black max-w-4xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
      )}
      role="contentinfo"
    >
      <nav className="mb-3" aria-label="Site">
        <ul className="flex justify-center">
          {links.map(({ id, title, href }) => (
            <li key={id}>
              <Link href={href} className="p-4" target="_blank">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p>&copy; Niall Barber {year}</p>
    </footer>
  );
}
