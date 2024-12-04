export default function LayoutDashboardS({
  children,
  assignments,
  quiz,
  notifications,
}) {
  return (
    <section className="p-10 bg-gray-950 min-h-screen mt-3 text-white">
      <div className="px-5">{children}</div>
      <div className="grid grid-cols-2 border border-zinc-950 p-5 gap-x-5">
        <div className="grid grid-rows-2 gap-y-5">
          {assignments}
          {quiz}
        </div>
        {notifications}
      </div>
    </section>
  );
}
