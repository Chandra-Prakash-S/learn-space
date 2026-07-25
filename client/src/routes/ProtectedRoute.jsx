import { Navigate, Outlet } from "react-router-dom";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import PageLoader from "@/components/common/PageLoader";

function ProtectedRoute() {
  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return <PageLoader />;
  }

  if (!data?.user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;