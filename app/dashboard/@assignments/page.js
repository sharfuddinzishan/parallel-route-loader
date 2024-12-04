import { wait } from "@/lib/wait";

export default async function PageAssignemts() {
  await wait(2000);
  return (
    <>
      <div className="border min-h-40 flex items-center justify-center">
        <h1 className="font-bold mt-5 text-2xl">Assignements</h1>
      </div>
    </>
  );
}