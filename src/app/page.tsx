import { Spacer } from "~/components/spacer";

export default async function Home() {
  return (
    <div className="h-minusHeaderHome flex flex-col justify-center">
      <p className="text-[10vw] font-semibold leading-none">Niall Barber</p>
      <Spacer paddingVertical="5px" />
      <p className="text-[6vw] text-right font-semibold leading-none">
        Frontend Engin33r
      </p>
    </div>
  );
}
