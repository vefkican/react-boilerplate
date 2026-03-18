import { useAuth } from "@/context/useAuth";
import { Button } from "@/components/ui/button";

export function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">{user?.email}</p>
        <Button variant="outline" onClick={logout}>
          Çıkış Yap
        </Button>
      </div>
    </div>
  );
}
