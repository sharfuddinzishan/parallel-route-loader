import Link from "next/link";

export default function PageSeen() {
  return (
    <>
      <div className="border flex items-center justify-center gap-2">
        <h1 className="text-center font-bold text-2xl">Seen Notifications</h1>
        <button>
          <Link className="font-bold text-lg text-blue-600" href={`/dashboard`}>
            All
          </Link>
        </button>
      </div>
    </>
  );
}
