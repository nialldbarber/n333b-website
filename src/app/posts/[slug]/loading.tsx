import { Skeleton } from "~/components/skeleton";
import { Spacer } from "~/components/spacer";

export default async function PostPage() {
  return (
    <div className="flex flex-row">
      <Skeleton block={3} height="xlarge" />
      <Spacer orientation="vertical" paddingHorizontal="20px" />
      <Skeleton block={3} />
    </div>
  );
}
