import { Skeleton } from "~/components/skeleton";
import { Text } from "~/components/text";

export default function Loading() {
  return (
    <div>
      {/* <Text level="large">Loading...</Text> */}
      <Skeleton />
    </div>
  );
}
