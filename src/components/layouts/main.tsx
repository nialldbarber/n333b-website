import { cn } from "~/lib/style/cn";

export default function Main({ children }: { children: React.ReactNode }) {
  // TODO: the main body content should be as big as the full screen - the header and footer
  return (
    <div
      className={cn(
        "m-auto px-6 pt-10 pb-5 md:px-0 h-full max-w-4xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
      )}
    >
      {children}
    </div>
  );
}
