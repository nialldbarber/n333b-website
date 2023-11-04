"use client";

import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { Text } from "~/components/text";

type Props = {
  tags: Array<string>;
  selectFilter: (tag: string) => void;
};

export function PostTags({ tags, selectFilter }: Props) {
  return (
    <ToggleGroup.Root
      type="single"
      className="bg-black inline-flex flex-col"
      orientation="horizontal"
    >
      {tags?.map((tag, index) => (
        <div key={index} className="mr-20">
          <ToggleGroup.Item
            value={tag}
            className="flex bg-white h-5 w-5 data-[state=on]:bg-yellow my-4 pl-5"
            onClick={() => selectFilter(tag)}
            tabIndex={index}
          >
            <Text level="span" className="pl-4 pb-1">
              {tag}
            </Text>
          </ToggleGroup.Item>
        </div>
      ))}
    </ToggleGroup.Root>
  );
}
