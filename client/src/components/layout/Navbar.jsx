import { useLocation, useNavigate } from "react-router-dom";

import { LogOut } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useLogoutMutation } from "@/hooks/auth/useLogoutMutation";

const titles = {
  "/dashboard": "Dashboard",
  "/community": "Community",
  "/courses": "Courses",
  "/live-sessions": "Live Sessions",
};

function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { data } = useCurrentUser();
  const logoutMutation = useLogoutMutation();

  const title = titles[pathname] || "LearnSpace";

  const user = data?.user;

  const initials =
    user?.name
      ?.split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase() || "U";

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();

      toast.success("Logged out successfully!");

      navigate("/login", {
        replace: true,
      });
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to logout."
      );
    }
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-6">
      <div>
        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        <p className="text-sm text-slate-400">
          Welcome back, <span className="font-medium text-white">{user?.name}</span> 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleLogout}
          disabled={logoutMutation.isPending}
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}

export default Navbar;