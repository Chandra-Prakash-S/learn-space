import { Navigate, Outlet } from "react-router-dom";

import PageLoader from "@/components/common/PageLoader";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

function GuestRoute() {
  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return <PageLoader />;
  }

  if (data?.user) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return <Outlet />;
}

export default GuestRoute;