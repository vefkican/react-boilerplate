import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Loader } from "@/components/ui/loader";

export function ProtectedRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;
  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}
