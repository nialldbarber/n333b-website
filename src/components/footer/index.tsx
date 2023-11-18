import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

import { cn } from "~/lib/style/cn";

const links = [
  {
    id: "footer-links-1",
    title: "Github",
    href: "https://github.com/nialldbarber",
    component: <GitHubLogoIcon />,
  },
  {
    id: "footer-links-2",
    title: "Instagram",
    href: "https://www.instagram.com/nialldbarber/",
    component: <InstagramLogoIcon />,
  },
  {
    id: "footer-links-3",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/niall-barber/",
    component: <LinkedInLogoIcon />,
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
      <nav aria-label="Site">
        <ul className="flex justify-center">
          {links.map(({ id, title, href, component }) => (
            <li key={id}>
              <Link
                href={href}
                className="flex items-center p-4 transition hover:scale-110"
                target="_blank"
              >
                <div className="pr-2">{component}</div>
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
