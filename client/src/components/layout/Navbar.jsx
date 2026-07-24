import { useLocation } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const titles = {
  "/dashboard": "Dashboard",
  "/community": "Community",
  "/courses": "Courses",
  "/live-sessions": "Live Sessions",
};

function Navbar() {
  const { pathname } = useLocation();

  const title =
    titles[pathname] || "LearnSpace";

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-6">
      <div>
        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        <p className="text-sm text-slate-400">
          Welcome back 👋
        </p>
      </div>

      <Avatar>
        <AvatarFallback>CP</AvatarFallback>
      </Avatar>
    </header>
  );
}

export default Navbar;