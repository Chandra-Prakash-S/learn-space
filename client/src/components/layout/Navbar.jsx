import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { LogOut, Menu } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Sidebar from "@/components/layout/Sidebar";

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

  const [open, setOpen] = useState(false);

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
      setOpen(false);

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
    <header className="flex min-h-23.5 items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3 md:px-6">
    {/* Left */}
    <div className="flex items-center gap-6">
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-64 border-slate-800 bg-slate-900 p-0"
          >
            <Sidebar onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          {user?.role === "admin"
            ? "Administrator Panel"
            : `Welcome back, ${user?.name}! 👋`}
        </p>
      </div>
    </div>

    {/* Right */}
    <div className="flex items-center gap-4">
      {/* User Info */}
      <div className="hidden md:flex flex-col items-end leading-tight">
        <span className="text-sm font-semibold text-white">
          {user?.name}
        </span>

        <span
          className={`mt-1 rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
            user?.role === "admin"
              ? "bg-amber-500 text-white"
              : "bg-indigo-600 text-white"
          }`}
        >
          {user?.role}
        </span>
      </div>

      {/* Avatar */}
      <Avatar
        className={
          user?.role === "admin"
            ? "h-10 w-10 ring-2 ring-amber-500"
            : "h-9 w-9"
        }
      >
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div className="w-px h-8 bg-slate-700" />

      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-red-500/10 hover:text-red-400"
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