import { ReactNode, useEffect } from "react";

import { useNavigate } from "react-router";

import { useUser } from "@/features/authentication/hooks/use-user";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const { isPending, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isPending) navigate("/login", { replace: true });
  }, [isAuthenticated, isPending, navigate]);

  if (isPending) return <div>Loading...</div>;

  return children;
}

export default ProtectedRoute;
