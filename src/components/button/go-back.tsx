"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export function GoBack() {
  const { push } = useRouter();
  return (
    <button
      className="transition-all hover:scale-110 focus:scale-95"
      onClick={() => push("/posts")}
    >
      <ArrowLeftIcon width={30} height={30} />
    </button>
  );
}
