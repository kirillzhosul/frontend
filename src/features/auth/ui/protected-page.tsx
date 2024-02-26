import { ROUTES } from "@/shared";
import { apiClient } from "@/shared/api/api-instance";
import { PageSpinner } from "@/shared/ui";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();

    const { isPending, isError } = useQuery({
      queryKey: [],
      queryFn: (data: {}) => {
        return apiClient.post("/contact/", data);
      },
      retry: 0,
      staleTime: 5 * 60 * 1000,
    });

    if (isPending) {
      return <PageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.auth);
    }

    return <Component {...props} />;
  };
}
