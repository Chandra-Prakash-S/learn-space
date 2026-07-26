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
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-4 md:px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
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
          <h2 className="text-lg font-semibold md:text-xl">
            {title}
          </h2>

          <p className="hidden text-sm text-slate-400 sm:block">
            Welcome back,{" "}
            <span className="font-medium text-white">
              {user?.name}
            </span>{" "}
            👋
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 md:gap-4">
        <Avatar className="h-9 w-9">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

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