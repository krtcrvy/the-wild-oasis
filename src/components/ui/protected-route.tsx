import { ReactNode, useEffect } from "react";

import { useNavigate } from "react-router";

import { Spinner } from "@/components/ui/spinner";
import { useUser } from "@/features/authentication/hooks/use-user";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const { isPending, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isPending) navigate("/login", { replace: true });
  }, [isAuthenticated, isPending, navigate]);

  if (isPending)
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <Spinner size="lg" />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
