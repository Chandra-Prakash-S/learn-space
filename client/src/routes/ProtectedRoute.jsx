import { Navigate, Outlet } from "react-router-dom";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

function ProtectedRoute() {
  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!data?.success) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;