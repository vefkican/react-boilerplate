import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
import { Loader } from "@/components/ui/loader";

export function PublicRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;
  if (user) return <Navigate to="/dashboard" replace />;

  return <Outlet />;
}
