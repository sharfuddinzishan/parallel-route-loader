// dashboard/@quiz/page.js
import { wait } from "@/lib/wait";

export default async function PageQuiz() {
  await wait(3500);
  return (
    <>
      <div className="border min-h-40 flex items-center justify-center">
        <h1 className="text-center font-bold mt-5 text-2xl">Quiz</h1>
      </div>
    </>
  );
}
