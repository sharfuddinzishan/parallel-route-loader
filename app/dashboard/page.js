import { wait } from "@/lib/wait";

export default async function PageDashboard() {
  await wait();
  return (
    <>
      <p className="text-center font-bold text-2xl">Dashboard Layout</p>
    </>
  );
}
