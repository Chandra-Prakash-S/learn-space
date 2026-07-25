import { NavLink } from "react-router-dom";
import { GraduationCap } from "lucide-react";

import { navigation } from "@/utils/navigation";

function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col border-r border-slate-800 bg-slate-900">
      {/* Brand */}
      <div className="border-b border-slate-800 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg transition-transform duration-300 hover:scale-105">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-white">
              LearnSpace
            </h1>

            <p className="mt-0.5 text-sm text-slate-400">
              Learn. Connect. Grow.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {navigation.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-indigo-900/40 shadow-md"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-4">
        <p className="text-xs text-slate-500">
          LearnSpace v1.0
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;