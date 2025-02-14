import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "@/services/api-auth";

export function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { user, isPending, isAuthenticated: user?.role === "authenticated" };
}
