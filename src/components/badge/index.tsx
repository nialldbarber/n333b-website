import { cn } from "~/lib/style/cn";
import { Text } from "~/components/text";

type Props = {
  text: string;
  index: number;
  isActive: boolean;
  pointerEvents?: "none" | "auto";
  onClick: () => void;
};

export function Badge({
  text,
  index,
  isActive,
  pointerEvents = "auto",
  ...rest
}: Props) {
  const getColorFromIndex = (isActive: boolean) => {
    const colors = [
      [
        "bg-badgePurpleBg",
        "text-badgePurpleFg",
        isActive ? "outline outline-badgePurpleFg" : "",
      ],
      [
        "bg-badgeGreenBg",
        "text-badgeGreenFg",
        isActive ? "outline outline-badgeGreenFg" : "",
      ],
      [
        "bg-badgeAmberBg",
        "text-badgeAmberFg",
        isActive ? "outline outline-badgeAmberFg" : "",
      ],
      [
        "bg-badgeBlueBg",
        "text-badgeBlueFg",
        isActive ? "outline outline-badgeBlueFg" : "",
      ],
    ];
    return colors[index % colors.length];
  };

  return (
    <button
      type="button"
      className={cn(
        "px-3 rounded-full leading-4 transition-all hover:scale-105 focus:scale-95",
        ...getColorFromIndex(isActive)
      )}
      style={{ pointerEvents }}
      {...rest}
    >
      <Text level="span" className="p-0 text-sm leading-5 font-medium">
        {text}
      </Text>
    </button>
  );
}
