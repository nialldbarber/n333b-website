"use client";

import { useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";

import { useCopyToClipboard } from "~/hooks/useCopyToClipboard";
import { useTimeout } from "~/hooks/useTimeout";
import { Text } from "~/components/text";

type Props = {
  language: string;
  children: React.ReactNode;
};

export function CodeBlock({ language, children, ...rest }: Props) {
  const [checked, setChecked] = useState(false);

  useTimeout(() => {
    if (checked) {
      setChecked(false);
    }
  }, 3000);

  const ref = useRef<HTMLDivElement>(null);
  const { copy } = useCopyToClipboard();

  async function handleCopyCodeBlock() {
    if (ref.current) {
      try {
        const isCopied = await copy(ref.current.innerText);
        if (isCopied) {
          console.log("Copied");
          setChecked(true);
        } else {
          console.log("Not copied");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="relative no-code" {...rest}>
      {language && (
        <div className="absolute -top-6 right-5 bg-accents9 px-4 py-2 rounded-lg after:content=[''] after:-top-[1px] after:-left-[1px] after:-bottom-[1px] after:-right-[1px] after:bg-accents2 after:absolute after:rounded-lg after:-z-10">
          <Text className="text-sm">{language}</Text>
        </div>
      )}
      <button
        className="absolute top-3 right-1 p-3"
        onClick={handleCopyCodeBlock}
      >
        {checked ? <CheckIcon /> : <CopyIcon />}
      </button>
      <div ref={ref}>{children}</div>
    </div>
  );
}
