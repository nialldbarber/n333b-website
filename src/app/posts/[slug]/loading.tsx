import { Loader } from "~/components/loader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-minusHeader">
      <Loader />
    </div>
  );
}
