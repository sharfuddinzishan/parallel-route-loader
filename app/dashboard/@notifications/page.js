// dashboard/@notifications/page.js
export const dynamic = "force-dynamic";

import { wait } from "@/lib/wait";
import Link from "next/link";

export default async function PageNotifications() {
  await wait(4500);

  return (
    <>
      <div className="border flex items-center justify-center gap-2">
        <h1 className="text-center font-bold text-2xl">All Notifications</h1>
        <button>
          <Link
            className="font-bold text-lg text-blue-600"
            href={`/dashboard/seen`}
          >
            Seen
          </Link>
        </button>
      </div>
    </>
  );
}
