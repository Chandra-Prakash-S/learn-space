import { Navigate, Outlet } from "react-router-dom";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

function GuestRoute() {
  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (data?.success) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default GuestRoute;