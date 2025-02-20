import { useMutation } from "@tanstack/react-query";

import { signup as signupApi } from "@/services/api-auth";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
  });

  return { signup, isPending };
}
