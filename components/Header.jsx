import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-center gap-x-5">
          <li className="px-4 py-2 bg-indigo-500 text-neutral-300 font-bold">
            <Link href={`/`}>Home</Link>
          </li>
          <li className="px-4 py-2 bg-indigo-500 text-neutral-300 font-bold">
            <Link href={`/dashboard`}>Dashboard</Link>
          </li>
          <li className="px-4 py-2 bg-indigo-500 text-neutral-300 font-bold">
            <Link href={`/dashboard/settings`}>Settings</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
