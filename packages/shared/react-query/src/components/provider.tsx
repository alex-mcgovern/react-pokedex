import type { ReactNode } from "react";

import { useState } from "react";

import { QueryClient, QueryClientProvider, keepPreviousData } from "@tanstack/react-query";

export function ReactQueryProvider(props: { children: ReactNode }) {
	const [queryClient] = useState(() => {
		return new QueryClient({
			defaultOptions: {
				queries: {
					initialData: keepPreviousData,
					retry: 1,
					throwOnError: true,
				},
			},
		});
	});

	return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
}
