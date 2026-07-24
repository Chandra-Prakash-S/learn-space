import { NavLink } from "react-router-dom";
import { navigation } from "@/utils/navigation";

function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col border-r border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 px-6 py-5">
        <h1 className="text-2xl font-bold tracking-tight text-indigo-400">
          LearnSpace
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Learn. Connect. Grow.
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navigation.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <Icon size={20} />

            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-800 p-4">
        <p className="text-xs text-slate-500">
          LearnSpace v1.0
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;