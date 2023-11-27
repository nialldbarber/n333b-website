import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Text } from "~/components/text";

type Props = {
  sections: Array<string>;
};

function format(link: string) {
  let formattedLink = link.replace(/-/g, " ").trim();
  return formattedLink;
}

export default function TableOfContents({ sections }: Props) {
  return (
    <aside className="sticky h-fit pl-6 top-32 p-6 ml-5 rounded-lg border border-accents2 bg-hoverColor hidden lg:block">
      <Text level="3">Table of contents</Text>
      <div className="flex flex-col pt-4">
        {sections?.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="group flex items-center py-2 pl-1 focus:outline focus:outline-1 focus:outline-accents3 rounded-md"
          >
            <ArrowRightIcon className="transition-all mr-2 group-hover:mr-3 duration-200 ease-in-out" />
            <Text className="capitalize text-sm">{format(section)}</Text>
          </a>
        ))}
      </div>
    </aside>
  );
}
