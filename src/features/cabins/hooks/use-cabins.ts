import { useQuery } from "@tanstack/react-query";

import { getCabins } from "@/services/api-cabins";

export function useCabins() {
  const {
    data: cabins,
    isPending,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { cabins, isPending, error };
}
